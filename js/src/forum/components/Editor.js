import app from 'flarum/app';
import icon from 'flarum/helpers/icon';
import Component from 'flarum/Component';
import Button from 'flarum/components/Button';
import Alert from 'flarum/components/Alert';
import itemListToArrayWithoutExtractingContent from '../utils/itemListToArrayWithoutExtractingContent';
import getStoredConfigForItemList from '../utils/getStoredConfigForItemList';

/* global m */

export default class Editor extends Component {
    init() {
        super.init();

        const config = getStoredConfigForItemList(this.props.name);

        this.itemsOrder = config || {
            start: [],
            end: [],
            hidden: [],
        };

        this.dirty = false;
        this.loading = false;
        this.saved = false;
    }

    view() {
        const items = itemListToArrayWithoutExtractingContent(this.props.items);

        const renderItem = item => {
            const {itemName} = item;
            const indexInStart = this.itemsOrder.start.indexOf(itemName);
            const indexInEnd = this.itemsOrder.end.indexOf(itemName);
            const indexInHidden = this.itemsOrder.hidden.indexOf(itemName);

            const removeFromStart = () => {
                if (indexInStart !== -1) {
                    this.itemsOrder.start.splice(indexInStart, 1);
                    this.dirty = true;
                }
            };

            const removeFromEnd = () => {
                if (indexInEnd !== -1) {
                    this.itemsOrder.end.splice(indexInEnd, 1);
                    this.dirty = true;
                }
            };

            const removeFromHidden = () => {
                if (indexInHidden !== -1) {
                    this.itemsOrder.hidden.splice(indexInHidden, 1);
                    this.dirty = true;
                }
            };

            return m('.Itemlist-Order-Item', {
                key: 'item-' + item.itemName,
            }, [
                m('.Itemlist-Order-Original', {
                    title: 'Internal item name: ' + item.itemName + ' - Original priority: ' + item.priority,
                }, item.content),
                m('.Itemlist-Order-Actions', [
                    m('button.Button.Button--link', {
                        title: 'Move up',
                        onclick: () => {
                            removeFromHidden();
                            if (indexInStart !== -1) {
                                if (indexInStart > 0) {
                                    removeFromStart();
                                    this.itemsOrder.start.splice(indexInStart - 1, 0, itemName);
                                    this.dirty = true;
                                }
                                // else: already at the top, don't move the item
                            } else if (indexInEnd !== -1) {
                                removeFromEnd();
                                if (indexInEnd === 0) {
                                    this.itemsOrder.start.push(itemName);
                                } else {
                                    this.itemsOrder.end.splice(indexInEnd - 1, 0, itemName);
                                }
                                this.dirty = true;
                            } else {
                                this.itemsOrder.start.push(itemName);
                                this.dirty = true;
                            }
                        },
                        disabled: this.loading,
                    }, icon('fas fa-angle-up')),
                    m('button.Button.Button--link', {
                        title: 'Move down',
                        onclick: () => {
                            removeFromHidden();
                            if (indexInEnd !== -1) {
                                if (indexInEnd < this.itemsOrder.end.length - 1) {
                                    removeFromEnd();
                                    this.itemsOrder.end.splice(indexInEnd + 1, 0, itemName);
                                    this.dirty = true;
                                }
                                // else: already at the bottom, don't move the item
                            } else if (indexInStart !== -1) {
                                if (indexInStart === this.itemsOrder.start.length - 1) {
                                    removeFromStart(); // Can't put this above condition or it would change the array length
                                    this.itemsOrder.end.unshift(itemName);
                                } else {
                                    removeFromStart();
                                    this.itemsOrder.start.splice(indexInStart + 1, 0, itemName);
                                }
                                this.dirty = true;
                            } else {
                                this.itemsOrder.end.unshift(itemName);
                                this.dirty = true;
                            }
                        },
                        disabled: this.loading,
                    }, icon('fas fa-angle-down')),
                    m('button.Button.Button--link', {
                        title: 'Hide',
                        onclick: () => {
                            if (indexInHidden === -1) {
                                removeFromStart();
                                removeFromEnd();
                                this.itemsOrder.hidden.push(itemName);
                                this.dirty = true;
                            } else {
                                removeFromHidden();
                            }
                        },
                        disabled: this.loading,
                    }, icon('fas fa-eye' + (indexInHidden === -1 ? '-slash' : ''))),
                    m('button.Button.Button--link', {
                        title: 'Restore default position',
                        onclick: () => {
                            removeFromStart();
                            removeFromEnd();
                            removeFromHidden();
                        },
                        disabled: this.loading,
                    }, icon('fas fa-undo')),
                ]),
            ]);
        };

        const sectionsContent = (key, nothingMessage) => {
            const entries = this.itemsOrder[key].map(itemName => {
                const item = items.find(i => i.itemName === itemName);

                // TODO: handle missing items
                return renderItem(item);
            });

            if (entries.length) {
                return entries;
            }

            return m('p', {
                key: 'empty-' + key,
            }, nothingMessage);
        };

        const defaultContent = items.filter(item => {
            const {itemName} = item;
            const indexInStart = this.itemsOrder.start.indexOf(itemName);
            const indexInEnd = this.itemsOrder.end.indexOf(itemName);
            const indexInHidden = this.itemsOrder.hidden.indexOf(itemName);

            return indexInStart === -1 && indexInEnd === -1 && indexInHidden === -1;
        }).map(item => renderItem(item));

        if (!defaultContent.length) {
            defaultContent.push(m('p', {
                key: 'empty-default',
            }, 'Items that appear in other situations or added by new extensions will be added here'));
        }

        return m('.ItemList-Order-Editor', [
            this.saved ? Alert.component({
                type: 'info',
                dismissible: true,
                ondismiss: () => {
                    this.saved = false;
                },
                children: 'Saved !',
            }) : null,
            Button.component({
                onclick: () => {
                    this.loading = true;

                    app.request({
                        method: 'POST',
                        url: app.forum.attribute('apiUrl') + '/itemlist-order/' + this.props.name,
                        data: this.itemsOrder,
                    }).then(result => {
                        this.loading = false;
                        this.saved = true;
                        this.dirty = false;
                        app.forum.data.attributes.itemorderConfig = result;
                        m.redraw();
                    });
                },
                className: 'Button Button--primary',
                children: 'Save',
                disabled: !this.dirty,
                loading: this.loading,
            }),
            ' ',
            Button.component({
                onclick: () => {
                    this.itemsOrder = {
                        start: [],
                        end: [],
                        hidden: [],
                    };
                    this.dirty = true;
                },
                icon: 'fas fa-undo',
                className: 'Button',
                children: 'Restore default order',
                disabled: this.loading,
            }),
            m('div', [
                m('h4', {
                    key: 'head-start',
                }, 'Before'),
                sectionsContent('start', 'Move elements up to place them here'),
                m('h4', {
                    key: 'head-default',
                }, 'Default'),
                defaultContent,
                m('h4', {
                    key: 'head-end',
                }, 'After'),
                sectionsContent('end', 'Move elements down to place them here'),
                m('h4', {
                    key: 'head-hidden',
                }, 'Hidden'),
                sectionsContent('hidden', 'You have not hidden any element'),
            ]),
        ]);
    }
}
