import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Switch, BrowserRouter, Redirect, Route } from 'react-router-dom'
import accountSelectors from '_selectors/account'
import routes from '_routes/routes'

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
            <Switch>
                {Object.values(routes).map(route => (
                    <Route
                        key={route.path || 'not-found'}
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
