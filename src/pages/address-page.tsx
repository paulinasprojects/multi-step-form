import { useNavigate } from "react-router-dom";
import { useFormContext } from "../context/form-context";

export const AddressPage = () => {
    const { state, dispatch } = useFormContext();
  const navigate = useNavigate();

function nextPage(e: React.FormEvent) {
  e.preventDefault();
  navigate("/preferences");
}

  return (
    <form onSubmit={nextPage} className="flex flex-col gap-8">
      <h1 className="text-4xl font-bold">Address Details</h1>
      <div className="flex flex-col gap-y-2">
        <label 
          className="font-bold" 
          htmlFor="street">
            Street Address
        </label>
        <input 
          className="border-l border-[#fff] focus:bg-[#fff] outline-none p-2 focus:rounded-sm focus:text-[#2A004E] text-[#fff] font-bold" 
          type="text" 
          id="street" 
          required
          value={state.addressInfo.street}
          onChange={(e) => dispatch({
            type: "UPDATE_ADDRESS_INFO",
            payload: { street: e.target.value }
          })}
        />
      </div>
      <div className="flex flex-col gap-y-2">
        <label 
          htmlFor="city" 
          className="font-bold">
            City
        </label>
        <input 
          className="border-l border-[#fff] focus:bg-[#fff] outline-none p-2 focus:rounded-sm focus:text-[#2A004E] text-[#fff] font-bold" 
          type="text" 
          id="city" 
          required
          value={state.addressInfo.city}
          onChange={(e) => dispatch({
            type: "UPDATE_ADDRESS_INFO",
            payload: { city: e.target.value }
          })}
        />
      </div>
      <div className="flex flex-col gap-y-2">
        <label 
          htmlFor="zip" 
          className="font-bold">
            Zip Code
        </label>
        <input 
          className="border-l border-[#fff] focus:bg-[#fff] outline-none p-2 focus:rounded-sm focus:text-[#2A004E] text-[#fff] font-bold" 
          type="text" 
          id="zip" 
          value={state.addressInfo.zipCode}
          onChange={(e) => dispatch({
            type: "UPDATE_ADDRESS_INFO",
            payload: { zipCode: e.target.value }
          })}
          required
        />
      </div>
      <div className="flex *:basis-1/2 gap-4">
      <button 
        className="p-2 border border-[#fff] rounded-sm transition-colors hover:bg-[#fff] hover:text-[#2A004E]" 
        onClick={() => navigate("/")}
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
