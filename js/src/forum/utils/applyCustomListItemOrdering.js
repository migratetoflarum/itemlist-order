export default function (items, config) {
    let startIndex = 10000; // TODO: don't hard-code
    config.start.forEach(name => {
        if (items.has(name)) {
            items.replace(name, null, startIndex--);
        }
    });

    let endIndex = -10000; // TODO: don't hard-code
    config.end.forEach(name => {
        if (items.has(name)) {
            items.replace(name, null, endIndex--);
        }
    });

    config.hidden.forEach(name => {
        if (items.has(name)) {
            items.remove(name);
        }
    });
}
