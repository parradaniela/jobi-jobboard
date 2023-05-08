//router imports
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
//context import
import DatabaseProvider from "./context/DatabaseContext";
//layout imports
import ErrorLayout from "./layouts/ErrorLayout";
import JobsLayout from "./layouts/JobsLayout";
import RootLayout from "./layouts/RootLayout";
//component imports
import WIP from "./views/Error/WIP";
import Home from "./views/Home/Home";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="jobs" element={<JobsLayout />} >
          <Route path="wip" element={<WIP />} />
        </Route>
        <Route path="*" element={<ErrorLayout />} />
      </>
    )
  )
  return (
    <DatabaseProvider>
      <RouterProvider router={router} />
    </DatabaseProvider>
  )
}

export default App
