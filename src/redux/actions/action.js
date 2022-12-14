export const updateCart = (cart) => {
    return (
        {
            type: "UPDATECART",
            payload: cart
        }
    )
}
