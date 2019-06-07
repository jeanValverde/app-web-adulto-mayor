import React from "react";
// nodejs library that concatenates classes
//

import FormIniciarSesion from '../components/Forms/IniciarSesion.jsx'



class IniciarSesion extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      
    }
  }


  render() {
    return (
      <>
        <div className="row mt-4" >
          <div className="col-md-4" >
          </div>
            <div className="col-md-4" >
              <FormIniciarSesion/>
            </div>
          <div className="col-md-4" >
          </div>
        </div>
      </>
    );
  }
}

export default IniciarSesion;
