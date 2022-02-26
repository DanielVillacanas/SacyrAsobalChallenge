import React, { useEffect, useState } from "react";
import ProductService from "../../../Services/MerchandaisingService/merchandaising.service";
import { StarIcon } from "@heroicons/react/solid";
import { Link, useParams, useNavigate } from "react-router-dom";
import Navbar from "../../Layout/Navbar/Navbar";

let service = new ProductService();

export default function ProductsDetails() {
  let navigate = useNavigate();

  let [product, setProduct] = useState();
  let [count, setCount] = useState(1);

  const { id } = useParams();

  useEffect(() => {
    loadProduct();
    window.scrollTo(0, 0);
  }, []);

  let loadProduct = () => {
    service.getOneProduct(id).then((result) => {
      setProduct((product = result.data));
    });
  };

  let addProductCart = () => {
    service.addProductCart(product._id, count).then(() => {
      navigate("/products/cart");
    });
  };

  let decrement = () => {
    if (count <= 1) {
      return;
    } else {
      setCount(count - 1);
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-bluecorporative  pt-8">
        <div className="py-6">
          <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-4 lg:gap-x-8">
            <div className="lg:col-span-2 aspect-w-3 aspect-h-4 overflow-hidden lg:block rounded-lg">
              <img
                src={product?.img_url}
                className="px-4 w-full lg:h-full h-72 object-center lg:mx-0 lg:px-0 lg:object-contain object-cover mb-6 lg:mb-0 rounded-lg "
                alt="Product"
              />
            </div>
            <div className="lg:col-span-2 lg:pr-8 mx-8 lg:mx-4">
              <h1 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl mb-4">
                {product?.name}
              </h1>
              <div className="my-6">
                <div className="flex items-center">
                  <div className="flex items-center text-white">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className="text-white h-5 w-5 flex-shrink-0 mr-2"
                        aria-hidden="true"
                      />
                    ))}{" "}
                    4.7 de 5 estrellas
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-12 gap-4 mb-6 mt-4">
                <div className="col-start-1 col-end-5 text-sm text-white">
                  Precio por unidad: {product?.price} €
                </div>
                <div className="col-start-1 col-end-12 text-sm text-white">
                  O tres pagos sin intereses de{" "}
                  {(product?.price / 3).toFixed(2)} €
                </div>
              </div>
              <div className="grid grid-cols-4">
                <select
                  id="team"
                  name="team"
                  className="border-2  mt-3 block pl-1 pr-10 py-2 mb-4 text-base focus:outline-none focus:ring-bluesooft focus:border-bluesooft sm:text-sm rounded-md"
                  defaultValue="XS"
                >
                  <option>XS</option>
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                  <option>XXL</option>
                </select>
                <Link
                  to="/"
                  className="col-span-3 text-white ml-12 my-auto underline underline-offset-8 hover:text-bluesooft hover:border-bluesooft"
                >
                  Guia de tallas
                </Link>
              </div>
              <div>
                <p className="text-white">Equipación</p>
                <div className="my-4">
                  <button
                    type="button"
                    className="mr-8 w-10 h-10 px-3 inline-flex items-center rounded-full shadow-sm text-black bg-gray-100 border-4 border-bluesooft"
                  >
                    1
                  </button>
                  <button
                    type="button"
                    className="px-3.5 w-10 h-10 inline-flex items-center py-2 border border-transparent rounded-full shadow-sm text-black bg-gray-100"
                  >
                    2
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-12 gap-4 mb-6 mt-4">
                <div className="col-span-2">
                  <button
                    type="button"
                    onClick={decrement}
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-2 py-1 bg-gray-100  text-bluesooft hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bluesooft sm:text-sm"
                  >
                    <span className="text-2xl font-medium">-</span>
                  </button>
                </div>
                <div className="col-span-2 text-center pt-2 text-white">
                  {count}
                </div>
                <div className="col-span-2">
                  <button
                    type="button"
                    onClick={() => setCount(count + 1)}
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-2 py-1 bg-gray-100  text-bluesooft hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bluesooft sm:text-sm"
                  >
                    <span className="text-2xl font-medium">+</span>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-6 pb-8">
                <button
                  type="button"
                  onClick={addProductCart}
                  className="col-span-3 inline-flex justify-center rounded-md border border-transparent shadow-sm py-2 bg-bluesooft text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bluesooft sm:text-sm"
                >
                  Añadir a la cesta
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="space-y-6 mt-8 ml-16">
            <p className="text-base text-white ">{product?.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
