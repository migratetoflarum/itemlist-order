import app from 'flarum/app';
import Modal from 'flarum/components/Modal';
import Button from 'flarum/components/Button';

/* global m */

const settingsPrefix = 'migratetoflarum-itemlist-order.';
const translationPrefix = 'migratetoflarum-itemlist-order.admin.settings.';

const MODE_KEY = 'migratetoflarum-itemlist-order-mode';

export default class ItemlistSettingsModal extends Modal {
    title() {
        return app.translator.trans(translationPrefix + 'title');
    }

    content() {
        const mode = localStorage.getItem(MODE_KEY);

        return m('.Modal-body', [
            m('p', app.translator.trans(translationPrefix + 'explanation')),
            Button.component({
                onclick() {
                    if (mode === 'edit') {
                        localStorage.removeItem(MODE_KEY);
                    } else {
                        localStorage.setItem(MODE_KEY, 'edit');
                    }
                },
                className: 'Button Button--primary',
                children: app.translator.trans(translationPrefix + (mode === 'edit' ? 'disable' : 'enable') + '-edit-mode'),
            }),
        ]);
    }
}
