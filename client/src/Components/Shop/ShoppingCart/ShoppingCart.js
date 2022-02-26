import React, { useState, useEffect, useContext } from 'react'
import CartContext from '../../Context/CartContext'

const ShoppingCart = () => {
  const { shoppingCart, setCountCart } = useContext(CartContext)
  const [total, setTotal] = useState(undefined)

  const cartFilled = shoppingCart?.length !== 0

  const totalPrice = () => {
    let sum = shoppingCart?.reduce((sum, li) => ({
      price: sum.price + li.price,
    }))
    setTotal(sum)
  }

  const deleteItem = (item) => {
    let index = shoppingCart.indexOf(item)
    shoppingCart.splice(index, 1)
    setCountCart(shoppingCart.length)
  }

  useEffect(() => {
    cartFilled && totalPrice()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shoppingCart.length])

  console.log('ShoppingCart -->', shoppingCart)

  return (
    <>
      <h2 className="font-bold text-center text-gray-100 text-2xl py-6">
        Tu carrito
      </h2>
      <div className="container flex justify-center mx-auto">
        <div className="flex flex-col">
          <div className="w-full">
            <div className="border-b border-gray-200 shadow">
              <table className="divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-2 text-xs text-gray-500"></th>
                    <th className="px-6 py-2 text-xs text-gray-500">
                      Producto
                    </th>
                    <th className="px-6 py-2 text-xs text-gray-500">Precio</th>
                    <th className="px-6 py-2 text-xs text-gray-500">Borrar</th>
                    <th className="px-6 py-2 text-xs text-gray-500">Total</th>
                  </tr>
                </thead>

                {shoppingCart.map((elm, i) => (
                  <tbody key={i} className="bg-white divide-y divide-gray-300">
                    <tr className="whitespace-nowrap">
                      <td className='px-6 py-4 text-sm text-gray-500"'>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {elm?.name}
                      </td>
                      <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                        {elm.price?.toFixed(2)} €
                      </td>
                      <td className="px-6 py-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          onClick={() => deleteItem(elm)}
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </td>
                      <td></td>
                    </tr>
                  </tbody>
                ))}

                <tbody className="bg-indigo-100 divide-y divide-gray-300">
                  <tr>
                    <td className="px-6 py-2 text-xs text-gray-500"></td>
                    <td className="px-6 py-2 text-xs text-gray-500"></td>
                    <td className="px-6 py-2 text-xs text-gray-500"></td>
                    <td className="px-6 py-2 text-xs text-gray-500"></td>
                    <td className="px-6 py-2 font-bold text-indigo-900">
                      {cartFilled ? total?.price?.toFixed(2) : 0} €
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ShoppingCart
