import React from 'react';

import logo from '../../assets/images/logo.svg';

import { Title } from './styles';

const Dashboard: React.FC = () => (
  <>
    <img src={logo} alt="logo" />
    <Title>Explore repositórios no Github.</Title>
  </>
);

export default Dashboard;
