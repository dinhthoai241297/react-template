import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

const Loading = ({ show }) => {
    const [node] = useState(document.createElement('div'))

    useEffect(() => {
        show && document.body.appendChild(node)

        return () => show && document.body.removeChild(node)
    }, [show])

    return ReactDOM.createPortal(
        <div className="loading-container">
            <div className="loader" />
        </div>,
        node
    )
}

export default Loading
