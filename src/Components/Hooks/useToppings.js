import { useState } from 'react';

const getTopping = toppings => toppings.map(item => ({
    name: item,
    checked: false,
}));

export function useToppings(openItem) {

    const readyTipping = openItem.toppings ? getTopping(openItem.toppings) : [];

    const [toppings, setToppings] = useState(readyTipping);

    const checkToppings = index => {
        setToppings(toppings.map((item, i) => {
            if (i === index) {
                item.checked = !item.checked;
            }
            return item;
        }));
    }

    return { toppings, checkToppings };
}