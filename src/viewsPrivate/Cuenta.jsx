import React from "react";
import axios from 'axios';
// nodejs library that concatenates classes
//

import CardUserAlone from '../components/CardGetUsers/CardUserAlone.jsx';


class Cuenta extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

    }
  }


  componentWillMount() {

   // console.log(axios.defaults.headers.common['Authorization']);
    //delete axios.defaults.headers.common['Authorization'];
    //viewUsuario
    //

    axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');



  }

  render() {


/*

const usuario = this.state.usuarios.map((usuario, key) => {
     return (
        <CardUserAlone  />
     )
   });



 */

    return (
      <>



        <div className="container mt-4">
           <div className="row" >
            <CardUserAlone/>
            </div>
        </div>
      </>
    );
  }
}

export default Cuenta;
