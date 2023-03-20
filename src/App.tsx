import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  
  return (
    <BrowserRouter> 
      <Routes> 
        <Route path="/" element={<Home />} />
        {/* <Route path="/job-list" element={<JobList />} />
        <Route path="/error" element={<Error />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
