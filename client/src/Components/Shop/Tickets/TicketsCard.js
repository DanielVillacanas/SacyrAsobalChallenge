import React from "react";
import { Link } from "react-router-dom";
import { StarIcon } from "@heroicons/react/solid";

/* This example requires Tailwind CSS v2.0+ */

export default function ticketCard({ ticket }) {
  console.log(ticket);
  return (
    <ul role="list" className="space-y-3">
      <li
        key={ticket.id}
        className="bg-white shadow overflow-hidden rounded-md px-6 py-4"
      >
        <p>Hola</p>
      </li>
    </ul>
  );
}
