const initialState = {
    loggedIn : true,
    info: {
        username: 'admin',
        // simple token for jwt auth token system
        token: '@$$%^^%&*(&)*()*(_&^##',
    },
}


export const authReducer = (state= initialState,action) => {
    switch(action.type) {
        case 'LOGIN':
            return {...state, ...action.payload};
        case 'LOGOUT':
            return {...state, loggedIn: false, info: null};
        default:
            return state;
    };
};