import HomePageContainer from '_containers/app/HomePageContainer'
import PageNotFound from '_components/common/PageNotFound'
import PageNotAllowed from '_components/common/PageNotAllowed'
import LoginContainer from '_containers/account/LoginContainer'
import Guide from '_containers/guide/Guide'
import PageA from '_containers/guide/PageA'
import PageB from '_containers/guide/PageB'

const routes = {
    root: {
        path: '/',
        component: HomePageContainer,
        auth: null,
        title: 'Home page',
    },
    home: {
        path: '/home',
        component: HomePageContainer,
        auth: null,
        title: 'Home page',
    },
    pageNotAllowed: {
        path: '/not-allowed',
        component: PageNotAllowed,
        auth: null,
        title: 'Page not allowed',
    },
    login: {
        path: '/login',
        component: LoginContainer,
        auth: false,
        title: 'Login page',
    },
    guide: {
        path: '/guide',
        component: Guide,
        auth: null,
        title: 'Guide page',
    },
    pageA: {
        path: '/page-a',
        component: PageA,
        auth: null,
        title: 'Page A',
    },
    pageB: {
        path: '/page-b/:id',
        component: PageB,
        auth: null,
        title: 'Page B',
    },

    // put this at last
    notFound: {
        component: PageNotFound,
        auth: null,
        title: 'Page not found',
    },
}

const routeArray = Object.values(routes)

// path from matchRoute
export const findRouteConfigFromPath = pathname =>
    routeArray.find(
        ({ path }) => pathname === path || pathname.startsWith(path + '/')
    )

export default routes
