/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ClockIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/solid";
import Navbar from "../Layout/Navbar/Navbar";
import { Menu, Transition } from "@headlessui/react";

const days = [
  { date: "2021-01-31", events: [] },
  {
    date: "2022-02-01",
    isCurrentMonth: true,
    events: [
      {
        id: 4,
        name: "Visita Pabellón Municipal Guerrer@s Naveros",
        time: "6PM",
        datetime: "2022-01-08T18:00",
        href: "#",
      },
    ],
  },
  {
    date: "2022-02-02",
    isCurrentMonth: true,
    events: [
      {
        id: 4,
        name: "Conoce a Iker Serrano",
        time: "4PM",
        datetime: "2022-01-08T18:00",
        href: "#",
      },
    ],
  },
  { date: "2022-02-03", isCurrentMonth: true, events: [] },
  { date: "2022-02-04", isCurrentMonth: true, events: [] },
  {
    date: "2022-02-05",
    isCurrentMonth: true,
    events: [
      {
        id: 1,
        name: "Barça - BM.Logroño La Rioja",
        time: "12AM",
        datetime: "2022-01-08T18:00",
        href: "#",
      },
      {
        id: 2,
        name: "Morrazo - Viveros Herol BM. Nava",
        time: "17PM",
        datetime: "2022-01-08T18:00",
        href: "#",
      },
      {
        id: 3,
        name: "Date night",
        time: "6PM",
        datetime: "2022-01-08T18:00",
        href: "#",
      },
      {
        id: 4,
        name: "Date night",
        time: "6PM",
        datetime: "2022-01-08T18:00",
        href: "#",
      },
      {
        id: 5,
        name: "Date night",
        time: "6PM",
        datetime: "2022-01-08T18:00",
        href: "#",
      },
      {
        id: 7,
        name: "Date night",
        time: "6PM",
        datetime: "2022-01-08T18:00",
        href: "#",
      },
      {
        id: 8,
        name: "Date night",
        time: "6PM",
        datetime: "2022-01-08T18:00",
        href: "#",
      },
    ],
  },
  {
    date: "2022-02-06",
    isCurrentMonth: true,
    events: [
      {
        id: 6,
        name: "Unicaja Banco - Ángel Ximénez",
        time: "12AM",
        datetime: "2022-01-08T18:00",
        href: "#",
      },
    ],
  },
  { date: "2022-02-07", isCurrentMonth: true, events: [] },
  {
    date: "2022-02-08",
    isCurrentMonth: true,
    events: [
      {
        id: 9,
        name: "Visita Palau D'esports l'illa",
        time: "6PM",
        datetime: "2022-01-08T18:00",
        href: "#",
      },
    ],
  },
  { date: "2022-02-09", isCurrentMonth: true, events: [] },
  { date: "2022-02-10", isCurrentMonth: true, events: [] },
  {
    date: "2022-02-11",
    isCurrentMonth: true,
    events: [
      {
        id: 3,
        name: "Incarlopsa Cuenca - Helvetia Anaitasuna",
        time: "6PM",
        datetime: "2022-01-08T18:00",
        href: "#",
      },
      {
        id: 4,
        name: "BM. Logroño - BM.Iberocaja",
        time: "6PM",
        datetime: "2022-01-08T18:00",
        href: "#",
      },
      {
        id: 5,
        name: "Date night",
        time: "6PM",
        datetime: "2022-01-08T18:00",
        href: "#",
      },
    ],
  },
  {
    date: "2022-02-12",
    isCurrentMonth: true,
    events: [
      {
        id: 4,
        name: "Bidasoa Irun - Morrazo",
        time: "6PM",
        datetime: "2022-01-08T18:00",
        href: "#",
      },
      {
        id: 5,
        name: "Abanca Ademar - Unicaja Banco Sinfín",
        time: "6PM",
        datetime: "2022-01-08T18:00",
        href: "#",
      },
    ],
  },
  {
    date: "2022-02-13",
    isCurrentMonth: true,
    events: [
      {
        id: 1,
        name: "BM. Granollers - BM. Benidorm",
        time: "6PM",
        datetime: "2022-01-08T18:00",
        href: "#",
      },
      {
        id: 2,
        name: "Ángel Ximénez - Recoletas AT. ",
        time: "6PM",
        datetime: "2022-01-08T18:00",
        href: "#",
      },
    ],
  },
  {
    date: "2022-02-14",
    isCurrentMonth: true,
    events: [
      {
        id: 1,
        name: "Conoce a Sergio Casares",
        time: "6PM",
        datetime: "2022-01-08T18:00",
        href: "#",
      },
    ],
  },
  { date: "2022-02-15", isCurrentMonth: true, events: [] },
  {
    date: "2022-02-16",
    isCurrentMonth: true,
    events: [
      {
        id: 6,
        name: "Visita Polideportivo Huerta del Rey",
        time: "2PM",
        datetime: "2022-01-25T14:00",
        href: "#",
      },
    ],
  },
  { date: "2022-02-17", isCurrentMonth: true, events: [] },
  {
    date: "2022-02-18",
    isCurrentMonth: true,
    events: [
      {
        id: 1,
        name: "Conoce a Lidio Jimenez",
        time: "6PM",
        datetime: "2022-01-08T18:00",
        href: "#",
      },
    ],
  },
  {
    date: "2022-02-19",
    isCurrentMonth: true,
    events: [
      {
        id: 2,
        name: "Barça - Bidasoa Irun",
        time: "12AM",
        datetime: "2022-01-08T18:00",
        href: "#",
      },
      {
        id: 3,
        name: "Morrazo - Incarlopsa Cuenca",
        time: "17PM",
        datetime: "2022-01-08T18:00",
        href: "#",
      },
      {
        id: 4,
        name: "Date night",
        time: "6PM",
        datetime: "2022-01-08T18:00",
        href: "#",
      },
      {
        id: 5,
        name: "Date night",
        time: "6PM",
        datetime: "2022-01-08T18:00",
        href: "#",
      },
    ],
  },
  {
    date: "2022-02-20",
    isCurrentMonth: true,
    events: [
      {
        id: 2,
        name: "Unicaja Sinfín - BM.Logroño La Rioja",
        time: "12AM",
        datetime: "2022-01-08T18:00",
        href: "#",
      },
      {
        id: 3,
        name: "Bada Huesca - Recoletas AT. Valladolid",
        time: "12:15AM",
        datetime: "2022-01-08T18:00",
        href: "#",
      },
      {
        id: 4,
        name: "Date night",
        time: "6PM",
        datetime: "2022-01-08T18:00",
        href: "#",
      },
      {
        id: 5,
        name: "Date night",
        time: "6PM",
        datetime: "2022-01-08T18:00",
        href: "#",
      },
    ],
  },
  { date: "2022-02-21", isCurrentMonth: true, events: [] },
  {
    date: "2022-02-22",
    isCurrentMonth: true,
    events: [
      {
        id: 1,
        name: "Conoce a Joaquim Nazaré",
        time: "6PM",
        datetime: "2022-01-08T18:00",
        href: "#",
      },
    ],
  },
  {
    date: "2022-02-23",
    isCurrentMonth: true,
    events: [
      {
        id: 1,
        name: "Conoce a Pol Valera",
        time: "6PM",
        datetime: "2022-01-08T18:00",
        href: "#",
      },
    ],
  },
  { date: "2022-02-24", isCurrentMonth: true, events: [] },
  {
    date: "2022-02-25",
    isCurrentMonth: true,
    events: [
      {
        id: 2,
        name: "Ángel Ximénex - Bada Huesca",
        time: "6PM",
        datetime: "2022-01-08T18:00",
        href: "#",
      },
    ],
  },
  {
    date: "2022-02-26",
    isCurrentMonth: true,
    isToday: true,
    isSelected: true,
    events: [
      {
        id: 2,
        name: "BM. Granollers - Morrazo",
        time: "6PM",
        datetime: "2022-01-08T18:00",
        href: "#",
      },
      {
        id: 3,
        name: "Incarlopsa Cuenca - Barça",
        time: "6PM",
        datetime: "2022-01-08T18:00",
        href: "#",
      },
      {
        id: 4,
        name: "Date night",
        time: "6PM",
        datetime: "2022-01-08T18:00",
        href: "#",
      },
      {
        id: 5,
        name: "Date night",
        time: "6PM",
        datetime: "2022-01-08T18:00",
        href: "#",
      },
      {
        id: 4,
        name: "Date night",
        time: "6PM",
        datetime: "2022-01-08T18:00",
        href: "#",
      },
      {
        id: 3,
        name: "Date night",
        time: "6PM",
        datetime: "2022-01-08T18:00",
        href: "#",
      },

      {
        id: 5,
        name: "Date night",
        time: "6PM",
        datetime: "2022-01-08T18:00",
        href: "#",
      },
    ],
  },
  {
    date: "2022-02-27",
    isCurrentMonth: true,
    events: [
      {
        id: 2,
        name: "Recoletas AT. - BM. Benidorm",
        time: "6PM",
        datetime: "2022-01-08T18:00",
        href: "#",
      },
    ],
  },
  {
    date: "2022-02-28",
    isCurrentMonth: true,
    events: [
      {
        id: 1,
        name: "Visita Palau D'esports de Granollers",
        time: "6PM",
        datetime: "2022-01-08T18:00",
        href: "#",
      },
    ],
  },
  { date: "2022-03-1", events: [] },
  { date: "2022-03-2", events: [] },
  { date: "2022-03-3", events: [] },
  { date: "2022-03-4", events: [] },
  { date: "2022-03-5", events: [] },
  { date: "2022-03-6", events: [] },
  { date: "2022-03-7", events: [] },
  { date: "2022-03-8", events: [] },
  { date: "2022-03-9", events: [] },
  { date: "2022-03-10", events: [] },
  { date: "2022-03-11", events: [] },
  { date: "2022-03-12", events: [] },
  { date: "2022-03-13", events: [] },
];
const selectedDay = days.find((day) => day.isSelected);

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Calendar() {
  return (
    <>
      <Navbar />
      <div className="lg:flex lg:h-full lg:flex-col p-10 mt-8">
        <header className="relative z-20 flex items-center justify-between border-b border-gray-200 py-4 px-6 lg:flex-none">
          <h1 className="text-3xl font-semibold text-white">
            <time dateTime="2022-01">Febrero 2022</time>
          </h1>
          <div className="flex items-center">
            <div className="flex items-center rounded-md shadow-sm md:items-stretch">
              <button
                type="button"
                className="flex items-center justify-center rounded-l-md border border-r-0 border-gray-300 bg-white py-2 pl-3 pr-4 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:px-2 md:hover:bg-gray-50"
              >
                <span className="sr-only">Previous month</span>
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                className="hidden border-t border-b border-gray-300 bg-white px-3.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 focus:relative md:block"
              >
                Hoy
              </button>
              <span className="relative -mx-px h-5 w-px bg-gray-300 md:hidden" />
              <button
                type="button"
                className="flex items-center justify-center rounded-r-md border border-l-0 border-gray-300 bg-white py-2 pl-4 pr-3 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:px-2 md:hover:bg-gray-50"
              >
                <span className="sr-only">Next month</span>
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden md:ml-4 md:flex md:items-center">
              <Menu as="div" className="relative">
                <Menu.Button
                  type="button"
                  className="flex items-center rounded-md border border-gray-300 bg-white py-2 pl-3 pr-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
                >
                  Vista Mes
                  <ChevronDownIcon
                    className="ml-2 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </Menu.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="focus:outline-none absolute right-0 mt-3 w-36 origin-top-right overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Vista Día
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Vista Semana
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Vista Mes
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Vista Año
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
              <div className="ml-6 h-6 w-px bg-gray-300" />
              <button
                type="button"
                className="focus:outline-none ml-6 rounded-md border border-transparent bg-bluesooft py-2 px-4 text-sm font-medium text-white shadow-sm "
              >
                Añadir Evento
              </button>
            </div>
            <Menu as="div" className="relative ml-6 md:hidden">
              <Menu.Button className="-mx-2 flex items-center rounded-full border border-transparent p-2 text-gray-400 hover:text-gray-500">
                <span className="sr-only">Open menu</span>
                <DotsHorizontalIcon className="h-5 w-5" aria-hidden="true" />
              </Menu.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="focus:outline-none absolute right-0 mt-3 w-36 origin-top-right divide-y divide-gray-100 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Create event
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Go to today
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Day view
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Week view
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Month view
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Year view
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </header>
        <div className="shadow ring-1 ring-black ring-opacity-5 lg:flex lg:flex-auto lg:flex-col">
          <div className="grid grid-cols-7 gap-px border-b border-gray-300 bg-gray-200 text-center text-xs font-semibold leading-6 text-gray-700 lg:flex-none">
            <div className="bg-white py-2">
              M<span className="sr-only sm:not-sr-only">on</span>
            </div>
            <div className="bg-white py-2">
              T<span className="sr-only sm:not-sr-only">ue</span>
            </div>
            <div className="bg-white py-2">
              W<span className="sr-only sm:not-sr-only">ed</span>
            </div>
            <div className="bg-white py-2">
              T<span className="sr-only sm:not-sr-only">hu</span>
            </div>
            <div className="bg-white py-2">
              F<span className="sr-only sm:not-sr-only">ri</span>
            </div>
            <div className="bg-white py-2">
              S<span className="sr-only sm:not-sr-only">at</span>
            </div>
            <div className="bg-white py-2">
              S<span className="sr-only sm:not-sr-only">un</span>
            </div>
          </div>
          <div className="flex bg-gray-200 text-xs leading-6 text-gray-700 lg:flex-auto">
            <div className="hidden w-full lg:grid lg:grid-cols-7 lg:grid-rows-6 lg:gap-px">
              {days.map((day) => (
                <div
                  key={day.date}
                  className={classNames(
                    day.isCurrentMonth
                      ? "bg-white"
                      : "bg-gray-50 text-gray-500",
                    "relative py-2 px-3"
                  )}
                >
                  <time
                    dateTime={day.date}
                    className={
                      day.isToday
                        ? "flex h-6 w-6 items-center justify-center rounded-full bg-bluesooft font-semibold text-white"
                        : undefined
                    }
                  >
                    {day.date.split("-").pop().replace(/^0/, "")}
                  </time>
                  {day.events.length > 0 && (
                    <ol className="mt-2">
                      {day.events.slice(0, 2).map((event) => (
                        <li key={event.id}>
                          <a href={event.href} className="group flex">
                            <p className="flex-auto truncate font-medium text-gray-900 group-hover:text-bluesooft">
                              {event.name}
                            </p>
                            <time
                              dateTime={event.datetime}
                              className="ml-3 hidden flex-none text-gray-500 group-hover:text-bluesooft xl:block"
                            >
                              {event.time}
                            </time>
                          </a>
                        </li>
                      ))}
                      {day.events.length > 2 && (
                        <li className="text-gray-500">
                          + {day.events.length - 2} more
                        </li>
                      )}
                    </ol>
                  )}
                </div>
              ))}
            </div>
            <div className="isolate grid w-full grid-cols-7 grid-rows-6 gap-px lg:hidden">
              {days.map((day) => (
                <button
                  key={day.date}
                  type="button"
                  className={classNames(
                    day.isCurrentMonth ? "bg-white" : "bg-gray-50",
                    (day.isSelected || day.isToday) && "font-semibold",
                    day.isSelected && "text-white",
                    !day.isSelected && day.isToday && "text-indigo-600",
                    !day.isSelected &&
                      day.isCurrentMonth &&
                      !day.isToday &&
                      "text-gray-900",
                    !day.isSelected &&
                      !day.isCurrentMonth &&
                      !day.isToday &&
                      "text-gray-500",
                    "flex h-14 flex-col py-2 px-3 hover:bg-gray-100 focus:z-10"
                  )}
                >
                  <time
                    dateTime={day.date}
                    className={classNames(
                      day.isSelected &&
                        "flex h-6 w-6 items-center justify-center rounded-full",
                      day.isSelected && day.isToday && "bg-bluesooft",
                      day.isSelected && !day.isToday && "bg-gray-900",
                      "ml-auto"
                    )}
                  >
                    {day.date.split("-").pop().replace(/^0/, "")}
                  </time>
                  <p className="sr-only">{day.events.length} events</p>
                  {day.events.length > 0 && (
                    <div className="-mx-0.5 mt-auto flex flex-wrap-reverse">
                      {day.events.map((event) => (
                        <div
                          key={event.id}
                          className="mx-0.5 mb-1 h-1.5 w-1.5 rounded-full bg-gray-400"
                        />
                      ))}
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
        {selectedDay?.events.length > 0 && (
          <div className="py-10 px-4 sm:px-6 lg:hidden">
            <ol className="divide-y divide-gray-100 overflow-hidden rounded-lg bg-white text-sm shadow ring-1 ring-black ring-opacity-5">
              {selectedDay.events.map((event) => (
                <li
                  key={event.id}
                  className="group flex p-4 pr-6 focus-within:bg-gray-50 hover:bg-gray-50"
                >
                  <div className="flex-auto">
                    <p className="font-semibold text-gray-900">{event.name}</p>
                    <time
                      dateTime={event.datetime}
                      className="mt-2 flex items-center text-gray-700"
                    >
                      <ClockIcon
                        className="mr-2 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      {event.time}
                    </time>
                  </div>
                  <a
                    href={event.href}
                    className="ml-6 flex-none self-center rounded-md border border-gray-300 bg-white py-2 px-3 font-semibold text-gray-700 opacity-0 shadow-sm hover:bg-gray-50 focus:opacity-100 group-hover:opacity-100"
                  >
                    Edit<span className="sr-only">, {event.name}</span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </>
  );
}
