import { toast, Toaster } from "react-hot-toast";
import { ChangeEvent, useEffect } from "react";
import { FormTheme } from "../../components/FormTheme";
import { useHistory } from "react-router-dom";
import { useForm, FormActions } from "../../contexts/FormContext";
import * as C from "./styles";

export function FormStep1() {
  const history = useHistory();
  const { state, dispatch } = useForm();

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 1,
    });
  }, []);

  const formatName = (value: string) => {
    return value
      .toLowerCase()
      .split(" ")
      .map((Word) => Word.charAt(0).toUpperCase() + Word.slice(1))
      .join(" ");
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setName,
      payload: formatName(e.target.value),
    });
  };

  const handleNextStep = () => {
    if (state.name.trim() !== "") {
      history.push("/step2");
    } else {
      toast.error("Por favor, preencha todos os campos!", {
        duration: 3000,
      });
    }
  };

  return (
    <FormTheme>
      <C.Container>
        <p>Passo {state.currentStep}/3</p>
        <h1>Vamos começar com o seu nome</h1>
        <p>Preencha o campo abaixo com o seu nome completo.</p>
        <hr />

        <label htmlFor="inputName">
          Seu nome completo
          <input
            type="text"
            id="inputName"
            value={state.name}
            autoFocus
            onChange={handleNameChange}
          />
        </label>

        <button onClick={handleNextStep}>Próximo</button>
      </C.Container>

      <Toaster />
    </FormTheme>
  );
}
