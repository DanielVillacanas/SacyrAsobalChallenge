/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link, useNavigate } from "react-router-dom";

import Dropdown from "../../Items/Dropdown/Dropdown";
import AuthService from "../../../Services/AuthService/auth.service";
import ShoppingCart from "../../Shop/ShoppingCart/ShoppingCart";

export default function Navbar({ count }) {
  let authService = new AuthService();
  let navigate = useNavigate();
  let [user, setUser] = useState();

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = () => {
    debugger;
    authService
      .isloggedin()
      .then((user) => {
        setUser(user);
      })
      .catch((err) => console.log(err));
  };
  const closeSession = () => {
    authService.logout().then(setUser(undefined), navigate("/login"));
  };

  return (
    <Disclosure as="nav" className="bg-gray-200 shadow">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-16 w-auto"
                    src="https://www.balonmanoproshop.com/c/271-tm_home_default/liga-asobal.jpg"
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block h-16 w-auto"
                    src="https://www.balonmanoproshop.com/c/271-tm_home_default/liga-asobal.jpg"
                    alt="Workflow"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <Link
                    to="/ranking"
                    className="border-transparent text-gray-500  hover:text-bluesooft inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    Ranking
                  </Link>
                  <Link
                    to="/equipos"
                    className="border-transparent text-gray-500 hover:text-bluesooft inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    Equipos
                  </Link>
                  <Dropdown />
                  <Link
                    to="/calendario"
                    className="border-transparent text-gray-500 h hover:text-bluesooft inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    Calendario
                  </Link>
                  <Link
                    to="/noticias"
                    className="border-transparent text-gray-500  hover:text-bluesooft inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    Noticias
                  </Link>
                  <Link to="/shopping-cart" className="absolute top-0 inset-x-1/2 pt-1.5">
                    <p
                      style={{
                        color: "black",
                        marginLeft: "2rem",
                        height: "3px",
                        fontWeight: "bold",
                      }}
                    >
                      {count}
                    </p>
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
                  </Link>
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                {!user ? (
                  <>
                    <Link
                      to="/login"
                      className="border-transparent text-gray-500  hover:text-bluesooft inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium mr-6"
                    >
                      Inicio de sesión
                    </Link>
                    <Link
                      to="/signup "
                      className="border-transparent text-gray-500  hover:text-bluesooft inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium mr-6"
                    >
                      Regístrate
                    </Link>
                  </>
                ) : (
                  <>
                    <button
                      onClick={closeSession}
                      className="border-transparent text-gray-500  hover:text-bluesooft inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium mr-6"
                    >
                      Cerrar Sesión
                    </button>
                  </>
                )}

                <button
                  type="button"
                  className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://cdn-icons-png.flaticon.com/512/74/74472.png"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Tu perfil
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Cerrar sesión
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Disclosure.Button
                as={Link}
                to="/ranking"
                className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Ranking
              </Disclosure.Button>
              <Disclosure.Button
                as={Link}
                to="/equipos"
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Equipos
              </Disclosure.Button>
              <Disclosure.Button
                as={Link}
                href="/tienda"
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Tienda
              </Disclosure.Button>
              <Disclosure.Button
                as={Link}
                href="/calendario"
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Calendario
              </Disclosure.Button>
              <Disclosure.Button
                as={Link}
                href="/noticias"
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Noticias
              </Disclosure.Button>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-4">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://cdn-icons-png.flaticon.com/512/74/74472.png"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-800">Tom Cook</div>
                  <div className="text-sm font-medium text-gray-500">tom@example.com</div>
                </div>
                <button
                  type="button"
                  className="ml-auto flex-shrink-0 bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-3 space-y-1">
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                >
                  Tu perfil
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                >
                  Ajustes
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                >
                  Cerrar Sesión
                </Disclosure.Button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
