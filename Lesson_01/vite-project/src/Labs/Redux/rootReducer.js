const initialState = {
    users: [{id: 1, firstName: 'Avi', lastName:'Cohen', age: 23}]
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            debugger;
            return { ...state, users: state.users = [...state.users, action.payload] };

        case 'UPDATE':{
            const users = [...state.users]
            const index = users.findIndex((us) => { return us.id == action.payload.id });
            if (index !== -1) {
                users[index] = action.payload
            }

            return { ...state, users };}

        case 'DELITE':{
            const users = state.users.filter((user) => user.id !== action.payload)

            return { ...state, users: state.users = [...users] };}


        default:
            return state;
    }
}

const updateUser = (user) => {
    return initialState.users;
}

export default userReducer