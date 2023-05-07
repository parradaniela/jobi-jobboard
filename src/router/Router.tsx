import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import ErrorLayout from "../layouts/ErrorLayout"
import JobsLayout from "../layouts/JobsLayout"
import RootLayout from "../layouts/RootLayout"
import WIP from "../views/Error/WIP"
import Home from "../views/Home/Home"

export const router = createBrowserRouter(
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