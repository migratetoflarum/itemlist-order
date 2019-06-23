import app from 'flarum/app';

export default function (name) {
    if (app.forum.data.attributes.itemorderConfig && app.forum.data.attributes.itemorderConfig.hasOwnProperty(name)) {
        const existingConfig = app.forum.data.attributes.itemorderConfig[name];

        return {
            start: existingConfig.start || [],
            end: existingConfig.end || [],
            hidden: existingConfig.hidden || [],
        };
    }

    return null;
}
