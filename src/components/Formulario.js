import React, { useEffect, useRef } from 'react';

export const Formulario = () => {

    const nombreInput = useRef('');
    const apellidosInput = useRef('');
    const emailInput = useRef('');
    const miCaja = useRef();

    useEffect (()=> {
        nombreInput.current.focus();
    }, []);

    const mostrar = (e) => {
        e.preventDefault();
        let { current: caja } = miCaja;
        caja.classList.add('fondoVerde');
        caja.innerHTML = 'Formulario enviado';
    }

    return (
        <div>
            <h1>Formulario</h1>
            <div className='miCaja' ref={miCaja}>
                <h3>Test con useRef</h3>
            </div>
            <form onClick={mostrar}>
                <input type='text' placeholder='Nombre' ref={nombreInput}/>
                <br />
                <input type='text' placeholder='Apellidos' ref={apellidosInput} />
                <br />
                <input type='email' placeholder='Email' ref={emailInput} />
                <br />
                <input type='submit' value='Enviar' />
                <br />
            </form>
        </div>
    );
}