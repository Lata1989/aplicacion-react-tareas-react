import React from "react";
import './Tarea.css';

/* Import iconos */
// import { AiOutlineCheckCircle } from "react-icons/ai";
// import { AiOutlineClockCircle } from "react-icons/ai";
import { AiOutlineExclamationCircle } from "react-icons/ai";

export const Tarea = ({ id, texto, completada, completarTarea, eliminarTarea }) => {

    return (
        <>
            <div className={completada ? "tarea-contenedor completada" : "tarea-contenedor"}>
                <div className="tarea-texto"
                onClick={() => completarTarea(id)}>
                    {texto}
                </div>
                <div className="tarea-contenedor-iconos"
                onClick={() => eliminarTarea(id)}>
                    <AiOutlineExclamationCircle className="tarea-icono" />
                </div>
            </div>
        </>
    );
};