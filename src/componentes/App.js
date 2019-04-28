import React,{Component} from 'react';
import Header from './Header';
import AgregarCita from './AgregarCita';
import ListaCitas from './ListaCitas';

class App extends Component {

  crearCita=(nuevaCita)=>{
    const citas = [...this.state.citas,nuevaCita];
    this.setState({
      citas
    });
  }
  borrarCita=(id)=>{
    console.log(id)
    //Obtener copia del state
    const citasActuales = [...this.state.citas];

    //Borrar el elemento del state
    const citas = citasActuales.filter(cita=>cita.id !== id);

    //Actualizar el state
    this.setState({
      citas
    })
  }
  state={
    citas:[]
  }

  componentDidMount(){
    const citasLocalS = localStorage.getItem('citas');
    if(citasLocalS){
      this.setState({
        citas: JSON.parse(citasLocalS)
      })    
    }
  }
  componentDidUpdate(){
    localStorage.setItem(
      'citas',JSON.stringify(this.state.citas)
    )
  }

  render(){
    return (
      <div className="App">
          <Header
            titulo={'Administrador de Pacientes'}
          />
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <AgregarCita
                  crearCita={this.crearCita}
                />
              </div>
              <div className="col-md-6">
                <ListaCitas
                  citas = {this.state.citas}
                  borrarCita={this.borrarCita}
                />
              
              </div>

            </div>
          </div>
      </div>
    );
  }
}

export default App;
