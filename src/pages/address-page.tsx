import { useReducer } from "react";
import { useNavigate } from "react-router-dom";

interface FormData {
  addressInfo: {
    street: string;
    city: string;
    zipCode: string;
  }
}

interface FormAction {
  type: "UPDATE_ADDRESS_INFO",
  payload: Partial<FormData["addressInfo"]>
}

const initialAddressInfoState: FormData["addressInfo"] = {
  street: "",
  city: "",
  zipCode: "",
};

export const AddressPage = () => {
  const [state, dispatch] = useReducer(addressInfoReducer, initialAddressInfoState);
 const navigate = useNavigate();


 function addressInfoReducer(state = initialAddressInfoState, action: FormAction) {
  return {...state, ...action.payload}
}

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
          className="border-l border-[#ffeb00] focus:bg-[#ffeb00] outline-none p-2 focus:rounded-sm focus:text-[#2A004E] text-[#ffeb00] font-bold" 
          type="text" 
          id="street" 
          required
          value={state.street}
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
          className="border-l border-[#ffeb00] focus:bg-[#ffeb00] outline-none p-2 focus:rounded-sm focus:text-[#2A004E] text-[#ffeb00] font-bold" 
          type="text" 
          id="city" 
          required
          value={state.city}
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
          className="border-l border-[#ffeb00] focus:bg-[#ffeb00] outline-none p-2 focus:rounded-sm focus:text-[#2A004E] text-[#ffeb00] font-bold" 
          type="text" 
          id="zip" 
          value={state.zipCode}
          onChange={(e) => dispatch({
            type: "UPDATE_ADDRESS_INFO",
            payload: { zipCode: e.target.value }
          })}
          required
        />
      </div>
      <div className="flex *:basis-1/2 gap-4">
      <button 
        className="p-2 border border-[#ffeb00] rounded-sm transition-colors hover:bg-[#ffeb00] hover:text-[#2A004E]" 
        onClick={() => navigate("/")}>
        Back
      </button>
      <button 
        className="p-2 border border-[#ffeb00] rounded-sm transition-colors hover:bg-[#ffeb00] hover:text-[#2A004E]" 
        type="submit">
        Next
      </button>

      </div>
  </form>
  )
}
