import { useNavigate } from "react-router-dom";
import { useFormContext } from "../context/form-context";
import { toast } from "sonner";
import { CheckCircle } from "lucide-react";

export const SummaryPage = () => {
    const { state, dispatch } = useFormContext();
    const navigate = useNavigate();

    const handleSubmit = () => {
      dispatch({ type: "RESET_FORM" })
      toast.success("Form submitted successfully");
      navigate("/")
    }

  return (
    <section className="flex flex-col gap-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Personal Information</h2>
        <div className="grid gap-2 sm:grid-cols-2">
          <p>{state.personalInfo.firstName}</p>
          <p>{state.personalInfo.lastName}</p>
          <p>{state.personalInfo.email}</p>
        </div>
      </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Address</h2>
          <div className="grid gap-2 sm:grid-cols-2">
            <p>{state.addressInfo.street}</p>
            <p>{state.addressInfo.city}</p>
            <p>{state.addressInfo.zipCode}</p>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Preferences</h2>
          {state.preferences.newsletter || state.preferences.notifications ? (
            <>
              {
                state.preferences.newsletter && (
                  <p className="flex items-center gap-x-2">
                    <CheckCircle className="size-5 text-white"/>
                    Newsletter Subscription.
                  </p>
                )
              }
              {state.preferences.notifications && (
                <p className="flex items-center gap-x-2">
                  <CheckCircle className="size-5 text-white"/>
                  Notifications Enabled
                </p>
              )}
            </>
          ): (
            <p className="text-white">
              No preferences
            </p>
          )}
        </div>
        <div>
          <h2 className="text-2xl font-bold">Theme Preferences</h2>
          <span className="block capitalize text-base font-normal mt-4">{state.preferences.theme}</span>
        </div>

        <div className="flex *:basis-1/2 gap-4">
          <button 
            className="p-2 border border-[#fff] rounded-sm transition-colors hover:bg-[#fff] hover:text-[#2A004E]" 
            onClick={() => navigate("/preferences")}
            type="button"
            >
            Back
          </button>
          <button 
            className="p-2 border border-[#fff] rounded-sm transition-colors hover:bg-[#fff] hover:text-[#2A004E]" 
            onClick={handleSubmit}
            >
            Submit
          </button>
      </div>
    </section>
  )
}
