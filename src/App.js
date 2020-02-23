import React from 'react';
import './App.css';
import Entrada from './Entrada/Entrada';
import Resultado from './Resultado/Resultado';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resultado: 0,
      valorEntrada: 0,
      boton: 37
    }
  }

  calculaResultado = (event) => {
    console.log(event.target.value)
    let total = event.target.value * this.state.boton;
    this.setState({
      resultado: total,
      valorEntrada: event.target.value
    })
  }

  
  cambiarMultiplicacion = (numero) => {
    let res = this.state.valorEntrada*numero;
    this.setState({
      boton: numero,
      resultado: res
    })
  }

  render() {
    return (
      <div className = "App">
        <Entrada
          cambiando = {this.calculaResultado}
          boton = {this.state.boton}
        />
        <button class = "button" onClick={() => this.cambiarMultiplicacion(37)}> x37 </button>
        <button class = "button" onClick={() => this.cambiarMultiplicacion(43)}> x43 </button>
        <Resultado
          valor={this.state.resultado}
        />

      </div>
    );

  }
}

export default App;
