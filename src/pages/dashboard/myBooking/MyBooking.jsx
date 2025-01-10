import { RiDeleteBin6Fill } from "react-icons/ri";
import useReserve from "../../../hooks/useReserve";
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
import Swal from "sweetalert2";
import useAxios from "../../../hooks/useAxios";

const MyBooking = () => {
  const [reserve, refetch] = useReserve();

  const axiosSecure = useAxios();

  const handleBookingDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#D1A054",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/reserve/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your reservation has been deleted.",
              icon: "success",
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
        heading="My bookings"
        subHeading="Excellent Ambience"
      ></SectionTitle>

      <div className="bg-white max-w-4xl mx-auto py-10 px-8 mb-12">
        <div className="flex items-center justify-between text-base lg:text-2xl font-bold font-cinzel mb-4 space-y-2 md:space-y-0">
          <p>Total Bookings: {reserve.length}</p>

          <button className="btn md:justify-self-end bg-[#D1A054] text-white lg:text-lg hover:border-[#D1A054] hover:bg-transparent hover:text-[#D1A054]">
            Pay
          </button>
        </div>
        <Table>
          {reserve.length > 0 ? (
            <TableCaption>A list of your reservation.</TableCaption>
          ) : (
            <TableCaption className=" text-red-400">
              {" "}
              No bookings added yet
            </TableCaption>
          )}

          <TableHeader className="bg-[#D1A054]">
            <TableRow className="uppercase">
              <TableHead className="w-[100px] "></TableHead>
              <TableHead className="text-white">person name</TableHead>
              <TableHead className="text-white">guest number</TableHead>
              <TableHead className="text-white">Date</TableHead>
              <TableHead className="text-white">Time</TableHead>
              <TableHead className="text-center text-white">action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {reserve.map((item, index) => (
              <TableRow key={item._id}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell className="capitalize">{item.name}</TableCell>
                <TableCell>{item.guest} Guest</TableCell>
                <TableCell>{item.date}</TableCell>
                <TableCell>{item.time}</TableCell>
                <TableCell className="text-center">
                  <button
                    onClick={() => handleBookingDelete(item._id)}
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

export default MyBooking;
