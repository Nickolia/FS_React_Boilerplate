import App from '../components/App';
import pageApi from '../utilits/pageApi';
import indexRoute from './root/indexRoute';
import optionsRoute from './root/optionsRoute';
import authorRoute from './root/authorRoute';
import LoginPageComponent from '../pages/loginPage/LoginPageComponent';
import NotFoundPageComponent from '../pages/notFoundPage/NotFoundPageComponent';
import RegistrationPageComponent from '../pages/registrationPage/RegistrationPageComponent';

const rootRoute = {
    childRoutes: [{
        path: '/',
        component: App,
        indexRoute: indexRoute,
        childRoutes: [
            optionsRoute,
            authorRoute,
        ],
    }, {
        path: '/login',
        onEnter: pageApi.getPage,
        component: LoginPageComponent,
    }, {
        path: '/registration',
        onEnter: pageApi.getPage,
        component: RegistrationPageComponent,
    }, {
        path: '*',
        component: NotFoundPageComponent,
    }],
};

export default rootRoute;
