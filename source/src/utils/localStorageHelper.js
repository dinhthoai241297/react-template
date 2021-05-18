export const setObjectData = (key, data) => {
    if (window.localStorage) {
        window.localStorage.setItem(key, JSON.stringify(data))
    }
}

export const getObjectData = key => {
    let result = false,
        jsonData
    if (window.localStorage && (jsonData = window.localStorage.getItem(key))) {
        try {
            result = JSON.parse(jsonData)
        } catch {}
    }
    return result
}

export const removeKey = key =>
    window.localStorage && window.localStorage.removeItem(key)

export const setStringData = (key, value) => {
    if (window.localStorage) {
        window.localStorage.setItem(key, value)
    }
}

export const getStringData = key => {
    if (window.localStorage) {
        return window.localStorage.getItem(key)
    }
    return false
}
