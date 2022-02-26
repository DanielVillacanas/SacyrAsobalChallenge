import React from "react";
import { Link } from "react-router-dom";
import { StarIcon } from "@heroicons/react/solid";

function ProductCard(props) {
  let product = props.product;
  return (
    <Link to={`/merchandaising/${product._id}`}>
      <div key={product._id} className="group bg-white rounded-lg ">
        <div className="w-full  aspect-w-1 aspect-h-1 bg-white overflow-hidden xl:aspect-w-7 xl:aspect-h-8 rounded-lg">
          <img
            src={product.img_url}
            className="group w-full h-80 object-center object-cover bg-white rounded-lg"
            alt="Product Img"
          />
        </div>
        <div className="pl-8 pb-4 bg-white rounded-lg">
          <h4 className="pr-2 pt-2 text-sm text-black">{product.owner}</h4>
          <h3 className="pr-2 pt-2 text-sm text-black">{product.name}</h3>
          <div className="flex items-center mt-2 mr-2">
            {[0, 1, 2, 3, 4].map((rating) => (
              <StarIcon
                key={rating}
                className="text-black h-5 w-5 flex-shrink-0 "
                aria-hidden="true"
              />
            ))}
          </div>
          <p className="text-lg pt-2 font-medium text-gray-900">
            {product.price} €
          </p>
        </div>
      </div>
    </Link>
  );
}
export default ProductCard;
