import React from 'react'
import { useHistory } from 'react-router-dom'
import routes from '_routes/routes'

const PageB = () => {
    const history = useHistory()

    return (
        <div style={{ background: '#5dffa0', height: '100%' }}>
            <h1 className="m-0">Page B</h1>
            <button onClick={() => history.push(routes.pageA.path)}>
                go A
            </button>
            <br />
            <button onClick={history.goBack}>Back</button>
        </div>
    )
}

export default PageB
