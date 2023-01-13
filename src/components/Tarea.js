import React from "react";
import '../styles/Tarea.css'
import { AiOutlineStop } from 'react-icons/ai'

const Tarea = ({ id, texto, completado, completarTarea, eliminarTarea }) => {
    return(
        <div className={completado ? 'tarea-contenedor completado' : 'tarea-contenedor'}>
            <div className="tarea-texto" onClick={()=> completarTarea(id)}>
                {texto}
            </div>
            <div className="tarea-contenedor-iconos" 
                onClick={()=> eliminarTarea(id)}>
                <AiOutlineStop className="tarea-icono"/>
            </div>
        </div>
    );
}

export {Tarea};