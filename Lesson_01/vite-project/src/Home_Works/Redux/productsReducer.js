const initialState = {
    products: [],
    totalPrice: 0
}

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':{
            state.totalPrice = Number(state.totalPrice) + Number(action.payload.price);
            debugger;
            return { ...state, products: state.products = [...state.products, action.payload] }
}
            case 'REMOVE_PRODUCT':{
                state.totalPrice = Number(state.totalPrice) - Number(action.payload.price);
                const products = state.products.filter((product) => product.id !== action.payload.id)
                return { ...state, products: state.products = [...products] };}
    
        default:
            return state;
    }
}

export default productsReducer