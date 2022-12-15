export const add = (cart) => {
    return (
        {
            type: "UPDATECART",
            payload: cart
        }
    )
}
export const remove = (id) => {
    return (
        {
            type: "REMOVE_CART",
            payload: id
        }
    )
}
export const removeOne = (id) => {
    return (
        {
            type: "REMOVE_ONE",
            payload: id
        }
    )
}
