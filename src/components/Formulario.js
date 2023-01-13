import React, {useState} from "react";
import '../styles/Formulario.css'
import {v4 as uuidv4} from 'uuid'

const Formulario = (props) =>{
    
    const[entrada, setEntrada] = useState('');

    const manejarCambio = (e)=> {
        setEntrada(e.target.value)
    };

    const manejarEnvio = (e)=> {
        // no vuelca a cargar cuando se envia el formulario
        e.preventDefault();

        const tareaNueva = {
            id: uuidv4(),
            texto: entrada,
            completado: false
        };
        
        props.onSubmit(tareaNueva)
    };

    return(
        <form className="tarea-form" onSubmit={manejarEnvio}>
            <input className="tarea-input"
                type='text'
                placeholder="Escribe una tarea"
                name = 'texto'
                onChange={manejarCambio}/>
            <button className="tarea-boton">
                Agregar Tarea 
            </button>
        </form>
    )
}

export {Formulario}