import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  font-size: 48px;
  color: #ffffff;
  max-width: 433px;
  margin-top: 80px;
  line-height: 56px;
`;

export const Form = styled.form`
  margin-top: 40px;
  max-width: 714px;
  display: flex;

  input {
    flex: 1;
    height: 72px;
    border: 0;
    padding: 0 24px;
    border-radius: 5px 0 0 5px;
    font-weight: 100;
    color: #3a3a3a;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 72px;
    background: #5063f0;
    border-radius: 0px 5px 5px 0px;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#5063f0')};
    }
  }
`;

export const Users = styled.div`
  margin-top: 80px;
  max-width: 714px;

  a {
    background: #2c2e43;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 16px;
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin-left: 16px;

      strong {
        font-size: 20px;
        color: #ffffff;
      }

      p {
        font-size: 18px;
        color: #e0e0e0;
        margin-top: 4px;
        white-space: nowrap;
        width: 30em;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
