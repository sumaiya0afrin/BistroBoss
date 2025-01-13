import { Link, NavLink, Outlet } from "react-router-dom";
import { IoCart, IoMail, IoWalletSharp } from "react-icons/io5";
import { GoHomeFill } from "react-icons/go";
import { FaBook, FaCalendarAlt, FaList, FaUsers } from "react-icons/fa";
import { MdReviews, MdShoppingBag } from "react-icons/md";
import { BsFillCalendar2CheckFill } from "react-icons/bs";
import { ImSpoonKnife } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import PanelNavbar from "../shared/panelNavbar";
import useAdmin from "../hooks/useAdmin";

const DashBoard = () => {
  const [isAdmin] = useAdmin();
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

            {isAdmin ? (
              <>
                {" "}
                <li>
                  <NavLink to="/dashboard/adminHome">
                    <GoHomeFill className="text-lg" />
                    Admin Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/addItem">
                    <ImSpoonKnife className="text-lg" />
                    add items
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manage-item">
                    <FaList className="text-lg" />
                    manage items
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manage-booking">
                    <FaBook className="text-lg" />
                    manage bookings
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/all-user">
                    <FaUsers className="text-lg" />
                    all users
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                {" "}
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
                  <NavLink to="/dashboard/payment">
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
              </>
            )}

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
              <NavLink to="/shop/salad">
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
