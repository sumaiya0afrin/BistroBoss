import Swal from "sweetalert2";
import useCart from "../../../hooks/useCart";
import SectionTitle from "../../../shared/SectionTitle";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { RiDeleteBin6Fill } from "react-icons/ri";
import useAxios from "../../../hooks/useAxios";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, refetch] = useCart();
  const axiosSecure = useAxios();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const handleDelete = (id, name) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#D1A054",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete item!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/cart/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: `${name} has been deleted.`,
              icon: "success",
              iconColor: "#D1A054",
              confirmButtonColor: "#D1A054",
            });
          }
        });
      }
    });
  };

  return (
    <div className="px-4 py-20 lg:py-0 lg:px-0">
      <SectionTitle
        heading="Wanna add more?"
        subHeading="My cart"
      ></SectionTitle>

      <div className="bg-white max-w-4xl mx-auto py-10 px-8 mb-12">
        <div className="grid md:grid-cols-3 items-center justify-center text-base lg:text-2xl font-bold font-cinzel mb-4 space-y-2 md:space-y-0">
          <p>Total orders: {cart.length}</p>
          <p>total price: ${totalPrice}</p>
          <Link
            to="/payment"
            className="btn md:justify-self-end bg-[#D1A054] text-white lg:text-lg hover:border-[#D1A054] hover:bg-transparent hover:text-[#D1A054]"
          >
            Pay
          </Link>
        </div>
        <Table>
          {cart.length > 0 ? (
            <TableCaption>A list of your added items.</TableCaption>
          ) : (
            <TableCaption className=" text-red-400">
              {" "}
              No items added yet
            </TableCaption>
          )}
          <TableHeader className="bg-[#D1A054]">
            <TableRow className="uppercase">
              <TableHead className="w-[100px] "></TableHead>
              <TableHead className="text-white">item image</TableHead>
              <TableHead className="text-white">item name</TableHead>
              <TableHead className="text-white">price</TableHead>
              <TableHead className="text-center text-white">action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {cart.map((item, index) => (
              <TableRow key={item._id}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>
                  <img src={item.image} className="w-20" alt={item.name} />
                </TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.price}</TableCell>
                <TableCell className="text-center">
                  <button
                    onClick={() => handleDelete(item._id, item.name)}
                    className="btn bg-[#B91C1C] text-white md:text-lg hover:text-[#B91C1C] hover:bg-transparent"
                  >
                    <RiDeleteBin6Fill />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Cart;
