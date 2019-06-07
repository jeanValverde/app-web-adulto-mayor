import React from "react";
// nodejs library that concatenates classes

import RegistrarUsuario from '../components/Forms/RegistrarUsuario.jsx'

class Registrar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      usuarios: []
    };
    this.buscarUsuarioGitHub = this.buscarUsuarioGitHub.bind(this);
  }


  buscarUsuarioGitHub(usuario){
     this.setState({
       usuarios: [...this.state.usuarios, usuario]
     })
  }



  render() {

    return (
      <>
        <div className="container">
           <div className="row mt-4" >
              <div className="col-md-6" >
                 <RegistrarUsuario AgregarUser={this.buscarUsuarioGitHub} />
              </div>
           </div>
        </div>
      </>
    );
  }



}

export default Registrar;
