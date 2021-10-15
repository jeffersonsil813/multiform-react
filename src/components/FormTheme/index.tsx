import * as C from "./styles";
import { Header } from "../Header";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function FormTheme({ children }: Props) {
  return (
    <C.Container>
      <C.Area>
        <Header />
        <C.Steps>
          <C.Sidebar>...</C.Sidebar>
          <C.Page>{children}</C.Page>
        </C.Steps>
      </C.Area>
    </C.Container>
  );
}
