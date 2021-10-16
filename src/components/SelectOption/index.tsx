import { ReactElement } from "react";
import * as C from "./styles";

type Props = {
  title: string;
  description: string;
  icon: ReactElement;
  selected: boolean;
  onClick: () => void;
};

export function SelectOption({
  title,
  description,
  icon,
  selected,
  onClick,
}: Props) {
  return (
    <C.Container selected={selected} onClick={onClick}>
      <C.DivIcon id="DivIcon">{icon}</C.DivIcon>
      <C.Info>
        <C.Title>{title}</C.Title>
        <C.Description>{description}</C.Description>
      </C.Info>
    </C.Container>
  );
}
