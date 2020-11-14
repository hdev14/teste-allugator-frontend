import styled from 'styled-components';

export const Container = styled.div`
  header {
    display: flex;
    justify-content: space-between;
  }

  div.white-container {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: white;
    border-radius: 3.5px;

    form {
      padding: 10px;
      display: flex;
      justify-content: flex-start;
      align-items: flex-end;

      input {
        margin-top: 5px;
        display: block;
        width: 300px;
        height: 36px;
        padding-left: 10px;
        margin-right: 5px;
      }
    }
  }
`;
