import "./App.css";
import { Routes, Route } from "react-router-dom";

import Login from "./Components/Auth/Login/Login";
import SignUp from "./Components/Auth/SignUp/SignUp";
import Home from "./Components/Home/Home";
import Merchandaising from "./Components/Shop/Merchandaising/Merchandaising";
import MerchandaisingDetails from "./Components/Shop/Merchandaising/MerchandaisingDetails";
import PaymentTickets from "./Components/Shop/PaymentTickets/PaymentTickets";
import Calendar from "./Components/Calendar/Calendar";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/merchandaising" element={<Merchandaising />}></Route>
      <Route path="/calendario" element={<Calendar />}></Route>
      <Route
        path="/merchandaising/:id"
        element={<MerchandaisingDetails />}
      ></Route>
      <Route path="/tickets" element={<Login />}></Route>
      <Route path="/payout-tickets" element={<PaymentTickets />}></Route>
    </Routes>
  );
}

export default App;
