import { useState, useEffect } from 'react';
import axios from "axios";
import './UserList.css'

function UserList() {
    const [users, setUser] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:8080/users')
      .then(response => {
        setUser(response.data);
      }).catch(error => {
        console.error('erro ao buscar usuários', error);
      })
    }, []);

    return(
        <div id='UserList'>
            <h2>Usuários Cadastrados</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name} | {user.email}</li>
                ))}
            </ul>
        </div>
    );
}

export default UserList;