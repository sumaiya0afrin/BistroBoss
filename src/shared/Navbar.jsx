import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { RiShoppingCart2Fill } from "react-icons/ri";
import useCart from "../hooks/useCart";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-[#EEFF25]" : "")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "text-[#EEFF25]" : "")}
        >
          Contact Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/userHome"
          className={({ isActive }) => (isActive ? "text-[#EEFF25]" : "")}
        >
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/menu"
          className={({ isActive }) => (isActive ? "text-[#EEFF25]" : "")}
        >
          Our Menu
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/shop/salad"
          className={({ isActive }) => (isActive ? "text-[#EEFF25]" : "")}
        >
          Our Shop
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/cart"
          className={({ isActive }) => (isActive ? "text-[#EEFF25]" : "")}
        >
          <RiShoppingCart2Fill className="text-3xl text-green-600" />
          <Badge className="-mt-4 -ml-2">{cart.length}</Badge>
        </NavLink>
      </li>
      {user ? (
        <>
          <div
            className="tooltip tooltip-bottom capitalize"
            data-tip={user?.displayName}
          >
            <Avatar className="hidden lg:block mr-2">
              <AvatarImage src={user.photoURL} alt={user.displayName} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <li>
            <Button onClick={handleLogout}>Logout</Button>
          </li>
        </>
      ) : (
        <>
          {" "}
          <li>
            <Button variant="link" className="uppercase text-white">
              <NavLink to="/register">Register</NavLink>
            </Button>
          </li>
          <li>
            <Button asChild>
              <NavLink to="/login">Login</NavLink>
            </Button>
          </li>
        </>
      )}
    </>
  );

  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-30 bg-black max-w-screen-2xl mx-auto text-white md:px-10">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="flex-1">
          <a className="text-xl md:text-2xl font-cinzel font-bold">
            BISTRO BOSS <br />{" "}
            <span className="font-medium tracking-wider">Restaurant</span>
          </a>
        </div>
        <div className="flex-none hidden lg:flex">
          <ul className="menu menu-horizontal px-1 uppercase items-center">
            {links}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
