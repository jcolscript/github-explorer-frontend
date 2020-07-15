import React, { FormEvent, useState, useEffect } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import logo from '../../assets/images/logo.svg';

import { Title, Form, Users, Error } from './styles';

interface IUser {
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
  const [users, setUsers] = useState<IUser[]>(() => {
    const usersLocalStorage = localStorage.getItem('@GHE:users');

    if (usersLocalStorage) {
      return JSON.parse(usersLocalStorage);
    } else {
      return [];
    }
  });

  const [inputError, setIputError] = useState('');
  const [newUser, setNewUser] = useState('');

  useEffect(() => {
    localStorage.setItem('@GHE:users', JSON.stringify(users));
  }, [users]);

  async function handleAddUser(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!newUser) {
      setIputError('Digite o nome de usuario!');
      return;
    }

    try {
      const { data } = await api.get<IUser>(`users/${newUser}`);

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
          <Link to={`/user/${user.login}`} key={user.id}>
            <img src={user.avatar_url} alt="" />
            <div>
              <strong>{user.login}</strong>
              <p>{user.bio}</p>
            </div>
            <FiChevronRight size={20} />
          </Link>
        ))}
      </Users>
    </>
  );
};

export default Dashboard;
