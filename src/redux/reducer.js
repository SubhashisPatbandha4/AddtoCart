export const initialState = {
    carts: []
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATECART":
            {
                return ({
                    ...state, carts: [...state.carts, action.payload]
                })
            }
        default:
            return (state)
    }

}
export default cartReducer