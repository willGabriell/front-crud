import { useState } from 'react';
import { Link } from 'react-router-dom';
import './UserForm.css'

function UserForm() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userData = {
          name: name,
          email: email,
          password: password,
        };
    
        try {
          const response = await fetch('http://localhost:8080/users', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
          });
    
          if (response.ok) {
            alert('Usuário cadastrado com sucesso!');
          } else {
            alert('Erro ao cadastrar usuário.');
          }
        } catch (error) {
          alert('Erro na requisição: ' + error.message);
        }
      };

    return(
      <div className="form-container">
      <div id="UserForm">
        <h2 id="title">Cadastrar Usuário</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Digite seu nome" value={name} onChange={(e) => setName(e.target.value)} required />
          <input type="email"placeholder="Digite seu email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Defina sua senha" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit">Finalizar Cadastro</button>
        </form>
        <Link to="/UserList">Usuários Cadastrados</Link>
      </div>
    </div>
    );
}

export default UserForm;