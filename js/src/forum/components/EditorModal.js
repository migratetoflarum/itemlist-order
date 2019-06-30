import Component from 'flarum/Component';
import Button from 'flarum/components/Button';
import Editor from './Editor';

/* global m */

// We can't use Flarum modals because in order to render the itemlist children,
// the modal has to be a child of the itemlist itself or we would break Mithril rendering tree
export default class EditorModal extends Component {
    view() {
        return m('.Itemlist-Order-Modal', [
            m('form.ModalManager.modal.fade', {
                onclick: event => {
                    // When we create the modal as a child of a dropdown, we need to stop propagation
                    // Otherwise any click would close the dropdown and hide the modal
                    event.stopPropagation();

                    // Close modal when backdrop is clicked
                    if (event.target.classList.contains('ModalManager')) {
                        this.close();
                    }
                },
                onsubmit: event => {
                    // Having a form inside of our modal prevents submitting other modals when we are a child of them
                    event.preventDefault();
                },
            }, m('.Modal.modal-dialog', m('.Modal-content', [
                m('.Modal-close', Button.component({
                    icon: 'fas fa-times',
                    onclick: () => {
                        this.close();
                    },
                    className: 'Button Button--icon Button--link',
                })),
                m('.Modal-header', m('h3.App-titleControl App-titleControl--text', 'Update order of ' + this.props.name)),
                m('.Modal-body', Editor.component({
                    items: this.props.items,
                    name: this.props.name,
                })),
            ]))),
            m('.modal-backdrop.fade.in'),
        ]);
    }

    config(isInitialized) {
        if (isInitialized) {
            return;
        }

        // Call bootstrap's modal method to correctly configure scrolling of the modal
        // But in fact the modal is already partially hard-coded visible
        // And we use our own backdrop to insert it inside our custom manager
        this.$('.modal').modal({backdrop: false}).modal('show');
    }

    close() {
        // Properly close modal, removes body class
        this.$('.modal').modal('hide');

        this.props.finishedEdit();
    }
}
