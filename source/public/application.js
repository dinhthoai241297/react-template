const RESPONSE_CODE_SUCCESS = '200'
const RESPONSE_FUNCTION_NOT_INITIALIZED = '102'
const RESPONSE_CODE_UNDEFINED = '000'
const RESPONSE_INVALID_CMD = '103'

const CMD_NAVIGATE = 'CMD_NAVIGATE'

const PATHS = ['/']

/*
 * function export to native device
 */
const actionsMap = {
    // {
    //     "path": "xxx"
    // }
    [CMD_NAVIGATE]: {
        functionName: 'navigateURL',
        mapData: ({ path }) => path,
    },
}

function callback(cmd, subcmd, data) {
    const action = actionsMap[cmd]
    if (action) {
        const { functionName, mapData, callback } = action

        try {
            const func = window[functionName]

            if (!func) {
                return errorHandle(RESPONSE_FUNCTION_NOT_INITIALIZED)
            }

            const params = [mapData(JSON.parse(data))]
            callback &&
                params.push((response, responseStatus) =>
                    NodeJS.response(cmd, subcmd, response, responseStatus)
                )

            func(...params)
        } catch (error) {
            console.log({ error })
            errorHandle(RESPONSE_CODE_UNDEFINED)
        }
    } else {
        errorHandle(RESPONSE_INVALID_CMD)
    }
}

/*
 * function from native device
 */
function errorHandle(code) {
    NodeJS.handleError(code)
}

function showDeviceLoading(message) {
    NodeJS.showLoading(message)
}

function hideDeviceLoading() {
    NodeJS.hideLoading()
}
