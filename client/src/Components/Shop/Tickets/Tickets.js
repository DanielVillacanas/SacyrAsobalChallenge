import React, { useEffect, useState } from "react";
import Navbar from "../../Layout/Navbar/Navbar";
import TicketsCard from "./TicketsCard";

import TicketsService from "../../../Services/TicketsService/tickets.service";

let service = new TicketsService();

export default function AllProducts() {
  let [tickets, setTickets] = useState([]);

  let loadTickets = () => {
    service
      .getTickets()
      .then((result) => {
        setTickets((tickets = result.data));
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    loadTickets();
  }, []);

  return (
    <>
      <Navbar />
      <div>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 pt-4">
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {tickets.map((ticket) => (
              <div key={ticket._id} className="zoom">
                <TicketsCard ticket={ticket} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
