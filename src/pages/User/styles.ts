import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #e3e3e3;
    transition: color 0.2s;

    &:hover {
      color: #a8a8b3;
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const UserInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 36px;
        color: #ffffff;
      }

      p {
        font-size: 18px;
        color: #e0e0e0;
        margin-top: 4px;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {
      & + li {
        margin-left: 80px;
      }

      strong {
        display: block;
        font-size: 36px;
        color: #ffffff;
      }

      span {
        display: block;
        color: #e0e0e0;
        margin-top: 4px;
      }
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 80px;

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
