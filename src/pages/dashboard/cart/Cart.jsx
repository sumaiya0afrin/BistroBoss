import useCart from "../../../hooks/useCart";
import SectionTitle from "../../../shared/SectionTitle";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { RiDeleteBin6Fill } from "react-icons/ri";

const Cart = () => {
  const [cart] = useCart();
  console.log(cart);

  return (
    <div className="px-4 py-20 lg:py-0 lg:px-0">
      <SectionTitle
        heading="Wanna add more?"
        subHeading="My cart"
      ></SectionTitle>

      <div className="bg-white max-w-4xl mx-auto py-10 px-8 mb-12">
        <div className="grid md:grid-cols-3 items-center justify-center text-base lg:text-2xl font-bold font-cinzel mb-4 space-y-2 md:space-y-0">
          <p>Total orders: {cart.length}</p>
          <p>total price: $88.2</p>
          <button className="btn md:justify-self-end bg-[#D1A054] text-white lg:text-lg">
            Pay
          </button>
        </div>
        <Table>
          <TableCaption>A list of your added items.</TableCaption>
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
                  <button className="btn bg-[#B91C1C] text-white md:text-lg">
                    <RiDeleteBin6Fill />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={4}>Total</TableCell>
              <TableCell className="text-right">$2,500.00</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
};

export default Cart;
