import React from "react";
import axios from 'axios';
import qs from 'qs';
import {Redirect} from "react-router-dom";



class IniciarSesion extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      usuario: '',
      password: '',
      codeError: 0,
      redirect: false
    };

    this.obtenerValorInput = this.obtenerValorInput.bind(this);
    this.enviarDatosForm = this.enviarDatosForm.bind(this);
  }

  obtenerValorInput(e){
    const {value , name} = e.target;
     this.setState({
         [name]: value
     })
  }


  enviarDatosForm(e){

    e.preventDefault();

    let rut = this.state.usuario;

    //isNaN("12") retorna false si es numerio
    if(isNaN(this.state.usuario)){
      rut = 0;
    }

    const data = qs.stringify({
      rut: rut,
      password: this.state.password,
      correo: this.state.usuario
    });

    axios.post(
      'http://localhost:8034/usuario/iniciarSesion',
      data ,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    .then(response => {
      const token = response.data;
      if(token !== 403){
         localStorage.clear();
         localStorage.setItem("token", token);
         this.setState({
           redirect: true
         })
      }else{
        this.setState({
          codeError: 1
        })
      }
    })
    .catch(error => {

    });


  }

    render() {
        return (
          <>

          {
            this.state.codeError === 1 ? <div className="alert alert-danger" >Usuario o contraseña erronea</div> : ''
          }

          <div className="card" >
            <form className="mt-4 ml-4 mr-4 mb-4" method="POST" onSubmit={this.enviarDatosForm}  >
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                  <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
                   name="usuario"  onChange={this.obtenerValorInput} />
                  <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
             </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name="password"  onChange={this.obtenerValorInput} />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>

          { (this.state.redirect) ? <Redirect to='/private/Inicio'/> : ""  }


          </>
      );
    }

};

export default IniciarSesion;
