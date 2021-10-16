import { toast, Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { FaCode, FaRunning } from "react-icons/all";

import { useForm, FormActions } from "../../contexts/FormContext";
import { FormTheme } from "../../components/FormTheme";
import { SelectOption } from "../../components/SelectOption";
import * as C from "./styles";

export function FormStep2() {
  const history = useHistory();
  const { state, dispatch } = useForm();

  useEffect(() => {
    if (state.name.trim() === "") {
      history.push("/");
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 2,
      });
    }
  }, []);

  const handleNextStep = () => {
    if (state.name.trim() !== "") {
      history.push("/step3");
    } else {
      toast.error("Por favor, selecione um nível!", {
        duration: 3000,
      });
    }
  };

  const setLevel = (level: number) => {
    dispatch({
      type: FormActions.setLevel,
      payload: level,
    });
  };

  return (
    <FormTheme>
      <C.Container>
        <p>Passo {state.currentStep}/3</p>
        <h1>{state.name}, o que melhor descreve você?</h1>
        <p>Escolha a opção que melhor descreve seu nível profissional.</p>
        <hr />

        <SelectOption
          title="Sou iniciante"
          description="Comecei a programar há menos de 2 anos."
          icon={<FaRunning size="27" />}
          selected={state.level === 0}
          onClick={() => setLevel(0)}
        />

        <SelectOption
          title="Sou programador"
          description="Já programo há 2 anos ou mais."
          icon={<FaCode size="27" />}
          selected={state.level === 1}
          onClick={() => setLevel(1)}
        />

        <Link to="/" className="backButton">
          Voltar
        </Link>
        <button onClick={handleNextStep}>Próximo</button>
      </C.Container>

      <Toaster />
    </FormTheme>
  );
}
