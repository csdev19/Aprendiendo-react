// Primero las importaciones
import ReactDOM from "react-dom";
import React from "react";

// Podemos crear una funcion que retorne el JSX
function MiHolaMundo() {
    return (
        <h1>Hola Mundo</h1>
    )
}

// Este componente puede ser llamado de la siguiente manera <NombreDeFuncion />
ReactDOM.render(
    <MiHolaMundo />
    , document.getElementById("root")
);



