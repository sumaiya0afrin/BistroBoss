import { Link, NavLink, Outlet } from "react-router-dom";
import { IoCart, IoMail, IoWalletSharp } from "react-icons/io5";
import { GoHomeFill } from "react-icons/go";
import { FaCalendarAlt } from "react-icons/fa";
import { MdReviews, MdShoppingBag } from "react-icons/md";
import { BsFillCalendar2CheckFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import PanelNavbar from "../shared/panelNavbar";

const DashBoard = () => {
  return (
    <div>
      <PanelNavbar />
      <div className="lg:flex">
        <div className="w-64 min-h-screen bg-[#D1A054] hidden lg:block">
          <ul className="menu font-cinzel">
            <li>
              <div className="flex-1 mb-10">
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
          </ul>
        </div>
        <div className="flex-1 bg-gray-100">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
