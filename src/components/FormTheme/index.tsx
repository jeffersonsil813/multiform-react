import { ReactNode } from "react";
import { FaRegAddressBook, FaUserCircle } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

import { Header } from "../Header";
import { SidebarItem } from "../SidebarItem";
import { useForm } from "../../contexts/FormContext";

import * as C from "./styles";

type Props = {
  children: ReactNode;
};

export function FormTheme({ children }: Props) {
  const { state } = useForm();

  return (
    <C.Container>
      <C.Area>
        <Header />
        <C.Steps>
          <C.Sidebar>
            <SidebarItem
              title="Pessoal"
              description="Se identifique"
              icon={<FaUserCircle size="25" />}
              path="/"
              active={state.currentStep === 1}
            />
            <SidebarItem
              title="Profissional"
              description="Seu nível"
              icon={<FaRegAddressBook size="25" />}
              path="/step2"
              active={state.currentStep === 2}
            />
            <SidebarItem
              title="Contatos"
              description="Como te achar"
              icon={<HiOutlineMail size="25" />}
              path="/step3"
              active={state.currentStep === 3}
            />
          </C.Sidebar>
          <C.Page>{children}</C.Page>
        </C.Steps>
      </C.Area>
    </C.Container>
  );
}
