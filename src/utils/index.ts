import { lazy, LazyExoticComponent } from "react";

const Home = lazy(() => import("../component/Home/index"));




const About = lazy(() => import("../component/About"));

const Register = lazy(() => import("../component/Register"));
const Login = lazy(() => import("../component/Login"));
const Profil = lazy(() => import("../component/Profil"));

interface RouteData {
  id: number;
  path: string;
  component: LazyExoticComponent<React.ComponentType<any>>;
}

export const Data: RouteData[] = [
  {
    id: 1,
    path: "/",
    component: Home,
  },

 


  {
    id: 12,
    path: "/biz-haqimizda",
    component: About,
  },

  {
    id: 14,
    path: "/register",
    component: Register,
  },
  {
    id: 15,
    path: "/login",
    component: Login,
  },

  {
    id: 17,
    path: "/profil",
    component: Profil,
  },
  {
    id: 18,
    path: "/profil/sozlamalar",
    component: Profil,
  },
  {
    id: 18,
    path: "/profil/taklif",
    component: Profil,
  },
  {
    id: 19,
    path: "/profil/barcha-murojatlar",
    component: Profil,
  },
  {
    id: 20,
    path: "/profil/imkoniyat-buyicha-murojatlar",
    component: Profil,
  },

];
