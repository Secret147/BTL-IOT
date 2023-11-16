import Home from '../pages/Home';
import IOT from '../pages/ManagerLabel/IOT';

const publicRoutes = [
    { path: '/list', component: IOT },
    { path: '/', component: Home },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
