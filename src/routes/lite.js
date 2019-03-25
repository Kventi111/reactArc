import MainPage from '../container/mainPage/container'
import SecondPage from '../container/secondPage'

export const appRoute = [
  {
    exact: true,
    path: '/',
    title: 'Главная',
    component: MainPage,
    service: null,
  },
  {
    exact: true,
    path: '/second',
    title: 'Не главная',
    component: SecondPage,
    service: null,
  },
  {
    path: '*',
    component: ''
  }
];

export default appRoute;
