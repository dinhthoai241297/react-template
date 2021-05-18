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
}

export default Utils
