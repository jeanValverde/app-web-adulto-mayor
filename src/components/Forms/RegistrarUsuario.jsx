import React from "react";
import axios from 'axios';


class RegistrarUsuario extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      rut: '',
      nombre: '',
      paterno: '',
      materno: '',
      correo: '',
      password: '',
      fechaNacimiento: '',
      numeroTelefonico: '',
      sexo: '',
      estado: true,
      usuarios: [],
      codeError: 0
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

        const data = {
        	"rut": this.state.rut,
        	"nombre": this.state.nombre,
        	"paterno": this.state.paterno,
        	"materno": this.state.materno,
        	"sexo": this.state.sexo,
        	"fechaNacimiento": this.state.fechaNacimiento,
        	"correo": this.state.correo,
        	"numeroTelefonico": this.state.numeroTelefonico,
        	"estado": true
        };


        axios.post('http://localhost:8034/usuario/addUsuario', data, {
           headers: {
              'content-type': 'application/json',
           },
        }).then(res => {
          const usuario = res.data;



        }).catch(error => {
          if(error.message === "Request failed with status code 404"){
            this.setState({
              codeError: 1
            })
          }
        })


  }



    render() {
        return (
          <>

          {
            this.state.codeError === 1 ? <div className="alert alert-danger" >Usuario no encontrado</div> : ''
          }

        <div className="card" >
          <form className="mt-4 mr-4 ml-4 mb-4" name="form" metho="POST" onSubmit={this.enviarDatosForm}  >
              <h4>Registrate </h4>

               <div className="row" >
                  <div className="col-md-6" >
                  <div className="form-group">
                      <label htmlFor="textBuscar">RUT</label>
                      <input type="number"
                             className="form-control"
                             id="text-1"
                             aria-describedby="textBuscar"
                             placeholder="152064561"
                             name="rut"
                             onChange={this.obtenerValorInput} />
                      <small id="textBuscar" className="form-text text-muted"> Sin punto ni guion </small>
                    </div>
                  </div>
                  <div className="col-md-6" >
                  <div className="form-group">
                    <label htmlFor="textBuscar">Nombre</label>
                    <input type="text"
                           className="form-control"
                           id="text-2"
                           aria-describedby="textBuscar"
                           placeholder="jean"
                           name="nombre"
                           onChange={this.obtenerValorInput} />
                    <small id="textBuscar" className="form-text text-muted"></small>
                  </div>
                  </div>
               </div>

               <div className="row" >
                  <div className="col-md-6" >
                  <div className="form-group">
                      <label htmlFor="textBuscar">Apellido Paterno</label>
                      <input type="text"
                             className="form-control"
                             id="text-3"
                             aria-describedby="textBuscar"
                             placeholder="González"
                             name="paterno"
                             onChange={this.obtenerValorInput} />
                      <small id="textBuscar" className="form-text text-muted"></small>
                    </div>
                  </div>
                  <div className="col-md-6" >
                  <div className="form-group">
                    <label htmlFor="textBuscar">Apellido Materno</label>
                    <input type="text"
                           className="form-control"
                           id="text-4"
                           aria-describedby="textBuscar"
                           placeholder="Plaza"
                           name="materno"
                           onChange={this.obtenerValorInput} />
                    <small id="textBuscar" className="form-text text-muted"></small>
                  </div>
                  </div>
               </div>


               <div className="row" >
                  <div className="col-md-12" >
                  <div className="form-group">
                      <label htmlFor="textBuscar">Correo</label>
                      <input type="email"
                             className="form-control"
                             id="text-5"
                             aria-describedby="textBuscar"
                             placeholder="example@dominio.com"
                             name="correo"
                             onChange={this.obtenerValorInput} />
                      <small id="textBuscar" className="form-text text-muted">Obligatorio</small>
                    </div>
                  </div>
               </div>

               <div className="row" >
                  <div className="col-md-12" >
                  <div className="form-group">
                    <label htmlFor="inputPassword1">Password</label>
                        <input type="password"
                               id="inputPassword1"
                               className="form-control"
                               aria-describedby="passwordHelpBlocks"
                               name="password"
                               onChange={this.obtenerValorInput} />
                        <small id="passwordHelpBlocks" className="form-text text-muted">
                        Su contraseña debe tener entre 8 y 20 caracteres, debe contener letras y números, y no debe contener espacios, caracteres especiales.
                        </small>
                    </div>
                  </div>
               </div>

               <div className="row" >
                  <div className="col-md-6" >
                    <div className="form-group">
                      <label htmlFor="inputPassword5">Password</label>
                       <input type="password"
                              id="inputPassword5"
                              className="form-control"
                              aria-describedby="passwordHelpBlock"
                              name="password"
                              onChange={this.obtenerValorInput}/>
                       <small id="passwordHelpBlock" className="form-text text-muted">
                         Repetir contraseña
                       </small>
                    </div>
                  </div>
                  <div className="col-md-6" >
                    <div className="form-group">
                          <label htmlFor="textBuscar">Fecha Nacimiento</label>
                          <input type="text"
                                 className="form-control"
                                 id="text-6"
                                 aria-describedby="textBuscar"
                                 placeholder=""
                                 name="fechaNacimiento"
                                 onChange={this.obtenerValorInput} />
                          <small id="textBuscar" className="form-text text-muted"></small>
                      </div>
                  </div>
               </div>


               <div className="row" >
                  <div className="col-md-6" >
                  <div className="form-group">
                      <label htmlFor="textBuscar">Numero</label>
                      <input type="text"
                             className="form-control"
                             id="text-7"
                             aria-describedby="textBuscar"
                             placeholder="9834374234"
                             name="numeroTelefonico"
                             onChange={this.obtenerValorInput} />
                      <small id="textBuscar" className="form-text text-muted">Numero de celular (9xxxxxxxx)</small>
                    </div>
                  </div>
                  <div className="col-md-6" >
                  <div className="form-group">
                    <div className="custom-control custom-radio custom-control-inline mt-4">
                      <input type="radio"
                             id="sexo"
                             name="sexo"
                             value="H"
                             className="custom-control-input"
                             onChange={this.obtenerValorInput}/>
                      <label className="custom-control-label" htmlFor="sexo">Hombre</label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline">
                      <input type="radio"
                             id="customRadioInline2"
                             name="sexo"
                             value="M"
                             className="custom-control-input"
                             onChange={this.obtenerValorInput}/>
                      <label className="custom-control-label" htmlFor="customRadioInline2">Mujer</label>
                    </div>
                    <div className="custom-control custom-checkbox mt-4">
                      <input type="checkbox"
                             className="custom-control-input"
                             id="customCheck1"
                             name="terminos"
                             onChange={this.obtenerValorInput}/>
                      <label className="custom-control-label" htmlFor="customCheck1">He leído y acepto los términos y condiciones de uso</label>
                  </div>
                    </div>
                  </div>
               </div>
            <button type="submit" className="btn btn-success">Buscar</button>
          </form>
          </div>
          </>
      );
    }

};

export default RegistrarUsuario;
