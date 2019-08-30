import store from './store';


export const checkAuth = (history) => {
    let auth = store.getState().auth.loggedIn;
    
    if (!auth) {
        history.push("/login");
    } else {
        console.log('your logged in')
    }
}

export const checkIfModelExists = (match, history) => {
    const path = match.url;
        
    let data = store.getState().models;

    data = data.filter(model => {
        return model.path === path
    });

    if (data.length === 0) {
        history.push('/');
    }
    
    data = data[0]

    return data;
}

export const setLocalState = () => {
    try {
        const sreialized = JSON.stringify(store.getState());
        localStorage.setItem('state',sreialized);
    } catch (e) {
        // ignor handle errors
    }
};

export const getLocalState = () => {
    try {
        if (localStorage.getItem('state')) {
            const sreailized = JSON.parse(localStorage.getItem('state'));
            return sreailized
        } else {
            return undefined
        }
    } catch (e) {
        return undefined
    }
}