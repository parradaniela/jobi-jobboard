//router imports
import { RouterProvider } from "react-router-dom";
//context import
import DatabaseProvider from "./context/DatabaseContext";
import { router } from "./router/router";

function App() {

  return (
    <DatabaseProvider>
      <RouterProvider router={router} />
    </DatabaseProvider>
  )
}

export default App
