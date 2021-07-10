import React, { useEffect } from 'react'
import {
    Redirect,
    Route,
    Switch,
    useHistory,
    useLocation,
} from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { findRouteConfigFromPath } from './routes'

const TransitionRoute = ({ getRedirect, routes }) => {
    const history = useHistory()
    const location = useLocation()
    const action = history.action
    const routesArr = Object.values(routes)

    useEffect(() => {
        const routeConfig = findRouteConfigFromPath(location.pathname)
        if (routeConfig) {
            console.log({ routeConfig })
            // notify to device
        }
    }, [location])

    return (
        <TransitionGroup>
            <CSSTransition
                key={location.pathname}
                timeout={600}
                classNames="page-slider"
            >
                <div className={action === 'PUSH' ? 'left' : 'right'}>
                    <Switch location={location}>
                        {routesArr.map(route => (
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

                                    return (
                                        <div className="page">
                                            <PageComponent {...props} />
                                        </div>
                                    )
                                }}
                            />
                        ))}
                    </Switch>
                </div>
            </CSSTransition>
        </TransitionGroup>
    )
}

export default TransitionRoute
