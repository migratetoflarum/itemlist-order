// Same modifications and sorting as in the original ItemList::toArray
export default function (list) {
    const items = [];

    for (const i in list.items) {
        if (list.items.hasOwnProperty(i) /* removed instanceof check because the class is not public */) {
            list.items[i].content = Object(list.items[i].content);

            list.items[i].content.itemName = i;
            items.push(list.items[i]);
            list.items[i].key = items.length;
            list.items[i].itemName = i; // Added for ease of access
        }
    }

    return items.sort((a, b) => {
        if (a.priority === b.priority) {
            return a.key - b.key;
        } else if (a.priority > b.priority) {
            return -1;
        }
        return 1;
    });
}
