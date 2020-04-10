// Primero las importaciones


// El ReactDOM nos sirve para hacer el render sobre el html
import ReactDOM from "react-dom";
// Algo importante es que importamos React porque este implicitamente nos habilita el JSX que necesita ReactDOM para funcionar
import React from "react";


// Como funciona react
// ReactDOM.render( QUE QUEREMOS MOSTRAR, DONDE LO QUEREMOS MOSTRAR)

ReactDOM.render(
    <h1>Hola Mundo</h1>
    , document.getElementById("root")
);



