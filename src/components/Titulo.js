import React, { Component } from 'react';


// se autocompleta con rcc
class Titulo extends Component {
    render() {
        return (
            // aqui agrego todo el maquetado y podría tener algo de lógica
           <h1 className = 'display-3 text-light text-center my-5'>Lista de tareas</h1>
        );
    }
}

export default Titulo;