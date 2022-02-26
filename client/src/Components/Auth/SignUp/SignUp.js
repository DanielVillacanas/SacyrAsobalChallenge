import { Link, useNavigate } from "react-router-dom";
import Asobal from "../../../Svg/Asobal.svg";
import React, { useState } from "react";
import AuthService from "../../../Services/AuthService/auth.service";

let authService = new AuthService();

export default function SignUp() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
    password2: "",
    img_url: "",
    username: "",
    team: "Frigoríficos Morrazo",
  });

  const [errSingUp, setErr] = useState();
  const [errMessage, setError] = useState(undefined);

  let handleInputChange = (e) => {
    const { name, value } = e.currentTarget;
    if (e.currentTarget.name === "password2" && e.currentTarget.value !== "") {
      e.currentTarget.value !== user.password
        ? setError("Las contraseñas no coinciden")
        : setError(undefined);
    }
    setUser((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  let handleInputSelect = (e) => {
    let value = e.currentTarget.value;
    setUser((prevState) => {
      return {
        ...prevState,
        type: value,
      };
    });
  };

  let handleSubmit = (e) => {
    e.preventDefault();

    !errMessage &&
      authService
        .signUp(
          user.username,
          user.email,
          user.password,
          user.password2,
          user.team
        )
        .then((response) => {
          navigate("/");
        })
        .catch((err) => setErr(err.response?.data));
  };

  return (
    <>
      <div className="min-h-full flex flex-col justify-center py-6 sm:px-6 lg:px-8">
        {" "}
        <Link to="/" className=" border-2 px-4 py-2 rounded-lg bg-white w-24">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="m-auto h-5 w-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </Link>
        <div className="sm:mx-auto sm:w-full sm:max-w-md ">
          <img
            className="hidden lg:block h-48 w-auto m-auto shadow-md shadow-white rounded-full"
            src={Asobal}
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            Registrate para unirte a la comunidad Asobal
          </h2>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 mb-4">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Correo electronico
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={handleInputChange}
                    autoComplete="email"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-bluesooft focus:border-bluesooft sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nombre de usuario
                </label>
                <div className="mt-1">
                  <input
                    id="username"
                    name="username"
                    onChange={handleInputChange}
                    type="text"
                    autoComplete="current-password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-bluesooft focus:border-bluesooft sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="team"
                  className="block text-sm font-medium text-gray-700"
                >
                  Equipo Favorito
                </label>
                <select
                  id="team"
                  name="team"
                  onChange={handleInputSelect}
                  className=" border-2 border-bluesooft mt-3 block w-full pl-1 pr-10 py-2 text-base focus:outline-none focus:ring-bluesooft focus:border-bluesooft sm:text-sm rounded-md"
                  defaultValue="Frigoríficos Morrazo"
                >
                  <option>Frigoríficos Morrazo</option>
                  <option>Barça</option>
                  <option>Bidasoa Irun</option>
                  <option>BM. Logroño La Rioja</option>
                  <option>Faikin BM. Granollers</option>
                  <option>Bada Huesca</option>
                  <option>Incarlopsa Cuenca</option>
                  <option>ABANCA Ademar León</option>
                  <option>Ángel Ximénez Puente Genil</option>
                  <option>Recoletas At.Valladolid</option>
                  <option>Helvetia Anaitasuna</option>
                  <option>BM. Benidor</option>
                  <option>Viveros Herol BM. Nava</option>
                  <option>Unicaja Banco Sinfín</option>
                  <option>Bathco BM. Torrelavega</option>
                  <option>BM. Iberoquinoa Antequera</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Contraseña
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={handleInputChange}
                    autoComplete="current-password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-bluesooft focus:border-bluesooft sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password2"
                  className="block text-sm font-medium text-gray-700"
                >
                  Repite tu contraseña
                </label>
                <div className="mt-1">
                  <input
                    id="password2"
                    name="password2"
                    type="password"
                    onChange={handleInputChange}
                    autoComplete="current-password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-bluesooft focus:border-bluesooft sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-bluesooft hover:bg-bluesooft focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bluesooft"
                >
                  Registrate
                </button>
              </div>
              <div>
                {errSingUp && (
                  <p className="text-red-500 text-center">
                    Error al registrar usuario compruebe que la dirección es
                    correcta y que no empieza por C/
                  </p>
                )}
              </div>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    Si dispones de una cuenta
                  </span>
                </div>
              </div>
              <Link
                to="/login"
                className="w-full flex justify-center my-4 py-2 px-4 border-2 border-bluesooft rounded-md shadow-sm text-sm font-medium text-bluesooft bg-white  hover:bg-gray-50"
              >
                Inicia sesión
              </Link>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    Registrate con
                  </span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                <div>
                  <a
                    href="#"
                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <span className="sr-only">Registrate con Facebook</span>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>

                <div>
                  <a
                    href="#"
                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <span className="sr-only">Registrate con Twitter</span>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </div>

                <div>
                  <a
                    href="#"
                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <span className="sr-only">Registrate con Google</span>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
