import { useNavigate } from "react-router-dom";
import { useFormContext } from "../context/form-context";

export const PersonalInfoPage = () => {
  const { state, dispatch } = useFormContext();
  const navigate = useNavigate();

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
          className="border-l border-[#fff] focus:bg-[#fff] outline-none p-2 focus:rounded-sm focus:text-[#2A004E] text-[#fff] font-bold" 
          type="text" 
          id="firstname" 
          required
          value={state.personalInfo.firstName}
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
          className="border-l border-[#fff] focus:bg-[#fff] outline-none p-2 focus:rounded-sm focus:text-[#2A004E] text-[#fff] font-bold" 
          type="text" 
          id="lastname" 
          required
          value={state.personalInfo.lastName}
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
          className="border-l border-[#fff] focus:bg-[#fff] outline-none p-2 focus:rounded-sm focus:text-[#2A004E] text-[#fff] font-bold" 
          type="email" 
          id="email" 
          value={state.personalInfo.email}
          onChange={(e) => dispatch({
            type: "UPDATE_PERSONAL_INFO",
            payload: { email: e.target.value }
          })}
          required
         />
      </div>
      <button 
        className="p-2 border border-[#fff] rounded-sm transition-colors hover:bg-[#fff] hover:text-[#2A004E]" 
        type="submit">
        Next
      </button>
    </form>
  )
}
