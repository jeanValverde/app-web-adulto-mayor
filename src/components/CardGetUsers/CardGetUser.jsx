
import React from "react";


class CardGetUser extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }


    render() {
      const { Usuario } = this.props;

        return (
          <>



          <div className="col-md-4" >
             <div className="card" >
               <div className="card-body">
                <p className="card-text">{Usuario.nombre}</p>
               </div>
               <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                 Estado
                 <span className="badge badge-primary badge-pill">{Usuario.estado ? 'Activo' : 'Desactivo'}</span>
               </li>
                <li className="list-group-item">Correo: {Usuario.correo}</li>
                <li className="list-group-item">Rut: {Usuario.rut}</li>
                <li className="list-group-item">Vestibulum at eros</li>
               </ul>
             </div>
           </div>

          </>
      );
    }

};

export default CardGetUser;
