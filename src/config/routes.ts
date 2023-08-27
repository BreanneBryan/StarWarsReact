import Home from '../pages/Home'
import Coreset from '../pages/Coreset'
import Wish from '../pages/Wish'

interface RouteType {
    path: string,
    component: () => JSX.Element,
    name: string
}

const routes: RouteType[] = [
    {
      path: "",
      component: Home,
      name: "Home Screen",
    },
    {
      path: "/coreset",
      component: Coreset,
      name: "Coreset",
    },
    {
      path: "/wish",
      component: Wish,
      name: "Wish",
    }
];

export default routes