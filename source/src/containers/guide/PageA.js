import React from 'react'
import { useHistory } from 'react-router-dom'
import routes from '_routes/routes'

const PageA = () => {
    const history = useHistory()

    return (
        <div style={{ background: '#5dc1ff', height: '150vh' }}>
            <h1 className="m-0">Page A</h1>
            <button onClick={() => history.push(routes.pageB.path)}>
                go B
            </button>
            <br />
            <button onClick={history.goBack}>Back</button>
        </div>
    )
}

export default PageA
