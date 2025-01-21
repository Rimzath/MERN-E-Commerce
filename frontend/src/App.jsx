import Register from './components/Register.jsx';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  
  return (
    <BrowserRouter >
        <Routes>
          <Route path="/" element ={<Register/>} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
