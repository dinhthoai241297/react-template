import React from 'react'
import Loading from '_components/common/Loading'
import AppRoutes from '_routes'
import LoadingContainer from '_containers/app/LoadingContainer'

const App = () => {
    return (
        <>
            <AppRoutes />
            <LoadingContainer />
        </>
    )
}

const WrapApp = () => (
    <React.Suspense fallback={<Loading show />}>
        <App />
    </React.Suspense>
)

export default WrapApp
