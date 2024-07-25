import React, { useState } from "react";
import './Formulario.css';

import {v4 as uuidv4} from 'uuid';

export const Formulario = (props) => {

    const [input, setInput] = useState('');

    const manejarEnvio = e => {
        e.preventDefault();
        // console.log("Enviando formulario...");
        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completada: false
        };

        console.log(tareaNueva);

        props.onSubmit(tareaNueva);
    };

    const manejarCambio = e => {
        setInput(e.target.value);
        // console.log(e.target.value);
    };

    return (
        <>
            <form className="tarea-formulario"
                onSubmit={manejarEnvio}>
                <input
                    className="tarea-input"
                    type="text"
                    placeholder="Ingrese una tarea..."
                    name="texto"
                    onChange={manejarCambio}
                ></input>
                <button
                    className="tarea-boton">
                    Agregar tarea</button>
            </form>
        </>
    );
};