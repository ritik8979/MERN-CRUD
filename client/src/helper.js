// save login response = (user name and token) to session storage

export const authenticate = (response, next) => {
    if(window !== 'undefined'){
        //console.log('authenticate', response);
        sessionStorage.setItem('token', JSON.stringify(response.data.token));
        sessionStorage.setItem('user', JSON.stringify(response.data.name));
    }

    next();
}


// access token from session storage
export const getToken = (response, next) => {
    if(window !== 'undefined'){
        if(sessionStorage.getItem('token')){
            return JSON.parse(sessionStorage.getItem('token'));
        }
        else{
            return false
        }
    }
}


// access user's name from session storage

export const getUser = (response, next) => {
    if(window !== 'undefined'){
        if(sessionStorage.getItem('user')){
            return JSON.parse(sessionStorage.getItem('user'));
        }
        else{
            return false;
        }
    }
}



//remove token from session storage

export const logout = (next) => {
    if(window !== 'undefined'){
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('user');
    }

    next();
}