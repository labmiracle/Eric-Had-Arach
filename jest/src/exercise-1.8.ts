// setPrice(item: Object, price: Number) => item: Object
export const setPrice = (item: object, price: number): object => {
    return { 
        ...item, 
        price: price 
    };
};

// addToCart(cart: Array, item: Object) => cart: Array
export const addToCart = (cart: object[], item: object): object[] => {
    return [
        ...cart, 
        item
    ];
};