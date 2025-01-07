import { Link, NavLink } from "react-router-dom";
import { IoCart, IoMail, IoWalletSharp } from "react-icons/io5";
import { GoHomeFill } from "react-icons/go";
import { FaCalendarAlt } from "react-icons/fa";
import { MdReviews, MdShoppingBag } from "react-icons/md";
import { BsFillCalendar2CheckFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

const PanelNavbar = () => {
  const links = (
    <>
      <li>
        <div className="flex-1 mb-4 md:mb-10">
          <Link to="/" className="md:text-xl font-cinzel font-bold">
            BISTRO BOSS <br />{" "}
            <span className="font-medium tracking-wider">Restaurant</span>
          </Link>
        </div>
      </li>
      <li>
        <NavLink to="/dashboard/userHome">
          <GoHomeFill className="text-lg" />
          User Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/reservation">
          <FaCalendarAlt className="text-lg" />
          reservation
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/reservation">
          <IoWalletSharp className="text-lg" />
          payment history
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/cart">
          <IoCart className="text-lg" />
          My Cart
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/addReview">
          <MdReviews className="text-lg" />
          add review
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/myBooking">
          <BsFillCalendar2CheckFill className="text-lg" />
          my booking
        </NavLink>
      </li>

      <div className="border my-4"></div>
      <li>
        <NavLink to="/">
          <GoHomeFill className="text-lg" />
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/menu">
          <GiHamburgerMenu className="text-lg" />
          Menu
        </NavLink>
      </li>
      <li>
        <NavLink to="/menu">
          <MdShoppingBag className="text-lg" />
          Shop
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact">
          <IoMail className="text-lg" />
          contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="flex lg:hidden">
      <div className="navbar fixed z-10 bg-opacity-90 bg-[#D1A054] max-w-screen-2xl mx-auto text-white md:px-10">
        <Drawer>
          <div className="dropdown">
            <DrawerTrigger asChild>
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
            </DrawerTrigger>
            <DrawerContent className="bg-[#D1A054] min-h-screen">
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content  rounded-box z-[1] mt-3 w-full  p-2 min-h-screen font-cinzel"
              >
                {links}
              </ul>
            </DrawerContent>
          </div>
        </Drawer>
      </div>
    </div>
  );
};

export default PanelNavbar;
