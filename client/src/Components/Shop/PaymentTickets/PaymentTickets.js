import React from 'react'
import { Link } from 'react-router-dom'
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Layout/Navbar/Navbar";
import Modal from "../../Items/Modal/Modal";

function PaymentTickets() {
  const [showModal, setShowModal] = useState(false);

  let changeModal = () => {
    setShowModal(true);
  };

  return (
    <>
      <div className="h-screen relative bg-bluecorporative">
        <div className="relative pt-6 pb-10 sm:pb-8 bg-bluecorporative lg:pt-28">
          <div className="mt-12 sm:mt-4 bg-bluecorporative">
            <div className="mx-auto max-w-7xl ">
              <div className="lg:grid lg:grid-cols-12 lg:gap-8 ">
                <div className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center ">
                  <div class="h-full flex flex-col bg-white shadow-xl rounded-lg">
                    <div class="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                      <div class="flex items-start justify-between ">
                        <h2
                          class="text-lg font-medium text-gray-900"
                          id="slide-over-title"
                        >
                          Tu cesta
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
                        <Link
                          to={'/products/cart'}
                          className="font-medium text-bluesooft hover:text-bluesooft"
                        >
                          Volver a la cesta
                        </Link>
                      </div>
                      <p className="flex justify-start text-gray-400 text-sm mt-4">
                        Compruebe que su pedido esta completo
                      </p>
                      <div class="mt-8">
                        <div class="flow-root">
                          <ul class="-my-4 divide-y divide-bluesooft">
                            {/* {cart?.map((elm) => {
                          return (
                            elm.product && (
                              <li
                                class="py-6 flex px-4 rounded-lg my-2 "
                                key={elm._id}
                              >
                                <div class="flex-shrink-0 w-24 h-24 rounded-md overflow-hidden border border-black">
                                  <img
                                    src={elm.product.img_url}
                                    alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                                    class="w-full h-full object-center object-cover "
                                  />
                                </div>
                                <div class="ml-4 flex-1 flex flex-col">
                                  <div>
                                    <div class="flex justify-between text-base font-medium text-gray-900">
                                      <h3>{elm.product.name}</h3>
                                    </div>
                                  </div>
                                  <div class="flex-1 flex items-end justify-between ">
                                    <p class="text-gray-500">
                                      Cantidad: {elm.quantity}
                                    </p>
                                    <p class="ml-4">{elm.product.price}€</p>
                                  </div>
                                </div>
                              </li>
                            )
                          );
                        })} */}
                          </ul>
                        </div>
                      </div>
                      <div class="flex justify-between text-base font-medium text-gray-900 pt-8 border-t-2 border-black">
                        <p>Subtotal</p>
                        {/* <p>{subtotal}€</p> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-16 sm:mt-22 lg:mt-0 lg:col-span-6 sm:px-10 mx-10">
                  <div className="bg-white sm:max-w-md sm:w-full sm:mx-auto rounded-lg sm:overflow-hidden lg:mt-12 ">
                    <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-md">
                      <div className="bg-white py-2 px-4 ">
                        <form className="space-y-6">
                          <div className=" grid grid-cols-12">
                            <div className="col-span-10 mr-2">
                              <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Tarjeta
                              </label>
                              <div className="mt-1">
                                <input className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-bluesoof focus:border-bluesooft sm:text-sm" />
                              </div>
                            </div>
                            <div className="col-span-2">
                              <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700"
                              >
                                CVV
                              </label>
                              <div className="mt-1">
                                <input className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-bluesooft focus:border-bluesooft sm:text-sm" />
                              </div>
                            </div>
                          </div>
                          <div>
                            <label
                              htmlFor="password"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Correo electronico
                            </label>
                            <div className="mt-1">
                              <input
                                id="Direccion de envio"
                                max={13}
                                placeholder="gmail"
                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-bluesooft focus:border-bluesooft sm:text-sm"
                              />
                            </div>
                          </div>
                          <div>
                            <label
                              htmlFor="password"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Telefono
                            </label>
                            <div className="mt-1">
                              <input
                                id="Direccion de envio"
                                max={13}
                                placeholder="+34 ... ... ..."
                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-bluesooft focus:border-bluesooft sm:text-sm"
                              />
                            </div>
                          </div>
                          <div>
                            <Link
                              to={'/'}
                              type="submit"
                            <div
                              onClick={changeModal}
                              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-bluesooft hover:bg-bluesooft focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bluesooft"
                            >
                              Comprar
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="px-4 py-4 ">
                      <p className="text-xs leading-5 text-gray-500">
                        Una vez realizada la compra, recibiras las entradas en
                        tu correo y telefono.
                      </p>
                    </div>
                    {showModal === true && <Modal />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PaymentTickets
