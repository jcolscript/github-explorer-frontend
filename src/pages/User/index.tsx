import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logo from '../../assets/images/logo.svg';

import { Header, UserInfo, Repositories } from './styles';

interface IUserParamns {
  username: string;
}

const User: React.FC = () => {
  const { params } = useRouteMatch<IUserParamns>();

  return (
    <>
      <Header>
        <img src={logo} alt="GitHub Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <UserInfo>
        <header>
          <img
            src="https://avatars0.githubusercontent.com/u/30646629?v=4"
            alt="José Carlos"
          />
          <div>
            <strong>jcolscript</strong>
            <p>descricao do user</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <span>Repos</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Followers</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Following</span>
          </li>
        </ul>
      </UserInfo>

      <Repositories>
        <Link to="aaaaaaa" key="bbb">
          <div>
            <strong>aaaaaaaaaa</strong>
            <p>aaaaaaa</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Repositories>
    </>
  );
};

export default User;
