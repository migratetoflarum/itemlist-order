import {extend, override} from 'flarum/extend';
import app from 'flarum/app';
import ItemList from 'flarum/utils/ItemList';
import Button from 'flarum/components/Button';
import applyCustomListItemOrdering from './utils/applyCustomListItemOrdering';
import EditorModal from './components/EditorModal';

/* global flarum */

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

        if (app.forum.data.attributes.itemorderConfig && app.forum.data.attributes.itemorderConfig.hasOwnProperty(name)) {
            applyCustomListItemOrdering(items, app.forum.data.attributes.itemorderConfig[name]);
        }

        items.add('itemlist-order-control', Button.component({
            onclick(event) {
                event.stopPropagation(); // Prevent dropdowns from closing
                edit = true;
            },
            icon: 'fas fa-random',
            className: 'Button',
            children: 'Edit order',
            title: name,
        }), -11000);

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
    extendListByName('components/CommentPost', 'headerItems');
    extendListByName('components/DiscussionComposer', 'headerItems');
    extendListByName('components/DiscussionHero', 'items'); // TODO: post redraw strategy
    extendListByName('components/DiscussionListItem', 'infoItems');
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
    //extendListByName('utils/DiscussionControls', 'controls'); // TODO: there's a CSS rule hiding the first element of the dropdown for mobile layout
    extendListByName('utils/PostControls', 'controls'); // TODO: post redraw strategy blocks editor from opening
    extendListByName('utils/UserControls', 'controls');
    // TODO: itemlist for locales ? needs PR to core
});
