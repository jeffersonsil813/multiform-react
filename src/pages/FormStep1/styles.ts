import styled from "styled-components";

export const Container = styled.div`
  @media (max-width: 1200px) {
    width: 80%;
  }

  p {
    font-size: 16px;
    color: var(--light-gray);
    margin: 0 0 14px;
  }

  h1 {
    margin: 0 0 5px;
    padding: 0;
    font-size: 26px;
  }

  hr {
    height: 1px;
    border: 0;
    background-color: var(--purple);
    margin: 30px 0;
  }

  label {
    font-size: 16px;

    input {
      display: block;
      margin-top: 7px;
      width: 100%;
      padding: 5px 15px;
      height: 50px;
      outline: none;
      border: solid 2px var(--purple);
      border-radius: 10px;
      font-size: 15px;
    }
  }

  button {
    background-color: var(--purple);
    color: var(--light);
    font-size: 15px;
    height: 45px;
    outline: none;
    border: 0;
    border-radius: 9999px;
    text-align: center;
    padding: 20px 50px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px 0;
    cursor: pointer;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
