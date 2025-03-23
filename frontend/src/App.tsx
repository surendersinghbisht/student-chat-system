import { Route, Routes } from "react-router-dom"
// import SignUpPage from "./Pages/SignUpPage"
import Signup from "./components/signup"
import SignUpPage from "./Pages/SignUpPage"

function App() {

  return (
    <div>
      <SignUpPage />
      <Routes>
        {/* <Route path="/" element={} />
        <Route path="/signup" element={} /> */}
      </Routes>
    </div>
  )
}

export default App
