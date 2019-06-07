import React from "react";
import { Route, Switch } from "react-router-dom";


// core components
import Navbar from "../../components/Navbars/Navbar.jsx";


import routes from "../../routesPrivate.js";


class Private extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.layout === "/private") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  render() {
    return (
      <>



            <Navbar
            {...this.props}
             routes={routes}
             />

            <Switch>{this.getRoutes(routes)  //carga la vista segun la pagina solicitada.
            }</Switch>



      </>
    );
  }
}

export default Private;
