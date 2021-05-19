import HomePageContainer from '_containers/app/HomePageContainer'
import PageNotFound from '_components/common/PageNotFound'
import PageNotAllowed from '_components/common/PageNotAllowed'
import LoginContainer from '_containers/account/LoginContainer'

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

export default routes
