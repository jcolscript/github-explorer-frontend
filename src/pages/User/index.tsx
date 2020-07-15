import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';

import logo from '../../assets/images/logo.svg';

import { Header, UserInfo, Repositories } from './styles';

interface IUserParamns {
  username: string;
}

interface IUser {
  id: number;
  login: string;
  avatar_url: string;
  url: string;
  name: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: Date;
  updated_at: Date;
}

interface IRepository {
  id: number;
  name: string;
  description: string;
}

const User: React.FC = () => {
  const { params } = useRouteMatch<IUserParamns>();
  const [user, setUser] = useState<IUser | null>(null);
  const [repositories, setRepositories] = useState<IRepository[]>([]);

  useEffect(() => {
    async function loadData(): Promise<void> {
      const [user, repos] = await Promise.all([
        api.get(`/users/${params.username}`),
        api.get(`/users/${params.username}/repos`),
      ]);

      setUser(user.data);
      setRepositories(repos.data);
    }

    loadData();
  }, [params.username]);

  return (
    <>
      <Header>
        <img src={logo} alt="GitHub Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      {user && (
        <UserInfo>
          <header>
            <img src={user?.avatar_url} alt={user?.login} />
            <div>
              <strong>{user?.login}</strong>
              <p>{user?.bio}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{user?.public_repos}</strong>
              <span>Repos</span>
            </li>
            <li>
              <strong>{user?.followers}</strong>
              <span>Followers</span>
            </li>
            <li>
              <strong>{user?.following}</strong>
              <span>Following</span>
            </li>
          </ul>
        </UserInfo>
      )}

      <Repositories>
        {repositories.map(repo => (
          <Link to="aaaa" key={repo?.id}>
            <div>
              <strong>{repo?.name}</strong>
              <p>{repo?.description}</p>
            </div>
            <FiChevronRight size={20} />
          </Link>
        ))}
      </Repositories>
    </>
  );
};

export default User;
