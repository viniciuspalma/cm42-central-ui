import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './Home';
import Hello from './components/Hello';

Vue.use(VueRouter);

const App = Vue.extend({});
const router = new VueRouter();

router.map({
  '/': {
    component: Home,
  },

  '/hello': {
    component: Hello,
  },
});

router.start(App, 'body');
