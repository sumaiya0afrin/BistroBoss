import { useContext } from "react";
import { RiGoogleLine } from "react-icons/ri";
import { AuthContext } from "../provider/AuthProvider";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { goggleSignIn } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();

  const location = useLocation();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    goggleSignIn().then((res) => {
      console.log(res);

      const userInfo = {
        name: res.user?.displayName,
        email: res.user?.email,
      };

      axiosPublic.post("/user", userInfo).then((res) => {
        console.log(res.data);
        navigate(location?.state ? location.state : "/");
      });
    });
  };
  return (
    <button onClick={handleGoogleSignIn}>
      <RiGoogleLine />
    </button>
  );
};

export default SocialLogin;
