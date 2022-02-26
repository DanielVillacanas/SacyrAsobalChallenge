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

  return (
    <>
      <Navbar />
      <div>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 pt-4">
          <SearchBar getInfo={getInfo} />

          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
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
