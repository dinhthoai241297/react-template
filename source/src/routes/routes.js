import HomePage from '_containers/HomePage'
import PageNotFound from '_components/common/PageNotFound'
import PageNotAllowed from '_components/common/PageNotAllowed'
import LoginContainer from '_containers/account/LoginContainer'

export default {
    root: {
        path: '/',
        component: HomePage,
        auth: null,
        title: 'Home page',
    },
    home: {
        path: '/home',
        component: HomePage,
        auth: null,
        title: 'Home page',
    },
    notFound: {
        path: '/not-found',
        component: PageNotFound,
        auth: null,
        title: 'Page not found',
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
}
