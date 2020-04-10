// Siempre debemos importar React porque este nos habilita el JSX de la funcion
import React from 'react';

// E importamos el componente hijo
import Parrafo from './Parrafo';

function MiHolaMundo() {
    return (
        <div>
            <h1>Hola Mundo</h1>
            <Parrafo />
        </div>
    )
}

// Debemos exportar esta funcion
export default MiHolaMundo;