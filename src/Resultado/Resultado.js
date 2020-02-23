import React from 'react';
import './Resultado.css';

class Resultado extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className = "Resultado">
               <p> El resultado es {this.props.valor}</p>
            </div >
        )
    }
};

export default Resultado;