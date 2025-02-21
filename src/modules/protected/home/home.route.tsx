import {AppProtectedRoute} from '@typings/navigation.type';
import HomeView from './home.view';

const homeRoute: AppProtectedRoute = {
  component: HomeView,
  name: 'Home',
};

export default homeRoute;
