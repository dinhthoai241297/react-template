import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import routes from '_routes/routes'
import TransitionRoute from '_routes/TransitionRoute'
import accountSelectors from '_selectors/account'

const AppRoutes = () => {
    const [passRequirements, setPassRequirements] = useState(false)

    const isAuthenticated = useSelector(accountSelectors.isAuthenticated)

    const getRedirect = authRequire => {
        if (isAuthenticated && authRequire === false) {
            return routes.pageNotAllowed.path
        }

        if (!isAuthenticated && authRequire) {
            return routes.login.path
        }

        return false
    }

    useEffect(() => {
        // handle requirement (fetch user profile, ...)
        setPassRequirements(true)
    }, [])

    if (!passRequirements) {
        return null
    }

    return (
        <BrowserRouter>
            <TransitionRoute getRedirect={getRedirect} routes={routes} />
        </BrowserRouter>
    )
}

export default AppRoutes
