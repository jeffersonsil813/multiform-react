import { toast, Toaster } from "react-hot-toast";
import { ChangeEvent, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { BiUserCircle, FaGithub, HiOutlineMail } from "react-icons/all";

import { FormTheme } from "../../components/FormTheme";
import { useForm, FormActions } from "../../contexts/FormContext";

import * as C from "./styles";

export function FormStep3() {
  const history = useHistory();
  const { state, dispatch } = useForm();

  useEffect(() => {
    if (state.name.trim() === "") {
      history.push("/");
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 3,
      });
    }
  }, []);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setEmail,
      payload: e.target.value,
    });
  };

  const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setGithub,
      payload: e.target.value,
    });
  };

  const handleNextStep = () => {
    if (state.email.trim() !== "" && state.github.trim() !== "") {
      toast(
        () => (
          <C.DivSpan>
            <C.Span>
              <BiUserCircle size="25" /> <C.SpanTitle>{state.name}</C.SpanTitle>
            </C.Span>
            <C.Span>
              <HiOutlineMail size="25" />{" "}
              <C.SpanTitle>{state.email}</C.SpanTitle>
            </C.Span>
            <C.Span>
              <FaGithub size="25" /> <C.SpanTitle>{state.github}</C.SpanTitle>
            </C.Span>
          </C.DivSpan>
        ),
        {
          duration: 3000,
        }
      );
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
        <h1>Legal {state.name}, onde te achamos?</h1>
        <p>Preencha os campos abaixo para entrarmos em contanto com você.</p>
        <hr />

        <label htmlFor="inputEmail">
          Qual seu e-mail?
          <input
            type="email"
            id="inputEmail"
            value={state.email}
            onChange={handleEmailChange}
          />
        </label>

        <label htmlFor="inputGithub">
          Qual seu GitHub?
          <input
            type="url"
            id="inputGithub"
            value={state.github}
            onChange={handleGithubChange}
          />
        </label>

        <Link to="/step2" className="backButton">
          Voltar
        </Link>
        <button onClick={handleNextStep}>Finalizar Cadastro</button>
      </C.Container>

      <Toaster />
    </FormTheme>
  );
}
