import React,{Component} from 'react';
import Cita from './Cita';
import PropTypes from 'prop-types';


class ListaCitas extends Component{
    render(){
        let tituloCitas = '';
        if(this.props.citas.length===0){
             tituloCitas = 'No hay citas'
        }else{
             tituloCitas = 'Sus citas son: '
        }

        return(
            <div className="card mt-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">{tituloCitas}</h2>
                    <div className="lista-citas">
                        {Object.keys(this.props.citas).map(key=>{
                            return(
                            <Cita
                                key={key}
                                info={this.props.citas[key]}
                                borrarCita={this.props.borrarCita}
                            />)
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

ListaCitas.propTypes={
    citas: PropTypes.array.isRequired,
    borrarCita: PropTypes.func.isRequired
}

export default ListaCitas;