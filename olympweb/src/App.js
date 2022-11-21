import { Routes, Route } from "react-router-dom"
import Signup from "./Signup"
import Home from "./Home"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/h" element={ <Home/> } />
        <Route path="/signup" element={<Signup />}/>
      </Routes>
    </div>
  )
}

export default App;
