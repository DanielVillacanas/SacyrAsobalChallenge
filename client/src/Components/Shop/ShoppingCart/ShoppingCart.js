import React, { useState, useEffect, useContext } from "react";
import CartContext from "../../Context/CartContext";
import { Link } from "react-router-dom";

const ShoppingCart = () => {
  const { shoppingCart, setCountCart } = useContext(CartContext);
  const [total, setTotal] = useState(undefined);

  const cartFilled = shoppingCart?.length !== 0;

  const totalPrice = () => {
    let sum = shoppingCart?.reduce((sum, li) => ({
      price: sum.price + li.price,
    }));
    setTotal(sum);
  };

  const deleteItem = (item) => {
    let index = shoppingCart.indexOf(item);
    shoppingCart.splice(index, 1);
    setCountCart(shoppingCart.length);
  };

  useEffect(() => {
    cartFilled && totalPrice();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shoppingCart.length]);

  console.log("ShoppingCart -->", shoppingCart);

  return (
    <>
      <div className="bg-bluecorperative mt-14">
        <div class="local inset-y-0 right-0 pl-10 pr-10 max-w-full flex pt-10 pb-80 ">
          <div class="w-screen ">
            <div class="h-full flex flex-col bg-white shadow-xl rounded-3xl">
              <div class="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                <div class="flex items-start justify-between">
                  <h2
                    class="text-lg font-medium text-bluecorperative"
                    id="slide-over-title"
                  >
                    Tu carro
                  </h2>
                  <div class="ml-3 h-7 flex items-center">
                    <button
                      type="button"
                      class="-m-2 p-2 text-gray-400 hover:text-gray-500"
                    >
                      <span class="sr-only">Cerrar panel</span>
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </button>
                  </div>
                </div>
                <div class="mt-8">
                  <div class="flow-root">
                    <ul class="-my-6 divide-y divide-gray-200">
                      {shoppingCart?.map((elm, i) => (
                        <li class="py-6 flex" key={i}>
                          <div class="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                            <img
                              src={elm?.img_url}
                              alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                              class="w-full h-full object-center object-cover"
                            />
                          </div>
                          <div class="ml-4 flex-1 flex flex-col">
                            <div>
                              <div class="flex justify-between text-base font-medium text-gray-900">
                                <h3 className="hover:text-bluesooft">
                                  <Link to={`/merchandaising/${elm?._id}`}>
                                    {elm?.name}
                                  </Link>
                                </h3>
                                <p class="ml-4">{elm.price}€</p>
                              </div>
                            </div>
                            <div class="flex-1 flex items-end justify-between ">
                              <div class="flex">
                                <button
                                  onClick={() => deleteItem(elm)}
                                  type="button"
                                  class="font-medium text-bluesooft hover:text-bluesooft"
                                >
                                  Eliminar
                                </button>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div class="border-t border-gray-200 py-6 px-4 sm:px-6">
                <div class="flex justify-between text-base font-medium text-gray-900">
                  <p>Subtotal</p>
                  <p>{cartFilled ? total?.price.toFixed(2) : 0} €</p>
                </div>
                <p class="mt-0.5 text-sm text-gray-500">
                  Gastos de envio y de gestion calculados en el coste total.
                </p>
                <div class="mt-6 flex sm:justify-end justify-center">
                  <Link
                    to="/payout-tickets"
                    class="w-44 flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-bluesooft hover:bg-bluesooft"
                  >
                    Comprar
                  </Link>
                </div>
                <div class="mt-6 flex sm:justify-end justify-center text-sm text-center text-gray-500">
                  <p>
                    o{" "}
                    <Link to="/merchandaising">
                      <button
                        type="button"
                        class="text-bluesooft font-medium hover:text-bluesooft"
                      >
                        Continuar comprando<span aria-hidden="true"> →</span>
                      </button>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
