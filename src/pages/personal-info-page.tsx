import { useReducer } from "react";
import { useNavigate } from "react-router-dom";

interface FormData {
  personalInfo: {
    firstName: string;
    lastName: string;
    email: string;
  }
}

interface FormAction {
  type: "UPDATE_PERSONAL_INFO",
  payload: Partial<FormData["personalInfo"]>
}

const initialPersonalInfoState: FormData["personalInfo"] = {
  firstName: "",
  lastName: "",
  email: "",
};

export const PersonalInfoPage = () => {
  const [state, dispatch] = useReducer(personalInfoReducer, initialPersonalInfoState);

 const navigate = useNavigate()

  function personalInfoReducer(state = initialPersonalInfoState, action: FormAction) {
    return {...state, ...action.payload}
  }

  function nextPage(e: React.FormEvent) {
    e.preventDefault();
    navigate("/address");
  }

  return (
    <form onSubmit={nextPage} className="flex flex-col gap-8">
      <h1 className="text-4xl font-bold">Personal Information</h1>
      <div className="flex flex-col gap-y-2">
        <label 
          className="font-bold" 
          htmlFor="firstname">
            First Name
        </label>
        <input 
          className="border-l border-[#ffeb00] focus:bg-[#ffeb00] outline-none p-2 focus:rounded-sm focus:text-[#2A004E] text-[#ffeb00] font-bold" 
          type="text" 
          id="firstname" 
          required
          value={state.firstName}
          onChange={(e) => dispatch({
            type: "UPDATE_PERSONAL_INFO",
            payload: { firstName: e.target.value }
          })}
         />
      </div>
      <div className="flex flex-col gap-y-2">
        <label 
          htmlFor="lastname" 
          className="font-bold">
            Last Name
        </label>
        <input 
          className="border-l border-[#ffeb00] focus:bg-[#ffeb00] outline-none p-2 focus:rounded-sm focus:text-[#2A004E] text-[#ffeb00] font-bold" 
          type="text" 
          id="lastname" 
          required
          value={state.lastName}
          onChange={(e) => dispatch({
            type: "UPDATE_PERSONAL_INFO",
            payload: { lastName: e.target.value }
          })}
        />
      </div>
      <div className="flex flex-col gap-y-2">
        <label 
          htmlFor="email" 
          className="font-bold">
            Email
        </label>
        <input 
          className="border-l border-[#ffeb00] focus:bg-[#ffeb00] outline-none p-2 focus:rounded-sm focus:text-[#2A004E] text-[#ffeb00] font-bold" 
          type="email" 
          id="email" 
          value={state.email}
          onChange={(e) => dispatch({
            type: "UPDATE_PERSONAL_INFO",
            payload: { email: e.target.value }
          })}
          required
         />
      </div>
      <button 
        className="p-2 border border-[#ffeb00] rounded-sm transition-colors hover:bg-[#ffeb00] hover:text-[#2A004E]" 
        type="submit">
        Next
      </button>
    </form>
  )
}
