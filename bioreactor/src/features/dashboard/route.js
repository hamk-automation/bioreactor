// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html
import {
  Dashboard,
} from './';

export default {
  path: 'dashboard',
  name: 'Dashboard',
  childRoutes: [
    { path: 'dashboard', name: 'Dashboard', component: Dashboard, isIndex: true },
  ],
};