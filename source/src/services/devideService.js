/*
 * wrap function from native device
 */

// source prod = window, dev = mock file
const source = window
const noOps = () => {}
const wrapCallFunction = funcName =>
    typeof source[funcName] === 'function' ? source[funcName] : noOps

const showDeviceLoading = wrapCallFunction('showDeviceLoading')
const hideDeviceLoading = wrapCallFunction('hideDeviceLoading')

const exportFunction = (funcName, func) => {
    window[funcName] = func
}

const deviceService = {
    showDeviceLoading,
    hideDeviceLoading,
    exportFunction,
}

export default deviceService
