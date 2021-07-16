import { getObjectData, removeKey } from '_utils/localStorageHelper'
import { AppConstants } from '_constants'
import { USER_JWT } from '_constants/storageKeys'

// const apiBodyTemplete = (data) => ({
//     data
// })

const sendRequest = async (options, params = {}) => {
    let fetchRequest, infoRequest, userData, fullPath
    fullPath = options.path.startsWith('http')
        ? options.path
        : `${AppConstants.apiRootUrl}/${options.path}`
    // const errorPath = window.location.protocol + '//' + window.location.host + '/error';

    if ((userData = getObjectData(USER_JWT)) && options.auth) {
        options.headers.Authorization = `Bearer ${userData.token}`
    }

    if (options.headers['Content-Type'] === 'multipart/form-data') {
        let headers = JSON.parse(JSON.stringify(options.headers))
        const formData = new FormData()
        const fileObjects = params.fileObjects
        delete headers['Content-Type']
        Object.keys(params).forEach(key => {
            if (key !== 'fileObjects') formData.append(key, params[key])
        })
        if (fileObjects && Object.keys(fileObjects).length > 0) {
            Object.keys(fileObjects).forEach(key => {
                if (fileObjects[key].length > 0) {
                    fileObjects[key].forEach(file => {
                        formData.append(`${key}[]`, file)
                    })
                } else if (fileObjects[key].constructor !== Array) {
                    formData.append(key, fileObjects[key])
                }
            })
        }

        infoRequest = {
            method: options.method,
            headers,
            body: formData,
        }
    } else {
        if (options.method === 'GET') {
            let hasDefaultQuery = false
            if (options.params && Object.keys(options.params).length > 0) {
                hasDefaultQuery = true
                const defaultQuery = Object.keys(options.params)
                    .map(
                        k =>
                            encodeURIComponent(k) +
                            '=' +
                            encodeURIComponent(options.params[k])
                    )
                    .join('&')
                fullPath = `${fullPath}?${defaultQuery}`
            }
            if (Object.keys(params).length > 0) {
                const queryString = Object.keys(params)
                    .map(
                        k =>
                            encodeURIComponent(k) +
                            '=' +
                            encodeURIComponent(params[k])
                    )
                    .join('&')
                fullPath = hasDefaultQuery
                    ? `${fullPath}&${queryString}`
                    : `${fullPath}?${queryString}`
            }

            infoRequest = {
                method: options.method,
                headers: options.headers,
            }
        } else {
            params.langKey = AppConstants.langKey
            infoRequest = {
                method: options.method,
                headers: options.headers,
                body: JSON.stringify(params),
            }
        }
    }

    fetchRequest = await fetch(fullPath, infoRequest).catch(error => {
        console.log(error)
        return Promise.reject(error)
        // Redirect to error page
        // window.location.replace(errorPath);
    })

    if (fetchRequest.status === 401 && userData) {
        removeKey(USER_JWT)
        window.location.replace('/login')
    } else if (fetchRequest.status === 403) {
        // window.location.replace('/forbidden');
    } else if (fetchRequest.status === 200 || fetchRequest.status === 201) {
        const responseData = await fetchRequest.json()
        return { success: true, responseData }
    } else if (
        fetchRequest.status === 401 ||
        fetchRequest.status === 400 ||
        fetchRequest.status === 404
    ) {
        const responseData = await fetchRequest.json()
        return { success: false, responseData }
    } else {
        return Promise.reject(new Error('Internal Server Error'))
    }
}

export { sendRequest }
