import { createBrowserRouter, useNavigate } from "react-router-dom";
import Browse from './Browse'
import Login from './login'
import { RouterProvider } from "react-router-dom";

const Body = () => {
    

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element :<Login />,
        },
        {
            path: "/browse",
            element :<Browse />,
        }

    ]);

   

  return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body