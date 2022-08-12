import styled from 'styled-components';

export const PaymentContainer = styled.form`
  padding: 10px 50px 100px 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 2px solid black;

  p {
    width: 100%;
    text-align: left;
    padding-bottom: 10px;
    font-family: 'Orbitron',sans-serif;
    font-size: 18px;
  }

  .credit-card {
    width: 100%;
  }

  button {
        border-radius: 0px;
        background-color: #181818;
        color: floralwhite;
        border: 2px solid #181818;
        padding: 7px 12px;
        transition: none;

        &:hover{
          color: #181818;
          background-color: floralwhite;
          transition: all 200ms ease-in;
        }
      }
`;
