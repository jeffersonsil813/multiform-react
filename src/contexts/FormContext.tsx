import { createContext, ReactNode, useContext, useReducer } from "react";

type Action = {
  type: FormActions;
  payload: any;
};

type ContextType = {
  state: Data;
  dispatch: (action: Action) => void;
};

type FormProviderProps = {
  children: ReactNode;
};

// Tipagem dos dados
type Data = {
  currentStep: number;
  name: string;
  level: 0 | 1;
  email: string;
  github: string;
};

const initialData: Data = {
  currentStep: 0,
  name: "",
  level: 0,
  email: "",
  github: "",
};

// Context
const FormContext = createContext<ContextType | undefined>(undefined);

// Reducer (é quem vai executar o que se pede)

export enum FormActions {
  setCurrentStep,
  setName,
  setLevel,
  setEmail,
  setGithub,
}

const FormReducer = (data: Data, action: Action) => {
  switch (action.type) {
    case FormActions.setCurrentStep:
      // action.payload é o novo valor
      return { ...data, currentStep: action.payload };
    case FormActions.setName:
      return { ...data, name: action.payload };
    case FormActions.setLevel:
      return { ...data, level: action.payload };
    case FormActions.setEmail:
      return { ...data, email: action.payload };
    case FormActions.setGithub:
      return { ...data, github: action.payload };
    default:
      return data;
  }
};

// Provider
export const FormProvider = ({ children }: FormProviderProps) => {
  // state são os dados do initialData e o dispatch é uma função que é usada para chamar as funções do FormActions
  const [state, dispatch] = useReducer(FormReducer, initialData);
  const value = { state, dispatch };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

// Context Hook
export const useForm = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error("useForm precisa ser usado dentro do FormProvider");
  }
  return context;
};
