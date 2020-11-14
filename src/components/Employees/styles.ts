import styled from 'styled-components';

export const Container = styled.div`
  table {
    margin-top: 20px;
    font-size: 1.4rem;
    width: 100%;
    border-collapse: collapse;

    tr:nth-child(even) {
      background-color: #f2f2f2;
    }

    tr {
      td, th {
        text-align: center;
        padding: 10px;
      }

      th {
        text-transform: uppercase;
      }

      td.options {
        display: flex;
        button + button {
          margin-left: 10px;
        }
      }
    }
  }
`;
