//router imports
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";
//layouts
import RootLayout from "./layouts/RootLayout";
// pages
import Home from "./views/Home/Home";
import JobList from "./views/JobList/JobList";
import Error from "./views/Error/Error";
import DatabaseProvider from "./context/DatabaseContext";
//context import


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="job-list" element={<JobList />} />
      <Route path="/error" element={<Error />} />
    </Route>
  )
)

function App() {

  return (
    <DatabaseProvider>
      <RouterProvider router={router} />
    </DatabaseProvider>

  )
}

export default App
