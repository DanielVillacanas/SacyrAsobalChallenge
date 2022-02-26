import { Link } from "react-router-dom";
import Asobal from "../../../Svg/Asobal.svg";

export default function Login() {
  return (
    <>
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
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

        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="hidden lg:block h-24 w-auto m-auto"
            src={Asobal}
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            Iniciar sesión en tu cuenta
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md mb-4">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" action="#" method="POST">
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
                    autoComplete="email"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-bluesooft focus:border-bluesooft sm:text-sm"
                  />
                </div>
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
                    autoComplete="current-password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-bluesooft focus:border-bluesooft sm:text-sm"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-bluesooft focus:ring-bluesooft border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Recuerdame
                  </label>
                </div>

                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-bluesooft hover:text-bluesooft"
                  >
                    ¿Has olvidado tu contraseña?
                  </a>
                </div>
              </div>

              <div>
                <Link
                  to="/signup"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-bluesooft hover:bg-bluesooft focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bluesooft"
                >
                  Inicia sesión
                </Link>
              </div>
            </form>
            <div className="relative mt-4">
              <div className="absolute inset-0 flex items-center ">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  No tienes cuenta, registrate
                </span>
              </div>
            </div>
            <Link
              to="/signup"
              className="w-full flex justify-center my-4 py-2 px-4 border-2 border-bluesooft rounded-md shadow-sm text-sm font-medium text-bluesooft bg-white  hover:bg-gray-50"
            >
              Registrate
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
