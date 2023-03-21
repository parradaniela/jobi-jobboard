import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";
//layouts
import RootLayout from "./components/layouts/RootLayout";
// pages
import Home from "./components/pages/Home/Home";
import JobList from "./components/pages/JobList/JobList";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}> 
      <Route index element={<Home />} />
      <Route path="job-list" element={<JobList />} />
      {/* <Route path="/error" element={<Error />} /> */}
    </Route>
  )
)

function App() {
  
  return (
    
    <RouterProvider router={router} />
    
  )
}

export default App
