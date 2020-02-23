import React from 'react';
import './Entrada.css';

class Entrada extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className = "Entrada">
                <div className = "Caja"> Está pulsado el botón x{this.props.boton}</div>
                <p> El número introducido es: </p>
                <input type="text" onChange={this.props.cambiando}/>
            </div >
        )
    }
};

export default Entrada;