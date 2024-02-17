// import { Fragment } from "react";
// import { Disclosure, Menu, Transition } from "@headlessui/react";
// import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
// import { Link, NavLink } from "react-router-dom";
// const navigation = [
//   { name: "Inicio", href: "/", current: false },
//   { name: "Contacto", href: "/contact", current: false },
//   { name: "Servicio", href: "#", current: false },
// ];
// const NavbarTail = () => {
//   function classNames(...classes) {
//     return classes.filter(Boolean).join(" ");
//   }
//   return (
//     <Disclosure as="nav" className="bg-neutral-900">
//       {({ open }) => (
//         <>
//           <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//             <div className="relative flex h-16 items-center justify-between">
//               <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//                 {/* Mobile menu button*/}
//                 <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
//                   <span className="absolute -inset-0.5" />
//                   {/* <span className="sr-only ">Open main menu</span> */}
//                   {open ? (
//                     <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
//                   ) : (
//                     <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
//                   )}
//                 </Disclosure.Button>
//               </div>
//               <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
//                 <div className="flex flex-shrink-0 items-center w-44">
//                   <img
//                     className="img-fluid"
//                     src="11-removebg-preview.png"
//                     alt="Your Company"
//                   />
//                 </div>
//                 <div className="hidden sm:ml-6 sm:block ">
//                   <div className="flex space-x-4	 ">
//                     {navigation.map((item) => (
//                       <Disclosure.Button
//                         key={item.name}
//                         as={Link}
//                         to={item.href}
//                         className={classNames(
//                           item.current
//                             ? "bg-gray-800 text-white "
//                             : "text-gray-300 hover:bg-gray-700 hover:text-white",
//                           "block rounded-md px-3 py-2 text-base font-medium no-underline"
//                         )}
//                         aria-current={item.current ? "page" : undefined}
//                       >
//                         {item.name}
//                       </Disclosure.Button>
//                     ))}
//                     {/* <NavLink
//                       to={"/"}
//                       className=" text-neutral-100 hover:bg-neutral-700 hover:text-white rounded-md px-3 py-2 text-md font-medium no-underline"
//                     >
//                       Inicio
//                     </NavLink>
//                     <NavLink
//                       to={"/"}
//                       className=" text-neutral-100 hover:bg-neutral-700 hover:text-white rounded-md px-3 py-2 text-md font-medium no-underline"
//                     >
//                       Contacto
//                     </NavLink>
//                     <NavLink
//                       to={"/"}
//                       className=" text-neutral-100 hover:bg-neutral-700 hover:text-white rounded-md px-3 py-2 text-md font-medium no-underline"
//                     >
//                       Servicios
//                     </NavLink> */}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <Disclosure.Panel className="sm:hidden">
//             <div className="space-y-1 px-2 pb-3 pt-2">
//               {navigation.map((item) => (
//                 <Disclosure.Button
//                   key={item.name}
//                   as={Link}
//                   to={item.href}
//                   className={classNames(
//                     item.current
//                       ? "bg-gray-800 text-white"
//                       : "text-gray-300 hover:bg-gray-700 hover:text-white",
//                     "block rounded-md px-3 py-2 text-base font-medium"
//                   )}
//                   aria-current={item.current ? "page" : undefined}
//                 >
//                   {item.name}
//                 </Disclosure.Button>
//               ))}
//             </div>
//           </Disclosure.Panel>
//         </>
//       )}
//     </Disclosure>
//   );
// };

// export default NavbarTail;

import React from "react";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";
const navigation = [
  { name: "Inicio", to: "/", current: false },
  { name: "Contacto", to: "/contact", current: false },
  { name: "Sobre nosotros", to: "/aboutus", current: false },
  { name: "Servicio", to: "#", current: false },
];
const NavbarTail = () => {
  const { pathname } = useLocation();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleClick = () => setMobileMenuOpen(!mobileMenuOpen)
  return (
    <>
      <header className="bg-neutral-900">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link to={"/"} className="-m-1.5 p-1.5 w-44">
              {/* <span className="sr-only">Your Company</span> */}
              <img className="img-fluid" src="11-removebg-preview.png" alt="Logo JDB Devs" />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6 " aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className={`text-sm font-semibold leading-6 px-2 py-1 text-md no-underline rounded-md ${
                  pathname === item.to
                    ? "text-white bg-stone-800"
                    : "text-neutral-100 hover:bg-neutral-700 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-neutral-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5 w-44">
                {/* <span className="sr-only">Your Company</span> */}
                <img
                  className="img-fluid"
                  src="11-removebg-preview.png"
                  alt="Logo JDB Devs"
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      onClick={handleClick}
                      className={`block text-base font-semibold leading-7 text-neutral-100 hover:bg-neutral-700 hover:text-white rounded-md px-2 py-1 text-md  no-underline ${
                        pathname === item.to
                          ? "text-white bg-stone-800"
                          : "text-neutral-100 hover:bg-neutral-700 hover:text-white"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </>
  );
};

export default NavbarTail;
