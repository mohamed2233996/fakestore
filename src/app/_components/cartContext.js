import { createContext, useReducer } from "react";

export const CartContext = createContext({
    itemsC: [],
});


const cartReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case "ADD":
            return {
                ...state,
                itemsC: payload.itemsC,
            };

        case "REMOVE":
            return {
                ...state,
                itemsC: payload.itemsC,
            };

        default:
            throw new Error("No case for that type");
    }
};

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, { itemsC: [] });

    const addToCart = (product) => {
        const updatedCart = [...state.itemsC, product];

        dispatch({
            type: "ADD",
            payload: {
                itemsC: updatedCart,
            },
        });
    };

    const removeFromCart = (id) => {
        const updatedCart = state.itemsC.filter(
            (currentProduct) => currentProduct.id !== id
        );

        dispatch({
            type: "REMOVE",
            payload: {
                itemsC: updatedCart,
            },
        });
    };

    return <CartContext.Provider value={
        {
            addToCart,
            removeFromCart,
            itemsC: state.itemsC,
        }
    }>{children}</CartContext.Provider>;
};