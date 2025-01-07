import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import useCart from "../hooks/useCart";

const FoodCart = ({ item }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxios();
  const [, refetch] = useCart();

  const handleAddToCart = () => {
    if (user && user.email) {
      const cartItem = {
        menuId: item._id,
        email: user.email,
        name: item.name,
        image: item.image,
        price: item.price,
      };

      axiosSecure.post("cart", cartItem).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${item.name} added to your cart`,
            timer: 2000,
            showConfirmButton: false,
            width: "20rem",
            customClass: {
              title: "text-lg",
              icon: "text-xs",
            },
          });
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "Login required!",
        text: "Please log in to add items to your cart.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#bb8506",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: location.pathname });
        }
      });
    }
  };
  return (
    <div className="card bg-[#F3F3F3] rounded-none ">
      <figure className="h-[200px]">
        <img
          src={item.image}
          alt="Shoes"
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="card-body items-center text-center p-5">
        <h2 className="card-title">{item.name}</h2>
        <p>{item.recipe}</p>
        <p className="font-cinzel font-semibold my-3 text-lg">
          Price: {item.price}
        </p>
        <div className="card-actions">
          <button
            onClick={handleAddToCart}
            className="btn bg-[#E8E8E8] text-[#BB8506] border-b-2 border-b-[#BB8506] uppercase hover:bg-[#1F2937]"
          >
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCart;
