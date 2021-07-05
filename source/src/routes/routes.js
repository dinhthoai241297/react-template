import HomePageContainer from '_containers/app/HomePageContainer'
import PageNotFound from '_components/common/PageNotFound'
import PageNotAllowed from '_components/common/PageNotAllowed'
import LoginContainer from '_containers/account/LoginContainer'
import Guide from '_containers/guide/Guide'

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

    // put this at last
    notFound: {
        component: PageNotFound,
        auth: null,
        title: 'Page not found',
    },
}

export default routes
