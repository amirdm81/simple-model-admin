
export const login = () => ({
    type: 'LOGIN',
    payload:{
        loggedIn: true,
        info: {
            username: 'admin',
            token: '#@$@$@#$@#$!#@$^^%^&%$'
        }
    }
});

export const logout = () => ({
    type: 'LOGOUT'
});