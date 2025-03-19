import { CheckCircle2, CircleIcon } from "lucide-react";
import { useLocation } from "react-router-dom";

const steps = [
  {
    path: "/",
    label:"Personal"
  },
  {
    path: "/address",
    label:"Address"
  },
  {
    path: "/preferences",
    label:"Preferences"
  },
  {
    path: "/summary",
    label:"Summary"
  },
]

export const ProgressIndicator = () => {
  const location = useLocation();
  const currentStepIndex = steps.findIndex((step) => step.path === location.pathname)

  return (
   <section className="grid grid-cols-2 gap-x-8 gap-y-4 place-items-center sm:grid-cols-4 sm:justify-items-start">
    {steps.map((step, index) => (
      <div key={step.label} className="relative flex">
        <figure className={`flex flex-col items-center rounded-full p-1 ${
          index < currentStepIndex ? "text-green-500" :
          index === currentStepIndex ? "text-[#fff]" : "text-slate-500"}`}
        >
          { index  <  currentStepIndex ? <CheckCircle2 className="size-8"/> :  <CircleIcon className="size-8"/> }

          <figcaption>{step.label}</figcaption>
        </figure>
        {
          index < steps.length - 1 && 
          <div className={`absolute h-1 sm:w-8 bottom-4 -right-16 rounded-sm ${
          index < currentStepIndex ? "bg-greentext-green-500" :
          index === currentStepIndex ? "bg-[#fff]" : "bg-slate-text-slate-500"}`}/>
        }
      </div>
    ))}
   </section>
  )
}
