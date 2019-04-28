import React,{Component} from 'react';
import Formulario from './Formulario';
import PropTypes from 'prop-types';

class AgregarCita extends Component{
    state={

    }
    render(){
        return(
            <div className="card mt-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">Agregar las citas aqui. </h2>
                    <Formulario
                        crearCita={this.props.crearCita}
                    />
                </div>
            </div>
        )
    }
}

AgregarCita.propTypes ={
    crearCita: PropTypes.func.isRequired
}

export default AgregarCita;