import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  main {
    flex: 1;
    padding: 50px;
    height: 100vh;
    overflow-x: scroll;
    scrollbar-width: none;
  }

  footer {
    width: 100%;
    padding: 50px;
    text-align: center;

    small {
      font-size: 1.4rem;
    }
  }
`;

export const Navbar = styled.div`
  width: 100%;
  text-align: center;
  background-color: var(--green);
  padding: 20px;
  h2 {
    color: white;
  }
`;
