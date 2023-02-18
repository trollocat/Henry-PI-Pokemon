// constants
export const ORDER = "ORDER";
export const FILTER = "FILTER";

// actions
export const filterCards = (parameters) => {
    return { type: FILTER, payload: parameters }
}

export const orderCards = (order) => {
    return { type: ORDER, payload: order}
}