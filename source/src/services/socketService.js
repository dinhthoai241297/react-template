import { RESPONSE_CODE, SOCKET_STATE, SOCKET_TIME_OUT } from '_constants'
let socket

const makeSocketRequestData = ({ cmd, auth }, data) => {
    // const token = store.getState().account.token

    const payload = {
        cmd,
        ...data,
    }

    // if (auth && token) {
    //     payload.token = token
    // }

    return JSON.stringify(payload)
}

const onConnected = () =>
    new Promise(resolve => {
        const handleOpen = () => {
            console.log('Socket Connected -----------')
            socket.removeEventListener('open', handleOpen)
            return resolve(socket)
        }
        socket.addEventListener('open', handleOpen)
    })

const connectSocket = socketHost => {
    console.log('Socket Connecting .........')
    socket = new WebSocket(socketHost)

    socket.onclose = () => {
        console.log('Socket closing ......')
        setTimeout(() => {
            connectSocket(socketHost)
        }, 1000)
    }

    return onConnected()
}

export const getSocket = () => {
    console.log('------- Socket ReadyState ', socket?.readyState)
    if (socket?.readyState === SOCKET_STATE.OPEN) {
        return socket
    }

    if (socket?.readyState === SOCKET_STATE.CONNECTING) {
        return onConnected()
    }

    return connectSocket(process.env.REACT_APP_SOCKET)
}

export const initSocket = () => {
    window.addEventListener('online', () => {
        console.log('Network Online ----------')
        getSocket()
    })

    document.addEventListener('visibilitychange', () => {
        if ('visible' === document.visibilityState) {
            console.log('Visible ----------')
            getSocket()
        }
    })

    getSocket()
}

export const receiveSocketRequest = cmd => {
    return new Promise(resolve => {
        const requestTimeout = setTimeout(() => {
            socket.removeEventListener('message', catchMessage)
            return resolve({
                responseCode: RESPONSE_CODE.TIME_OUT,
            })
        }, SOCKET_TIME_OUT)

        const catchMessage = evt => {
            const data = JSON.parse(evt.data)

            if (data?.cmd === cmd) {
                console.log(`RECEIVE: <- ${cmd}: `, data)

                requestTimeout && clearTimeout(requestTimeout)

                socket.removeEventListener('message', catchMessage)
                return resolve(data)
            }
        }

        socket.addEventListener('message', catchMessage)
    })
}

export const sendSocketRequest = async (config, data) => {
    const socketInstance = await getSocket()
    const stringData = makeSocketRequestData(config, data)
    socketInstance.send(stringData)

    console.log(`SEND: -> ${config.cmd}: ${stringData}`)

    return receiveSocketRequest(config.cmd)
}

export default socket
