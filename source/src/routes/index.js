import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Switch, BrowserRouter, Redirect, Route } from 'react-router-dom'
import { getCredential } from '_selectors/accountSelectors'
import routes from '_routes/routes'

const AppRoutes = () => {
    const [requirements, setRequirements] = useState(false)

    const credential = useSelector(getCredential)

    const getRedirect = authRequire => {
        if (credential.isAuthenticated && authRequire === false) {
            return routes.pageNotAllowed.path
        }

        if (!credential.isAuthenticated && authRequire) {
            return routes.login.path
        }

        return false
    }

    useEffect(() => {
        // handle requirement (fetch user credentials, ...)
        setRequirements(true)
    }, [])

    if (!requirements) {
        return null
    }

    return (
        <BrowserRouter>
            <Switch>
                {Object.values(routes).map(route => (
                    <Route
                        key={route.path}
                        path={route.path}
                        exact={route.exact ?? true}
                        render={props => {
                            const redirect = getRedirect(route.auth)

                            if (redirect) {
                                return <Redirect to={redirect} />
                            }

                            const PageComponent = route.component

                            return <PageComponent {...props} />
                        }}
                    />
                ))}
            </Switch>
        </BrowserRouter>
    )
}

export default AppRoutes
