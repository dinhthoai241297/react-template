import qs from 'query-string'

const Utils = {
    camelCaseToTitleCase(camelCase) {
        if (camelCase === null || camelCase === '') {
            return camelCase
        }

        camelCase = camelCase.trim()
        var newText = ''
        for (var i = 0; i < camelCase.length; i++) {
            if (
                /[A-Z]/.test(camelCase[i]) &&
                i !== 0 &&
                /[a-z]/.test(camelCase[i - 1])
            ) {
                newText += ' '
            }
            if (i === 0 && /[a-z]/.test(camelCase[i])) {
                newText += camelCase[i].toLowerCase()
            } else {
                newText += camelCase[i].toLowerCase()
            }
        }

        return newText
    },
    isEmptyObject(obj) {
        return (
            obj && Object.keys(obj).length === 0 && obj.constructor === Object
        )
    },
    getFileNameFromPath(path) {
        if (path) return path.split('\\').pop().split('/').pop()
        return ''
    },
    makePath(path, data) {
        let pathResult = path
        const params = {}
        const dataKeys = Object.keys(data || {})

        for (let key of dataKeys) {
            const keyCompare = ':' + key
            const value = data[key]

            if (pathResult.indexOf(keyCompare) !== -1) {
                pathResult = pathResult.replace(keyCompare, value)
            } else {
                params[key] = value
            }
        }

        if (Object.values(params).length) {
            pathResult += '?' + qs.stringify(params)
        }

        return pathResult
    },
}

export default Utils
