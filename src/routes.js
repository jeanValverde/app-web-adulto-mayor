//enrutamiento declarativo para manejar direccion de la página - Link

/* import Component from "views/Dashboard.jsx"; carga la vista

var routes = [
  {
    path: "/direccion",
    name: "Nombre",
    icon: "icono",
    component: ComponentCargado,
    layout: "/nombreLayout"
  }
];
export default routes;

*/


import IniciarSesion from "./viewsPublic/IniciarSesion.jsx";
import InicioPublico from "./viewsPublic/InicioPublico.jsx";
import Registrar from "./viewsPublic/Registrar.jsx";

var routes = [
  {
    path: "/Inicio",
    name: "Inicio",
    icon: "icono",
    component: InicioPublico,
    layout: "/public"
  },
  {
    path: "/IniciarSesion",
    name: "Iniciar Sesión",
    icon: "icono",
    component: IniciarSesion,
    layout: "/public"
  },
  {
    path: "/Registrar",
    name: "Registrar",
    icon: "icono",
    component: Registrar,
    layout: "/public"
  }
];
export default routes;
