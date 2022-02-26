import React, { useEffect, useState } from "react";
import TicketsCard from "./TicketsCard";

import TicketsService from "../../../Services/TicketsService/tickets.service";

let service = new TicketsService();

export default function Tickets() {
  let [tickets, setTickets] = useState([]);
  let [jornada, setJornada] = useState({ type: "1" });

  let loadTickets = () => {
    service
      .getTickets(jornada.type)
      .then((result) => {
        setTickets((tickets = result.data));
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadTickets();
  }, []);

  useEffect(() => {
    loadTickets();
  }, [jornada]);

  let handleInputSelect = (e) => {
    let value = e.currentTarget.value;
    setJornada((prevState) => {
      return {
        ...prevState,
        type: value,
      };
    });
  };

  return (
    <>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 pt-6">
        <label htmlFor="team" className="block text-sm font-medium text-white">
          Selecciona la Jornada
        </label>
        <select
          id="team"
          name="team"
          onChange={handleInputSelect}
          className=" border-2 border-bluesooft mt-3 block w-40 pl-1 pr-10 py-2 text-base focus:outline-none focus:ring-bluesooft focus:border-bluesooft sm:text-sm rounded-md"
        >
          <option value="1">Jornada 1</option>
          <option value="2">Jornada 2</option>
          <option value="3">Jornada 3</option>
          <option value="4">Jornada 4</option>
          <option value="5">Jornada 5</option>
          <option value="6">Jornada 6</option>
          <option value="7">Jornada 7</option>
          <option value="8">Jornada 8</option>
          <option value="9">Jornada 9</option>
          <option value="10">Jornada 10</option>
          <option value="11">Jornada 11</option>
          <option value="12">Jornada 12</option>
          <option value="13">Jornada 13</option>
          <option value="14">Jornada 14</option>
          <option value="15">Jornada 15</option>
          <option value="16">Jornada 16</option>
          <option value="17">Jornada 17</option>
          <option value="18">Jornada 18</option>
          <option value="19">Jornada 19</option>
          <option value="20">Jornada 20</option>
          <option value="21">Jornada 21</option>
          <option value="22">Jornada 22</option>
          <option value="23">Jornada 23</option>
          <option value="24">Jornada 24</option>
          <option value="25">Jornada 25</option>
          <option value="26">Jornada 26</option>
          <option value="27">Jornada 27</option>
          <option value="28">Jornada 28</option>
          <option value="29">Jornada 29</option>
          <option value="30">Jornada 30</option>
        </select>
      </div>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 pt-6">
        <div className="grid grid-cols-1 gap-y-10  gap-x-6  xl:gap-x-8">
          {tickets.map((ticket) => (
            <div key={ticket._id}>
              <TicketsCard ticket={ticket} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
