import Home from './home/Home';
import Login from './login/Login';

/**
 * Global Routes
 */
export default [
  {
    component: Home,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home,
        label: 'Home',
      },
      {
        path: '/login',
        component: Login,
        label: 'Login',
      },
    ],
  },
];
