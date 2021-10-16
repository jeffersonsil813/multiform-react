import styled from "styled-components";

export const Container = styled.div<{ selected: boolean }>`
  display: flex;
  border: 2px solid var(--purple);
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 15px;
  align-items: center;
  cursor: pointer;
  transition: all 0.1s;

  filter: ${(props) => (props.selected ? "brightness(0.9)" : "none")};
  background-color: ${(props) => (props.selected ? "var(--purple)" : "auto")};

  div {
    color: ${(props) => (props.selected ? "var(--light)" : "auto")};
  }

  #DivIcon {
    background-color: ${(props) => (props.selected ? "var(--light)" : "auto")};
    color: ${(props) => (props.selected ? "var(--purple)" : "auto")};
  }

  &:hover {
    filter: brightness(0.9);
    background-color: var(--purple);

    div {
      color: var(--light);
    }

    #DivIcon {
      background-color: var(--light);
      color: var(--purple);
    }
  }
`;

export const DivIcon = styled.div`
  color: var(--light);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: var(--purple);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Info = styled.div`
  flex: 1;
  margin-left: 20px;
`;

export const Title = styled.div`
  font-size: 17px;
  font-weight: bold;
  margin-bottom: 7px;
`;

export const Description = styled.div`
  font-size: 16px;
  color: var(--light-gray);
`;
