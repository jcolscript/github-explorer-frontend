import React from 'react';
import { useRouteMatch } from 'react-router-dom';

interface IUserParamns {
  username: string;
}

const User: React.FC = () => {
  const { params } = useRouteMatch<IUserParamns>();

  return <h1>User: {params.username}</h1>;
};

export default User;
