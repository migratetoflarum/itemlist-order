import app from 'flarum/app';
import ItemlistSettingsModal from './components/ItemlistSettingsModal';

app.initializers.add('migratetoflarum-itemlist-order', app => {
    app.extensionSettings['migratetoflarum-itemlist-order'] = () => app.modal.show(new ItemlistSettingsModal());
});
