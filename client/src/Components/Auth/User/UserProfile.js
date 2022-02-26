import React, { Fragment, useEffect, useState } from "react";

import { Link } from "react-router-dom";
import AuthService from "../../../Services/AuthService/auth.service";

export default function UserProfile(props) {
  return (
    <>
      <div className="bg-gray-900 lg:pb-80">
        <div className="lg:flex lg:justify-between mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24 ">
          <div className="lg:flex lg:justify-between my-auto ">
            <img
              className="h-40 mx-auto lg:mx-0 w-40 rounded-full xl:w-56 xl:h-56 lg:mr-20 my-auto border border-white p-2"
              src="https://i.ibb.co/74jMCRv/profile-page-asobal.jpg"
              alt="User"
            />
            <div className="flex lg:justify-between justify-center mt-8 ">
              <div className="font-medium text-lg lg:text-start text-center lg:text-left ">
                <h3 className="text-white">
                  Nombre de Usuario: <p>Miguel Ángel Martin</p>
                </h3>
                <div className="text-white text-sm my-2">
                  Email:
                  <div className="text-bluesooft text-sm my-2">
                    miguelangelmartin@asobal.es
                  </div>
                </div>

                <div className=" lg:justify-between justify-center grid grid-col-1 text-center ">
                  <button
                    type="button"
                    className="mx-auto my-4 h-6 text-sm font-medium lg:mx-0 lg:text-left lg:w-20 text-gray-300 border-b border-bluesooft transition duration-500 ease-in-out transform hover:scale-90 hover:translate-y-1"
                  >
                    Editar perfil
                  </button>
                  <Link
                    to={"/chat"}
                    className="mx-auto my-4 h-6 text-sm font-medium lg:mx-0 lg:text-left lg:w-24 text-gray-300 border-b border-bluesooft transition duration-500 ease-in-out transform hover:scale-90 hover:translate-y-1"
                  >
                    Ver tus chats
                  </Link>

                  <button
                    type="button"
                    className="mx-auto my-4 h-6 text-sm font-medium  text-gray-300 border-b border-bluesooft transition duration-500 ease-in-out transform hover:scale-90 hover:translate-y-1"
                  >
                    Mostrar mis comentarios
                  </button>
                </div>

                <div className="flex justify-between lg:grid mx-auto">
                  <button
                    type="button"
                    className="mx-auto my-4 h-6 text-sm font-medium  text-gray-300 border-b border-bluesooft transition duration-500 ease-in-out transform hover:scale-90 hover:translate-y-1"
                  >
                    Mostrar comentarios
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-rows-2 mt-10">
            <h2 className="row-span-2 mb-10 text-white text-center font-bold text-xl">
              Tus insignias
            </h2>
            <div className="grid grid-cols-2">
              <div className="grid-span-2 px-10">
                <img
                  src="https://i.ibb.co/cF0cy6P/platinum.png"
                  className="h-36 mr-10 mb-10"
                  alt="a"
                ></img>
                <div className="ml-7 text-white mb-8">Platino</div>
                <img
                  src="https://i.ibb.co/zJ9N9BP/bronze.png"
                  className="h-36"
                  alt="a"
                ></img>{" "}
                <div className="ml-7 text-white mt-8">Oro</div>
              </div>
              <div className="grid-span-2 px-10">
                <img
                  src="https://i.ibb.co/9NL0zFJ/gold.png"
                  className="h-36 mr-10 mb-10"
                  alt="a"
                ></img>{" "}
                <div className="ml-7 text-white mb-8">Bronze</div>
                <img
                  src="https://i.ibb.co/V9YQrNQ/silver.png"
                  className="h-36"
                  alt="a"
                ></img>{" "}
                <div className="ml-7 text-white mt-8">Plata</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
