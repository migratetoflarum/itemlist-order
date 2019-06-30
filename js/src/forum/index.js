import {extend, override} from 'flarum/extend';
import app from 'flarum/app';
import ItemList from 'flarum/utils/ItemList';
import Button from 'flarum/components/Button';
import HeaderSecondary from 'flarum/components/HeaderSecondary';
import SignUpModal from 'flarum/components/SignUpModal';
import LogInModal from 'flarum/components/LogInModal';
import SubtreeRetainer from 'flarum/utils/SubtreeRetainer';
import applyCustomListItemOrdering from './utils/applyCustomListItemOrdering';
import EditorModal from './components/EditorModal';
import getStoredConfigForItemList from './utils/getStoredConfigForItemList';

/* global flarum */

function editModeEnabled() {
    return app.session.user && localStorage.getItem('migratetoflarum-itemlist-order-mode') === 'edit';
}

function extendList(object, method, name) {
    let edit = false;

    override(object, method, function (original, ...args) {
        const items = original(...args);

        if (edit) {
            const modified = new ItemList();

            modified.add('itemlist-order-editor', EditorModal.component({
                items,
                name,
                finishedEdit() {
                    edit = false;
                },
            }));

            return modified;
        }

        // If empty list, we don't offer any option
        // TODO: settings if the field has a config but currently nothing in it ?
        if (!Object.keys(items.items).length) {
            return items;
        }

        const config = getStoredConfigForItemList(name);

        if (config) {
            applyCustomListItemOrdering(items, config);
        }

        if (editModeEnabled()) {
            items.add('itemlist-order-control', Button.component({
                onclick: event => {
                    event.stopPropagation(); // Prevent dropdowns from closing
                    edit = true;
                },
                icon: 'fas fa-random',
                className: 'Button',
                children: 'Edit order',
                title: name,
            }), -11000);
        }

        return items;
    });
}

function extendListByName(objectName, methodName) {
    let object = flarum.core.compat[objectName];

    if (objectName.indexOf('components/') === 0) {
        object = object.prototype;
    }

    extendList(object, methodName, objectName + '.' + methodName);
}

app.initializers.add('migratetoflarum-itemlist-order', () => {
    extend(HeaderSecondary.prototype, 'items', items => {
        if (!editModeEnabled()) {
            return;
        }

        if (app.forum.attribute('allowSignUp')) {
            items.add('signUp',
                Button.component({
                    children: app.translator.trans('core.forum.header.sign_up_link'),
                    className: 'Button Button--link',
                    onclick: () => app.modal.show(new SignUpModal()),
                }), 10
            );
        }

        items.add('logIn',
            Button.component({
                children: app.translator.trans('core.forum.header.log_in_link'),
                className: 'Button Button--link',
                onclick: () => app.modal.show(new LogInModal()),
            }), 0
        );
    });

    // When the page editor is enabled, we need to neutralize the SubtreeRetainer,
    // otherwise the child modal is difficult or impossible to redraw
    override(SubtreeRetainer.prototype, 'retain', original => {
        if (editModeEnabled()) {
            return false;
        }

        return original();
    });

    extendListByName('components/CommentPost', 'headerItems');
    extendListByName('components/DiscussionComposer', 'headerItems');
    extendListByName('components/DiscussionHero', 'items');
    //extendListByName('components/DiscussionListItem', 'infoItems'); // TODO: clicking visits discussion
    extendListByName('components/DiscussionPage', 'sidebarItems');
    extendListByName('components/HeaderPrimary', 'items');
    extendListByName('components/HeaderSecondary', 'items');
    extendListByName('components/IndexPage', 'sidebarItems');
    extendListByName('components/IndexPage', 'viewItems');
    extendListByName('components/IndexPage', 'actionItems');
    extendListByName('components/LogInModal', 'fields');
    extendListByName('components/LogInButtons', 'items');
    extendListByName('components/ReplyComposer', 'headerItems');
    extendListByName('components/SessionDropdown', 'items');
    extendListByName('components/SettingsPage', 'settingsItems');
    extendListByName('components/SignUpModal', 'fields');
    extendListByName('components/TextEditor', 'controlItems');
    extendListByName('components/TextEditor', 'toolbarItems');
    extendListByName('components/UserCard', 'infoItems');
    extendListByName('components/UserPage', 'navItems');
    extendListByName('utils/DiscussionControls', 'controls');
    extendListByName('utils/PostControls', 'controls');
    extendListByName('utils/UserControls', 'controls');
    // TODO: itemlist for locales ? needs PR to core
}, -1000); // Low priority, this extension MUST be the last one to extend any ItemList !
