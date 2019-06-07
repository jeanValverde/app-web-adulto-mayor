
import Inicio from "./viewsPrivate/Inicio.jsx";
import Get from "./viewsPrivate/Get.jsx";
import Cuenta from "./viewsPrivate/Cuenta.jsx";

var routes = [
  {
    path: "/Inicio",
    name: "Inicio",
    icon: "icono",
    component: Inicio,
    layout: "/private"
  },
  {
    path: "/ListaUsuarios",
    name: "Listar Usuarios",
    icon: "icono",
    component: Get,
    layout: "/private"
  },
  {
    path: "/Cuenta",
    name: "Mi Cuenta",
    icon: "icono",
    component: Cuenta,
    layout: "/private"
  }
];
export default routes;
