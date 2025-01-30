import Register from "./components/Register.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import AdminDashboard from "./components/AdminDashboard.jsx";
import CreateProducts from "./components/CRUD/CreateProducts.jsx";
import UpdateProducts from "./components/CRUD/UpdateProducts.jsx";
import Help from "./components/Help.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/create" element={<CreateProducts />}></Route>
        <Route path="/update/:id" element={<UpdateProducts />}></Route>
        <Route path="/help" element={<Help />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
