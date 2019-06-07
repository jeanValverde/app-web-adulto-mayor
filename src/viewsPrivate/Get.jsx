import React from "react";
import axios from 'axios';
// nodejs library that concatenates classes
//

import CardGetUser from '../components/CardGetUsers/CardGetUser.jsx';


class Get extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      usuarios: [ ]
    }
  }


  componentWillMount() {

   // console.log(axios.defaults.headers.common['Authorization']);
    //delete axios.defaults.headers.common['Authorization'];
    //viewUsuario
    //

    axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');


    axios.get('http://localhost:8034/usuario/all')
    .then(res => {
      const usuarios = res.data;
      this.setState({
        usuarios
      });

    })
    .catch(error => {
      if(error.response.data.message === "403"){
        //redirecciona a otra pagina si no se tiene acceso desde back-end
        this.props.history.push("/public/IniciarSesion");
      }
    });



  }

  render() {


      const usuarios = this.state.usuarios.map((usuario, key) => {
           return (
              <CardGetUser key={key} Usuario={usuario} />
           )
         });



    return (
      <>



        <div className="container mt-4">
           <div className="row" >
            {usuarios}
            </div>
        </div>
      </>
    );
  }
}

export default Get;
