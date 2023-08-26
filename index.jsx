import React, { useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  const handleClick = () => {
    setMessage('Você clicou no botão!');
  };

  return (
    <div>
      <h1>Exemplo de Botão em React</h1>
      <button onClick={handleClick}>Clique em mim</button>
      <p>{message}</p>
    </div>
  );
}

export default App;
