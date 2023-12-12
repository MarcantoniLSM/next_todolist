import './Login.css'

import React, { useState } from 'react';

export default function Login(){
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Lógica para autenticação com os dados (username e password)
    // Você pode usar axios.post() para enviar os dados para um endpoint de autenticação

    console.log('Username:', username);
    console.log('Password:', password);

    // Limpa os campos após o envio
    setUsername('');
    setPassword('');
  };

  return (
    <div>
        <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Nome de Usuário:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
        />

        <label htmlFor="password">Senha:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />

        <button type="submit">Login</button>
      </form>
      </div>
      <div>
      <h2>Cadastro</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />

        <label htmlFor="username">Nome de Usuário:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
        />

        <label htmlFor="password">Senha:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />

        <button type="submit">Cadastrar</button>
      </form>
    </div>
    </div>
  );
};