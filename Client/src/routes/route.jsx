import Home from '../pages/Home';
import IndexIot from '../pages/IndexIot/IndexIot';
import IOT from '../pages/Detail/IOT';
import test from '../pages/test/test';

const publicRoutes = [
    { path: '/list', component: IOT },
    { path: '/', component: Home },
    { path: '/index', component: IndexIot },
    { path: '/test', component: test },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
