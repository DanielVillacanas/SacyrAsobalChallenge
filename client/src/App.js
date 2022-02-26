import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Login from './Components/Auth/Login/Login'
import SignUp from './Components/Auth/SignUp/SignUp'
import Home from './Components/Home/Home'
import Merchandaising from './Components/Shop/Merchandaising/Merchandaising'
import MerchandaisingDetails from './Components/Shop/Merchandaising/MerchandaisingDetails'
import PaymentTickets from './Components/Shop/PaymentTickets/PaymentTickets'
import Calendar from './Components/Calendar/Calendar'
import Navbar from './Components/Layout/Navbar/Navbar'
import ShoppingCart from './Components/Shop/ShoppingCart/ShoppingCart'
import { ProfilePage } from './Components/ProfilePage/ProfilePage'
import { CartProvider } from './Components/Context/CartContext'

function App() {
  const [shoppingCart, setShoppingCart] = useState([])
  const [countCart, setCountCart] = useState(0)

  const addProduct = (prod) => {
    setShoppingCart([...shoppingCart, prod])
  }

  const countItems = () => setCountCart(shoppingCart.length)

  useEffect(() => {
    countItems()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shoppingCart])

  return (
    <CartProvider value={{ addProduct, shoppingCart, setCountCart }}>
      <Navbar count={countCart} />
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
        <Route path="/shopping-cart" element={<ShoppingCart />}></Route>
        <Route path="/user-profile" element={<ProfilePage />}></Route>
      </Routes>
    </CartProvider>
  )
}

export default App
