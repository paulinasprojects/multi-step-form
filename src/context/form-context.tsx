/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer } from "react";
import { formReducer, initialFormState } from "../reducers/form-reducer";
import { FormAction, FormData } from "../types/types";

interface FormContextType {
  state: FormData;
  dispatch: React.Dispatch<FormAction>;
}


const FormContext = createContext<FormContextType | undefined>(undefined);

export function FormProvider({ children }: {children: React.ReactNode}) {
  const [state, dispatch] = useReducer(formReducer, initialFormState);

  return (
    <FormContext.Provider value={{state, dispatch}}>
      {children}
    </FormContext.Provider>
  )
}

export function useFormContext() {
  const context = useContext(FormContext);

  if (context === undefined) {
    throw new Error("Something went wrong. Pleae try again.")
  }

  return context;
}