import React from 'react';
import './Contador.css';
import Botao from '../Botao/Botao';
// import { ReactComponent } from '*.svg';


class Contador extends React.Component {

    state = {
        contador: 0,
        zero: 0
    }



    aumentar = () => {
      let novoContador = this.state.contador;
      novoContador++;
      this.setState({ contador: novoContador });
    }

    diminuir = () => {
        let diminuirContador = this.state.contador;
        diminuirContador--;
        this.setState({ contador: diminuirContador });
    }

    zerar = () => {
        // let resetContador = this.state.zero;
        // resetContador.zero;
        this.setState({ contador: 0 });
    }


    render(){
        return(
            <div>
            <h1>O valor do meu contador é: { this.state.contador } </h1>
            <Botao
            classe="aumentar"
            aoClicar={this.aumentar}
            titulo="Aumentar"

            />
            <Botao
            classe="diminuir"
            aoClicar={this.diminuir}
            titulo="Diminuir"

            />
            <Botao
            classe="zerar"
            aoClicar={this.zerar}
            titulo="Zerar"

            />
            
            </div>
        );
    }
}

export default Contador;