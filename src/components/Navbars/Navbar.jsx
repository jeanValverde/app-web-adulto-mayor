import React from "react";
import { NavLink   } from "react-router-dom";


import '../../assets/css/navbar.css';


class Navbar extends React.Component {

  constructor(props) {
    super(props);
    this.activeRoute.bind(this);
  }
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }


    render() {
      const { routes } = this.props;
        return (
          <>
                <nav className="navbar navbar-dark bg-dark navbar-expand-lg navbar-light bg-light">
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarTogglerDemo01" >
                    <div className="navbar-brand"  >React GitHub</div>

                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    {routes.map((prop, key) => {
                      if (prop.redirect) return null;
                      return (

                          <NavLink
                            key={key}
                            to={prop.layout + prop.path}
                            className="nav-item"
                            activeClassName="active"
                            onClick={this.props.toggleSidebar}
                          >
                          <div className="nav-link" href="#" >{prop.name}</div>
                          </NavLink>
                      );
                    })}
                    </ul>

                    <form className="form-inline my-2 my-lg-0">
                      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                      <button className="btn btn-outline-success my-2 my-sm-0" >Search</button>
                    </form>

                 </div>
              </nav>
                </>
                );
    }

};

export default Navbar;
