import { GoHomeFill } from "react-icons/go";
import error from "../../assets/404.gif";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div className="max-h-screen">
      <img src={error} className="w-1/2 mx-auto" alt="" />
      <div className="text-center">
        <Link
          to="/"
          className="w-fit self-center btn bg-gradient-to-r from-[#835D23] to-[#B58130] text-white my-4 hover:border-[#D1A054] hover:bg-transparent hover:text-white"
        >
          Back To Home <GoHomeFill className="text-xl" />
        </Link>
      </div>
    </div>
  );
};

export default Error;
