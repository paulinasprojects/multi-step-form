import { FormData, FormAction } from "../types/types";

export const initialFormState: FormData = {
  personalInfo: {
    firstName: "",
    lastName: "",
    email: "",
  },
  addressInfo: {
    street: "",
    city: "",
    zipCode: "",
  },
  preferences: {
    newsletter: false,
    notifications: true,
    theme: "dark",
  },
};

export function formReducer(state: FormData, action: FormAction) {
  switch (action.type) {
    case "UPDATE_PERSONAL_INFO":
      return {
        ...state,
        personalInfo: {
          ...state.personalInfo,
          ...action.payload,
        },
      };

    case "UPDATE_ADDRESS_INFO":
      return {
        ...state,
        addressInfo: {
          ...state.addressInfo,
          ...action.payload,
        },
      };

    case "UPDATE_PREFERENCES":
      return {
        ...state,
        preferences: {
          ...state.preferences,
          ...action.payload,
        },
      };

    case "RESET_FORM":
      return initialFormState;

    default:
      return state;
  }
}
