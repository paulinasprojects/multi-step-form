import { FormProvider } from "./context/form-context"
import { Layout } from "./layouts/layout"
import { AddressPage } from "./pages/address-page"
import { NotFoundPage } from "./pages/not-found-page"
import { PersonalInfoPage } from "./pages/personal-info-page"
import { PreferencesPage } from "./pages/preferences-page"
import { SummaryPage } from "./pages/summary-page"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const routes = [
  {
    path: "/",
    element: <Layout/>,
    errorElement: <NotFoundPage/>,
    children: [
      {
        path: "/",
        element: <PersonalInfoPage/>
      },
      {
        path: "/address",
        element: <AddressPage/>
      },
      {
        path: "/preferences",
        element: <PreferencesPage/>
      },
      {
        path: "/summary",
        element: <SummaryPage/>
      },
    ]
  },
]

const router = createBrowserRouter(routes)

export default function App() {
  return (
    <FormProvider>
      <RouterProvider router={router}/>
    </FormProvider>
  )
}