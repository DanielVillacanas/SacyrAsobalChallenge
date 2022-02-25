import "./App.css";
import { Routes, Route } from "react-router-dom";

import Login from "./Components/Auth/Login/Login";
import SignUp from "./Components/Auth/SignUp/SignUp";
import Home from "./Components/Home/Home";
import Merchandaising from "./Components/Shop/Merchandaising/Merchandaising";
import PaymentTickets from "./Components/Shop/PaymentTickets/PaymentTickets";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/merchandaising" element={<Merchandaising />}></Route>
      <Route path="/tickets" element={<Login />}></Route>
      <Route path="/payout-tickets" element={<PaymentTickets />}></Route>
    </Routes>
  );
}

export default App;
