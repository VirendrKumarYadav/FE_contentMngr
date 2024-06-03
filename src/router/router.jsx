import {createBrowserRouter} from "react-router-dom"
import ErrorPage from "../ErrorPage"
import Dashboard from "../componants/dashboard/Dashboard"
import Cart from "../componants/Cart/Cart"

  const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard/>,
        errorElement: <ErrorPage />,
      },
      {
        path: "/error",
        element: <ErrorPage />,
      },
      {
        path: "/cart",
        element: <Cart />,
      }
   
])


export default router