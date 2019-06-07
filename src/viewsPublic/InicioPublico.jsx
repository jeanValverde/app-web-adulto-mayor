import React from "react";
import axios from 'axios';
// nodejs library that concatenates classes
//

import CardGetUser from '../components/CardGetUsers/CardGetUser.jsx';


class InicioPublico extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      usuarios: [ ]
    }
  }



  componentWillMount() {

    axios.get('http://localhost:8034/usuario/public/all')
    .then(res => {
      const usuarios = res.data;
      	this.setState({usuarios})
    })
    .catch(error => {

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

export default InicioPublico;
