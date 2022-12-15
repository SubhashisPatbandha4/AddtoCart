export const initialState = {
    carts: []
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATECART":
            {

                const index = state.carts.findIndex(item => item.id === action.payload.id)
                if (index >= 0) {
                    state.carts[index].qnty += 1
                }
                else {
                    return ({
                        ...state, carts: [...state.carts, { ...action.payload, qnty: 1 }]
                    })
                }

            }
        case "REMOVE_CART":
            {
                const data = state.carts.filter(e => e.id !== action.payload)
                return ({
                    ...state, carts: data
                })
            }
        case "REMOVE_ONE":
            {
                const index = state.carts.findIndex(item => item.id === action.payload)
                if (state.carts[index].qnty >= 1) {
                    const deleteItems = state.carts[index].qnty -= 1
                    return ({
                        ...state, carts: [...state.carts]
                    })

                }
                else if(state.carts[index].qnty == 1){
                    const data = state.carts.filter(e => e.id !== action.payload)
                    return ({
                        ...state, carts: data
                    })

                }

            }
        default:
            return (state)
    }

}
export default cartReducer