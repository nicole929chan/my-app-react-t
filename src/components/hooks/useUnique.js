import { useState } from 'react';

export const useUnique = (initial) => {
    const [items, setItems] = useState(initial);

    // task: add()
    const add = (newItem) => {
        const uniqueItems = [...new Set([...items, newItem])];
        setItems(uniqueItems);
    };

    return [items, add]; // current items and add function for using
};
