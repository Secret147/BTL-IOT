import Home from '../pages/Home';
import IndexIot from '../pages/IndexIot/IndexIot';
import IOT from '../pages/Detail/IOT';

const publicRoutes = [
    { path: '/list', component: IOT },
    { path: '/', component: Home },
    { path: '/index', component: IndexIot },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
