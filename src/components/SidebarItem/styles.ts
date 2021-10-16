import styled from "styled-components";

export const Container = styled.div`
  margin: 30px 0;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }

  // Link
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
  }
`;

export const Info = styled.div`
  flex: 1;
  margin-right: 20px;
`;

export const Title = styled.div`
  text-align: right;
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 17px;
  color: var(--purple);
`;

export const Description = styled.div<{ active: boolean }>`
  text-align: right;
  font-size: 16px;
  color: ${(props) =>
    props.active ? "var(--light-brown)" : "var(--light-gray)"};
`;

export const IconArea = styled.div<{ active: boolean }>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.active ? "var(--light-brown)" : "var(--purple)"};
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--light);
`;

export const Point = styled.div<{ active: boolean }>`
  width: 15px;
  height: 15px;
  border: 3px solid
    ${(props) => (props.active ? "var(--light-brown)" : "var(--purple)")};
  border-radius: 50%;
  margin-left: 30px;
  margin-right: -8px;
  background-color: var(--light);
`;
