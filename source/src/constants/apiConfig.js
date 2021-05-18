const baseHeader = {
    'Content-Type': 'application/json',
}

const multipartFormHeader = {
    'Content-Type': 'multipart/form-data',
}

const apiConfig = {
    account: {
        login: {
            path: 'authenticate',
            method: 'POST',
            headers: baseHeader,
            auth: false,
        },
        getProfile: {
            path: 'account',
            method: 'GET',
            headers: baseHeader,
            auth: true,
        },
        updateProfile: {
            path: 'account',
            method: 'POST',
            headers: baseHeader,
            auth: true,
        },
    },
}

export default apiConfig
