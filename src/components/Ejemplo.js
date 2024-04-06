import React, { useEffect, useRef, useState } from 'react';

export const Ejemplo = () => {
  const [nroSaludo, setNroSaludo] = useState(0);
  const saludosEnCola = useRef(nroSaludo);

  useEffect(() => {
    saludosEnCola.current = nroSaludo;
    setTimeout(() => {
      console.log(`> saludosEnCola: ${saludosEnCola.current}`);
    }, 2000);
  }, [nroSaludo]);

  const enviarSaludo = (e) => setNroSaludo(nroSaludo + 1);

  return (
    <div>
      <h1>Ejemplo con useRef</h1>
      <h2>Saludos enviados: {nroSaludo}</h2>
      <button onClick={enviarSaludo}>Enviar Saludo</button>
    </div>
  );
}