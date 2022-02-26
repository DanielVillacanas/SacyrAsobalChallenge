import React, { useEffect, useState } from "react";
import ProductService from "../../../Services/MerchandaisingService/merchandaising.service";
import Navbar from "../../Layout/Navbar/Navbar";

import SearchBar from "../../Items/SearchBar/SearchBar";
import MerchandaisingCard from "../Merchandaising/MerchandaisingCard";
import "./Merchandaising.css";
let service = new ProductService();

export default function AllProducts() {
  let [products, setProducts] = useState([]);
  let [productsCopy, setProductsCopy] = useState([]);
  let [search, setSearch] = useState("");
  let [filter, setfilter] = useState([]);
  let loadProducts = () => {
    service
      .getAllProducts()
      .then((result) => {
        console.log(result);
        setProducts((products = result.data));
        setProductsCopy((productsCopy = result.data));
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    loadProducts();
  }, []);
  console.log(productsCopy);
  const getInfo = (searching) => {
    setSearch(searching);
  };

  useEffect(() => {
    let copy = [...products];
    if (search.length !== 0) {
      copy = products.filter((product) =>
        product.name.toLowerCase().includes(search)
      );
    }
    setProductsCopy(copy);
  }, [search]);

  useEffect(() => {
    let copy = [...products];
    if (filter.length > 0)
      copy = copy.filter((elm) => filter.includes(elm.owner));
    setProductsCopy(copy);
  }, [filter]);

  const handleShortFilterChange = (elemnt) => {
    if (elemnt.target.checked) {
      let copy = [...filter];
      copy.push(elemnt.target.id);
      setfilter(copy);
    } else {
      let copy = [...filter];
      copy = copy.filter((elm) => elm !== elemnt.target.id);
      setfilter(copy);
    }
  };
  return (
    <>
      <Navbar />
      <div>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 pt-4">
          <div class="flex flex-row align-center justify-center "> </div>
          <SearchBar getInfo={getInfo} />
          <div class="grid grid-cols-5 align-center justify-center my-6 mx-8">
            <div className="mt-4 flex items-center">
              <label class="inline-flex " />
              <input
                type="checkbox"
                class="form-radio h-4 w-4"
                name="BARCELONA"
                value="1"
                onChange={handleShortFilterChange}
                id={"BARCELONA"}
              />
              <span class="mx-2 text-center text-white	">Barcelona</span>
            </div>
            <div className="mt-4 flex items-center">
              <label class="inline-flex " />
              <input
                type="checkbox"
                class="form-radio h-4 w-4"
                name="BIDASOA IRUN"
                value="1"
                onChange={handleShortFilterChange}
                id={"BIDASOA IRUN"}
              />
              <span class="ml-2 text-center text-white	">Bidasoa Irun</span>
            </div>
            <div className="mt-4 flex items-center">
              <label class="inline-flex " />
              <input
                type="checkbox"
                class="form-radio h-4 w-4"
                name="BM. LOGROÑO LA RIOJA"
                value="1"
                onChange={handleShortFilterChange}
                id={"BM. LOGROÑO LA RIOJA"}
              />
              <span class="ml-2 text-center text-white	">
                BM. Logroño La Rioja
              </span>
            </div>
            <div className="mt-4 flex items-center">
              <label class="inline-flex " />
              <input
                type="checkbox"
                class="form-radio h-4 w-4"
                name="radio"
                value="1"
                onChange={handleShortFilterChange}
                id={"FRAIKIN BM. GRANOLLERS"}
              />
              <span class="ml-2 text-center text-white	">
                Fraikin BM. Granollers
              </span>
            </div>
            <div className="mt-4 flex items-center">
              <label class="inline-flex " />
              <input
                type="checkbox"
                class="form-radio h-4 w-4"
                name="radio"
                value="1"
                onChange={handleShortFilterChange}
                id={"BADA HUESCA"}
              />
              <span class="ml-2 text-center text-white	">Bada Huesca</span>
            </div>
            <div className="mt-4 flex items-center">
              <label class="inline-flex " />
              <input
                type="checkbox"
                class="form-radio h-4 w-4"
                name="radio"
                value="1"
                onChange={handleShortFilterChange}
                id={"INCARLOPSA CUENCA"}
              />
              <span class="ml-2 text-center text-white	">Incarlopsa Cuenca</span>
            </div>
            <div className="mt-4 flex items-center">
              <label class="inline-flex " />
              <input
                type="checkbox"
                class="form-radio h-4 w-4"
                name="radio"
                value="1"
                onChange={handleShortFilterChange}
                id={"ABANCA ADEMAR LEON"}
              />
              <span class="ml-2 text-center text-white	">
                Abanca Ademar León
              </span>
            </div>
            <div className="mt-4 flex items-center">
              <label class="inline-flex " />
              <input
                type="checkbox"
                class="form-radio h-4 w-4"
                name="radio"
                value="1"
                onChange={handleShortFilterChange}
                id={"ANGEL XIMENEZ PUENTE GENIL"}
              />
              <span class="ml-2 text-center text-white	">
                Ángel Ximénez Puente Genil
              </span>
            </div>
            <div className="mt-4 flex items-center">
              <label class="inline-flex " />
              <input
                type="checkbox"
                class="form-radio h-4 w-4"
                name="radio"
                value="1"
                onChange={handleShortFilterChange}
                id={"RECOLETAS AT. VALLADOLID"}
              />
              <span class="ml-2 text-center text-white ">
                Recoletas AT. Valladolid
              </span>
            </div>
            <div className="mt-4 flex items-center">
              <label class="inline-flex " />
              <input
                type="checkbox"
                class="form-radio h-4 w-4"
                name="radio"
                value="1"
                onChange={handleShortFilterChange}
                id={"HELVETIA ANAITASUNA"}
              />
              <span class="ml-2 text-center text-white ">
                Helvetica Anaitasuna
              </span>
            </div>
            <div className="mt-4 flex items-center">
              <label class="inline-flex " />
              <input
                type="checkbox"
                class="form-radio h-4 w-4"
                name="radio"
                value="1"
                onChange={handleShortFilterChange}
                id={"BM. BENIDORM"}
              />
              <span class="ml-2 text-center text-white ">BM. Benidorm</span>
            </div>
            <div className="mt-4 flex items-center">
              <label class="inline-flex " />
              <input
                type="checkbox"
                class="form-radio h-4 w-4"
                name="radio"
                value="1"
                onChange={handleShortFilterChange}
                id={"VIVEROS HEROL BM. NAVA"}
              />
              <span class="ml-2 text-center text-white ">
                Viveros Herol BM. Nava
              </span>
            </div>
            <div className="mt-4 flex items-center">
              <label class="inline-flex " />
              <input
                type="checkbox"
                class="form-radio h-4 w-4"
                name="radio"
                value="1"
                onChange={handleShortFilterChange}
                id={"ASOBAL"}
              />
              <span class="ml-2 text-center text-white border-b-2 ">
                Asobal
              </span>
            </div>
            <div className="mt-4 flex items-center">
              <label class="inline-flex " />
              <input
                type="checkbox"
                class="form-radio h-4 w-4"
                name="radio"
                value="1"
                onChange={handleShortFilterChange}
                id={"UNICAJA BANCO SINFIN"}
              />
              <span class="ml-2 text-center text-white ">
                Unicaja Banco Sinfín
              </span>
            </div>
            <div className="mt-4 flex items-center">
              <label class="inline-flex " />
              <input
                type="checkbox"
                class="form-radio h-4 w-4"
                name="radio"
                value="1"
                onChange={handleShortFilterChange}
                id={"FRIGORIFICOS MORRAZO"}
              />
              <span class="ml-2 text-center text-white ">
                Frigoríficos Morrazo
              </span>
            </div>
            <div className="mt-4 flex items-center">
              <label class="inline-flex " />
              <input
                type="checkbox"
                class="form-radio h-4 w-4"
                name="radio"
                value="1"
                onChange={handleShortFilterChange}
                id={"BATHCO BM. TORRELAVEGA"}
              />
              <span class="ml-2 text-center text-white ">
                Bathco BM. Torrelavega
              </span>
            </div>
            <div className="mt-4 flex items-center">
              <label class="inline-flex " />
              <input
                type="checkbox"
                class="form-radio h-4 w-4"
                name="radio"
                value="1"
                onChange={handleShortFilterChange}
                id={"BM. IBEROQUINOA ANTEQUERA"}
              />
              <span class="ml-2 text-center text-white ">
                BM. Iberoaquinoa Antequera{" "}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {productsCopy.map((product) => (
              <div key={product._id} className="zoom">
                <MerchandaisingCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
