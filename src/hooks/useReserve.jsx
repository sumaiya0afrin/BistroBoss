import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import useAuth from "./useAuth";

const useReserve = () => {
  const axiosSecure = useAxios();
  const { user } = useAuth();
  const { refetch, data: reserve = [] } = useQuery({
    queryKey: ["reserve", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/reserve?email=${user.email}`);
      return res.data;
    },
  });
  return [reserve, refetch];
};

export default useReserve;
