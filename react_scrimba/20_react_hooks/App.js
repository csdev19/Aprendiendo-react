import React, {useState, useEffect} from "react"
import randomcolor from "randomcolor"

function App() {
    const [count, setCount] = useState(0)
    const [answer, setAnswer] = useState("Yes")
    const [colour, setColour] = useState(randomcolor())


    // El useEffect seria mas un onChange sin referencia a que se esta updateando exactamente
    // Solo se que se updatea
    useEffect(() => {
        // Actualiza el título del documento usando la API del navegador
        const root = document.documentElement;
        root.style.setProperty('--color-red', colour);
    });

    // Me retracto algo super interesante de useEffect es que puedo decirle a que variable escuchar
    // Primer parametros es un callback y el segundo es un array de las variables que quiero que escuche
    // Esto haria que no escuche los cambios es el count como lo haciamos arriba
    useEffect(() => {
        // Actualiza el título del documento usando la API del navegador
        const root = document.documentElement;
        root.style.setProperty('--color-red', colour);
    }, [colour]);


    // Y si queremos un efecto ngOnInit() ?
    // Debemos mandar la lista vacia
    useEffect(() => {
        // Actualiza el título del documento usando la API del navegador
        const root = document.documentElement;
        root.style.setProperty('--color-red', colour);
    }, []);

    // Tambien podemos hacer un ngOnDestroy en react de la siguiente manera
    useEffect(() => {

        const intervalId = setInterval(() => {
            setCount(prevCount => prevCount + 1)
        }, 1000)
        // con este return y sin mandarle parametros react ejecutara esto cuando se destruya este COMPONENTE
        return () => clearInterval(intervalId)
    }, [])
    


    function increment() {
        setCount(prevCount => prevCount + 1)
    }

    function decrement() {
        setCount(prevCount => prevCount - 1)
    }

    function changeColour() {
        console.log('holaa')
        const newColour = randomcolor();
        setColour(prevCount => newColour);
    }

    useEffect(() => {

    })

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={changeColour}>Change</button>
        </div>
    )
}

export default App
