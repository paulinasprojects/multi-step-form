import { useNavigate } from "react-router-dom";
import { useFormContext } from "../context/form-context";

export const PreferencesPage = () => {
  const { state, dispatch } = useFormContext();
  const navigate = useNavigate();
 
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
        checked={state.preferences.newsletter}
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
        checked={state.preferences.notifications}
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
          checked={state.preferences.theme === "light"}
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
          checked={state.preferences.theme === "dark"}
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
      onClick={() => navigate("/address")}
      type="button"
      >
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
