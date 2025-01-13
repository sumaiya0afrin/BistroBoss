import { RiDeleteBin6Fill } from "react-icons/ri";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../hooks/useAxios";
import { FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import SectionTitle from "../../../shared/SectionTitle";
const AllUser = () => {
  const axiosSecure = useAxios();
  const { data: user = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/user");
      return res.data;
    },
  });

  const handleUserDelete = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#D1A054",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete user!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/user/${user._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: `${user.name} user has been deleted.`,
              icon: "success",
              confirmButtonColor: "#D1A054",
            });
          }
        });
      }
    });
  };

  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/user/admin/${user._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          title: `${user.name} is an Admin Now!`,
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  return (
    <div className="px-4 py-20 lg:py-0 lg:px-0">
      <SectionTitle
        heading="manage all users"
        subHeading="How many??"
      ></SectionTitle>
      <div className="bg-white max-w-4xl mx-auto py-10 px-8 mb-12">
        <div className="flex items-center justify-between text-base lg:text-2xl font-bold font-cinzel mb-4 space-y-2 md:space-y-0">
          <p>Total Users: {user.length}</p>
        </div>
        <Table>
          {user.length > 0 ? (
            <TableCaption>A list of all users.</TableCaption>
          ) : (
            <TableCaption className=" text-red-400"> No users</TableCaption>
          )}

          <TableHeader className="bg-[#D1A054]">
            <TableRow className="uppercase">
              <TableHead className="w-[100px] "></TableHead>
              <TableHead className="text-white">name</TableHead>
              <TableHead className="text-white">email</TableHead>
              <TableHead className="text-white">role</TableHead>
              <TableHead className="text-center text-white">action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {user.map((item, index) => (
              <TableRow key={item._id}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell className="capitalize">{item.name}</TableCell>

                <TableCell>{item.email}</TableCell>
                <TableCell>
                  {item.role === "admin" ? (
                    "Admin"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(item)}
                      className="btn bg-[#D1A054] text-white md:text-lg hover:text-[#B91C1C] hover:bg-transparent"
                    >
                      <FaUsers />
                    </button>
                  )}
                </TableCell>
                <TableCell className="text-center">
                  <button
                    onClick={() => handleUserDelete(item)}
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

export default AllUser;
