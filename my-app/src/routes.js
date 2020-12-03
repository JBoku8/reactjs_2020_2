import Contact from "./pages/Contact";
import Counter from "./pages/Counter";
import ReduxCounter from "./pages/ReduxCounter";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export const routes = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/contact",
    component: Contact,
  },
  {
    path: "/counter",
    component: Counter,
  },
  {
    path: "/redux-counter",
    component: ReduxCounter,
  },
  // {
  //   path:'/blog',
  //   component: Contact
  // },
  {
    path: "*",
    component: NotFound,
  },
];
