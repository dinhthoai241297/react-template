import React from 'react'
import Loading from '_components/common/Loading'
import AppRoutes from '_routes'

const App = () => {
    return <AppRoutes />
}

export default () => (
    <React.Suspense fallback={<Loading show />}>
        <App />
    </React.Suspense>
)
