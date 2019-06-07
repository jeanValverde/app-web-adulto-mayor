import React from "react";


class FormBuscarUsuario extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      usuario: ''
    };

    this.obtenerValorInput = this.obtenerValorInput.bind(this);

  }

  obtenerValorInput(e){
    const {value , name} = e.target;
    e.preventDefault();
     this.setState({
         [name]: value
     })
  }

    render() {
        return (
          <>

          {
            this.state.codeError === 1 ? <div className="alert alert-danger" >Usuario no encontrado</div> : ''
          }


          <div className="card" onSubmit="this.obtenerValorInput()" >
              <form className="mt-4 ml-4 mr-4 mb-4" >
                 <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                   <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                  <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                 </div>
                 <button type="submit" className="btn btn-success">Submit</button>
               </form>
          </div>

          </>
      );
    }

};

export default FormBuscarUsuario;
