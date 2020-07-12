import React, { FormEvent, useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';

import logo from '../../assets/images/logo.svg';

import { Title, Form, Users, Error } from './styles';

interface IUsers {
  login: string;
  id: number;
  avatar_url: string;
  url: string;
  name: string;
  bio: string;
  created_at: Date;
  updated_at: Date;
}

const Dashboard: React.FC = () => {
  const [users, setUsers] = useState<IUsers[]>([]);
  const [inputError, setIputError] = useState('');
  const [newUser, setNewUser] = useState('');

  async function handleAddUser(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!newUser) {
      setIputError('Digite o nome de usuario!');
      return;
    }

    try {
      const { data } = await api.get<IUsers>(`users/${newUser}`);

      setUsers([...users, data]);
      setNewUser('');
      setIputError('');
    } catch (error) {
      setIputError('Erro ao buscar por esse usuario!');
    }
  }

  return (
    <>
      <img src={logo} alt="GitHub Explorer" />
      <Title>Explore repositórios no Github.</Title>
      <Form hasError={!!inputError} onSubmit={handleAddUser}>
        <input
          type="text"
          placeholder="Digite aqui o username"
          onChange={e => setNewUser(e.target.value)}
          value={newUser}
        />
        <button type="submit">Pesquisar</button>
      </Form>
      {inputError && <Error>{inputError}</Error>}
      <Users>
        {users.map(user => (
          <a href="teste" key={user.id}>
            <img src={user.avatar_url} alt="" />
            <div>
              <strong>{user.login}</strong>
              <p>{user.bio}</p>
            </div>
            <FiChevronRight size={20} />
          </a>
        ))}
      </Users>
    </>
  );
};

export default Dashboard;
