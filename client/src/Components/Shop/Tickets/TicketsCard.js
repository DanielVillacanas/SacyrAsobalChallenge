import React, { useState } from "react";

/* This example requires Tailwind CSS v2.0+ */

export default function TicketCard({ ticket }) {
  const [count, setCount] = useState(1);
  console.log(ticket);
  let decrement = () => {
    if (count <= 1) {
      return;
    } else {
      setCount(count - 1);
    }
  };

  let dateGenerator = (date) => {
    let temp = date.split("-");
    let to = temp[2] + "/" + temp[1] + "/" + temp[0];
    return to;
  };

  return (
    <div className=" bg-white shadow overflow-hidden rounded-md px-6 py-4 text-center">
      <div className="grid grid-cols-7 ">
        <span className="col-span-5 text-xl font-semibold">
          {ticket?.time} {dateGenerator(ticket?.date.slice(0, 10))}
        </span>
      </div>

      <ul role="list" className="grid grid-cols-3">
        <li key={ticket.id} className="">
          <div>
            <p className="mb-2">Local</p>
            <p className="text-lg font-semibold"> {ticket?.teams.home.name}</p>

            <img
              src={ticket?.teams.home.img}
              className="h-14 mx-auto mt-4"
            ></img>
          </div>
        </li>
        <li key={ticket.id} className="border-r-2 border-bluesooft">
          <div>
            <p className="mb-2">Visitante</p>
            <p className="text-lg font-semibold"> {ticket?.teams.away.name}</p>

            <img
              src={ticket?.teams.away.img}
              className="h-14 mx-auto mt-4"
            ></img>
          </div>
        </li>

        <li className="grid grid-cols-12 gap-4 ml-4 my-auto">
          <div className="col-span-2">
            <button
              type="button"
              onClick={decrement}
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-2 py-1 bg-gray-100  text-bluesooft hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bluesooft sm:text-sm"
            >
              <span className="text-2xl font-medium">-</span>
            </button>
          </div>
          <div className="col-span-2 text-center pt-2 text-black">{count}</div>
          <div className="col-span-2">
            <button
              type="button"
              onClick={() => setCount(count + 1)}
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-2 py-1 bg-gray-100  text-bluesooft hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bluesooft sm:text-sm"
            >
              <span className="text-2xl font-medium">+</span>
            </button>
          </div>
          <div className="col-span-6">
            <button
              type="button"
              className="mt-1 px-4 inline-flex justify-center rounded-md border border-transparent shadow-sm py-2 bg-bluesooft text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bluesooft sm:text-sm"
            >
              Añadir a la cesta
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}
