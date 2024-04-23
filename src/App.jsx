import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Error from "./components/Error";


function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<Error/>}/>
    </Routes>
    </BrowserRouter>
)
}

export default App
