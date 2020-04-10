import React from 'react'

function App() {

    // Tambien podemos pasarle un objeto entero como propiedades css
    const styles = {
        color: "#FF8C00",
        // Podemos pasarle el font size como numeros normales POR DEFECTO LO TOMARA COMO PIXELES si queremos especificar debemos ponerlo entre comillas
        fontSize: 16,
        // Enves de usar background-color debemos poner sin el '-' y ponerlo como cammel case
        backgroundColor: "#FF2D00"
    }


    // Usaremos el atributo className para que jsx reconozca que es una propiedad css
    return (
        <div style={ styles }>
            <h1 className="titulo">holaaa</h1>
        </div>
    )
}

export default App;
