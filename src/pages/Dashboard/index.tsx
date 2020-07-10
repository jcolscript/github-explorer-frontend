import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logo from '../../assets/images/logo.svg';

import { Title, Form, Users } from './styles';

const Dashboard: React.FC = () => (
  <>
    <img src={logo} alt="GitHub Explorer" />
    <Title>Explore repositórios no Github.</Title>
    <Form>
      <input type="text" placeholder="Digite aqui o username" />
      <button type="submit">Pesquisar</button>
    </Form>
    <Users>
      <a href="#">
        <img
          src="https://avatars2.githubusercontent.com/u/30646629?s=460&u=18b54427adec2bc4d9e7b06f088fc6881d4fdb9a&v=4"
          alt=""
        />
        <div>
          <strong>jcolscript</strong>
          <p>
            I believe that technologies come and go, so I'm really passionate
            about learning new frameworks, languages ​​and paradigms.
          </p>
        </div>
        <FiChevronRight size={20} />
      </a>
      <a href="#">
        <img
          src="https://avatars2.githubusercontent.com/u/30646629?s=460&u=18b54427adec2bc4d9e7b06f088fc6881d4fdb9a&v=4"
          alt=""
        />
        <div>
          <strong>jcolscript</strong>
          <p>
            I believe that technologies come and go, so I'm really passionate
            about learning new frameworks, languages ​​and paradigms.
          </p>
        </div>
        <FiChevronRight size={20} />
      </a>
      <a href="#">
        <img
          src="https://avatars2.githubusercontent.com/u/30646629?s=460&u=18b54427adec2bc4d9e7b06f088fc6881d4fdb9a&v=4"
          alt=""
        />
        <div>
          <strong>jcolscript</strong>
          <p>
            I believe that technologies come and go, so I'm really passionate
            about learning new frameworks, languages ​​and paradigms.
          </p>
        </div>
        <FiChevronRight size={20} />
      </a>
      <a href="#">
        <img
          src="https://avatars2.githubusercontent.com/u/30646629?s=460&u=18b54427adec2bc4d9e7b06f088fc6881d4fdb9a&v=4"
          alt=""
        />
        <div>
          <strong>jcolscript</strong>
          <p>
            I believe that technologies come and go, so I'm really passionate
            about learning new frameworks, languages ​​and paradigms.
          </p>
        </div>
        <FiChevronRight size={20} />
      </a>
    </Users>
  </>
);

export default Dashboard;
