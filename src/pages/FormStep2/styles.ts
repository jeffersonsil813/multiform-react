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

  button {
    background-color: var(--purple);
    color: var(--light);
    font-size: 15px;
    outline: none;
    border: 0;
    border-radius: 9999px;
    text-align: center;
    padding: 15px 50px;
    font-weight: bold;
    margin: 30px 0;
    cursor: pointer;

    &:hover {
      filter: brightness(0.9);
    }
  }

  .backButton {
    font-size: 16px;
    text-decoration: none;
    padding: 15px 50px;
    color: var(--light-brown);

    &:hover {
      color: var(--purple);
    }
  }
`;
