import { IoWalletSharp } from "react-icons/io5";
import UserHomeCart from "./UserHomeCart";
import { HiMiniBuildingStorefront } from "react-icons/hi2";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import UseMenu from "../../../hooks/UseMenu";
import { MdPhoneInTalk } from "react-icons/md";

const UserHome = () => {
  const { user } = useContext(AuthContext);
  const [menu] = UseMenu();
  return (
    <div className="px-4 py-20 lg:py-0 lg:px-0">
      <h2 className="text-3xl font-cinzel font-semibold">
        Hi, {user?.displayName} Welcome Back!
      </h2>

      <div className="grid grid-cols-3 gap-6">
        <UserHomeCart
          Icon={IoWalletSharp}
          item="menu"
          count={menu.length}
          gradient={{
            background:
              "linear-gradient(90deg, rgb(187, 52, 245), rgb(252, 219, 255))",
          }}
        />
        <UserHomeCart
          Icon={HiMiniBuildingStorefront}
          item="shop"
          count={menu.length}
          gradient={{
            background:
              "linear-gradient(90.00deg, rgb(211, 162, 86),rgb(253, 232, 192) 100%)",
          }}
        />
        <UserHomeCart
          Icon={MdPhoneInTalk}
          item="contact"
          count={menu.length}
          gradient={{
            background:
              "linear-gradient(90.00deg, rgb(254, 72, 128),rgb(254, 205, 233) 100%)",
          }}
        />
      </div>

      <div>
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default UserHome;
