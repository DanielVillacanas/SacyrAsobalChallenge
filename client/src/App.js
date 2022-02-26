import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Login from "./Components/Auth/Login/Login";
import SignUp from "./Components/Auth/SignUp/SignUp";
import Home from "./Components/Home/Home";
import Merchandaising from "./Components/Shop/Merchandaising/Merchandaising";
import MerchandaisingDetails from "./Components/Shop/Merchandaising/MerchandaisingDetails";
import PaymentTickets from "./Components/Shop/PaymentTickets/PaymentTickets";
import Tickets from "./Components/Shop/Tickets/Tickets";
import Navbar from "./Components/Layout/Navbar/Navbar";
import Calendar from "./Components/Calendar/Calendar";
import Payment from "./Components/Shop/PaymentTickets/Payment";
import ShoppingCart from "./Components/Shop/ShoppingCart/ShoppingCart";
import { CartProvider } from "./Components/Context/CartContext";

function App() {
  const [shoppingCart, setShoppingCart] = useState([]);
  const [countCart, setCountCart] = useState(0);
  const [ticketsCart, setTicketsCart] = useState([]);

  const addProduct = (prod) => {
    setShoppingCart([...shoppingCart, prod]);
  };

  const addTicket = (ticket, count) => {
    setTicketsCart([...ticketsCart, ticket, count]);
  };

  const countItems = () => setCountCart(shoppingCart.length);

  useEffect(() => {
    countItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shoppingCart]);

  return (
    <CartProvider
      value={{
        addProduct,
        shoppingCart,
        setCountCart,
        ticketsCart,
        addTicket,
      }}
    >
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar count={countCart} />
              <Home />
            </>
          }
        ></Route>
        <Route
          path="/signup"
          element={
            <>
              <Navbar count={countCart} />
              <SignUp />
            </>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/merchandaising"
          element={
            <>
              <Navbar count={countCart} />
              <Merchandaising />
            </>
          }
        ></Route>
        <Route
          path="/calendario"
          element={
            <>
              <Navbar count={countCart} />
              <Calendar />
            </>
          }
        ></Route>
        <Route
          path="/merchandaising/:id"
          element={
            <>
              <Navbar count={countCart} />
              <MerchandaisingDetails />
            </>
          }
        ></Route>
        <Route
          path="/tickets"
          element={
            <>
              <Navbar count={countCart} />
              <Tickets />
            </>
          }
        ></Route>
        <Route
          path="/payout-tickets"
          element={
            <>
              <Navbar count={countCart} />
              <PaymentTickets />
            </>
          }
        ></Route>
        <Route
          path="/shopping-cart"
          element={
            <>
              <Navbar count={countCart} />
              <ShoppingCart />
            </>
          }
        ></Route>
        <Route path="/tickets" element={<Tickets />}></Route>
        <Route path="/payout-tickets" element={<PaymentTickets />}></Route>
        <Route
          path="/payout"
          element={
            <>
              <Navbar count={countCart} />
              <Payment />{" "}
            </>
          }
        ></Route>
        <Route path="/shopping-cart" element={<ShoppingCart />}></Route>
      </Routes>
    </CartProvider>
  );
}

export default App;
