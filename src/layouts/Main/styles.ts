import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100%;

  main {
    flex: 1;
    padding: 50px;
  }
`;

export const Sidebar = styled.div`
  height: 100vh;
  width: 20%;
  background-color: var(--green);
  display: flex;
  flex-direction: column;
  padding: 50px 20px;
  justify-content: space-between;
  align-items: flex-start;

  h2 {
    color: white;
  }

  nav {
    margin-top: -100px;
    width: 100%;

    a {
      display: block;
      padding: 5px 0;
      margin: 5px 0;
      font-size: 1.8rem;
      font-weight: bold;
      color: var(--black);
      transition: color .2s ease-in;

      &:hover {
        color: black;
      }
    }
  }

  footer {
    justify-self: flex-end;

    small {
      color: var(--black);
      font-size: 1.4rem;
    }
  }
`;
