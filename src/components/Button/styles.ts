import styled, { css } from 'styled-components';

export const Btn = styled.button<{ btnType: string }>`
  display: grid;
  place-items: center;
  font-size: 1rem;
  text-transform: uppercase;
  width: 100px;
  font-weight: bold;
  padding: 10px;
  border-radius: 2.5px;
  transition: opacity .2s ease-in;
  opacity: 1;
  width: auto;
  color: white;

  ${({ btnType }) => {
    switch (btnType) {
      case 'primary':
        return css`
          background-color: var(--blue);
        `;
      case 'secundary':
        return css`
          color: var(--black);
          background-color: lightgray;
        `;
      case 'danger':
        return css`
          background-color: tomato;
        `;
      default:
        return css`
          background-color: var(--green);
        `;
    }
  }}

  &:hover {
    opacity: .9;
  }

`;
