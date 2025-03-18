import { useReducer } from "react";
import { useNavigate } from "react-router-dom";


interface FormData {
  preferences: {
    newsletter: boolean;
    notifications: boolean;
    theme: "light" | "dark";
  }
}

interface FormAction {
  type: "UPDATE_PREFERENCES",
  payload: Partial<FormData["preferences"]>
}

const initialPreferencesState: FormData["preferences"] = {
  newsletter: false,
  notifications: true,
  theme: "dark",
};

export const PreferencesPage = () => {

  const [state, dispatch] = useReducer(addressInfoReducer, initialPreferencesState);
  const navigate = useNavigate();
 
 
  function addressInfoReducer(state = initialPreferencesState, action: FormAction) {
   return {...state, ...action.payload}
 }
 
 function nextPage (e: React.FormEvent) {
   e.preventDefault();
   navigate("/summary");
 }

  return (
    <form onSubmit={nextPage} className="flex flex-col gap-8">
    <h1 className="text-4xl font-bold">Preferences</h1>
    <div className="flex gap-2 items-center">
      <label 
        className="font-bold order-1 cursor-pointer" 
        htmlFor="newsletter">
          Newsletter
      </label>
      <input 
        className="appearance-none size-4 bg-[#fff] hover:bg-slate-300 rounded-full checked:bg-green-500 duration-75 cursor-pointer" 
        type="checkbox" 
        id="newsletter"
        checked={state.newsletter}
        onChange={(e) => dispatch({
          type: "UPDATE_PREFERENCES",
          payload: { newsletter: e.target.checked }
        })}
      />
    </div>

    <div className="flex items-center gap-2">
      <label 
        className="order-1 font-bold cursor-pointer" 
        htmlFor="notifications">
          Notifications
      </label>
      <input 
        className="appearance-none size-4 bg-[#fff] hover:bg-slate-300 rounded-full checked:bg-green-500 duration-75 cursor-pointer" 
        type="checkbox" 
        id="notifications"
        checked={state.notifications}
        onChange={(e) => dispatch({
          type: "UPDATE_PREFERENCES",
          payload: { notifications: e.target.checked }
        })}
      />
    </div>

    <div className="flex flex-col gap-2">
      <label htmlFor="theme" className="font-bold">Theme Preferences</label>
      <div className="flex items-center gap-2">
        <input 
          className="appearance-none size-4 bg-[#fff] hover:bg-slate-300 rounded-full checked:bg-green-500 duration-75 cursor-pointer" 
          type="radio" 
          id="theme" 
          value="light"
          checked={state.theme === "light"}
          onChange={(e) => dispatch({
            type: "UPDATE_PREFERENCES",
            payload: { theme: e.target.value as "light" | "dark"}
          })}
        />
        <span className="font-bold">Light</span>
      </div>

      <div className="flex items-center gap-2">
        <input 
          className="appearance-none size-4 bg-[#fff] hover:bg-slate-300 rounded-full checked:bg-green-500 duration-75 cursor-pointer" 
          type="radio" 
          id="theme" 
          value="dark"
          checked={state.theme === "dark"}
          onChange={(e) => dispatch({
            type: "UPDATE_PREFERENCES",
            payload: { theme: e.target.value as "light" | "dark" }
          })}
        />
        <span className="font-bold">Dark</span>
      </div>

    </div>

    <div className="flex *:basis-1/2 gap-4">
    <button 
      className="p-2 border border-[#fff] rounded-sm transition-colors hover:bg-[#fff] hover:text-[#2A004E]" 
      onClick={() => navigate("/address")}>
      Back
    </button>
    <button 
      className="p-2 border border-[#fff] rounded-sm transition-colors hover:bg-[#fff] hover:text-[#2A004E]" 
      type="submit">
      Next
    </button>

    </div>
  </form>
  )
}
