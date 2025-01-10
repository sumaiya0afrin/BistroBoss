import { PiPhoneCallFill } from "react-icons/pi";
import SectionTitle from "../../../shared/SectionTitle";
import Location from "../../contact/Location";
import { MdLocationOn } from "react-icons/md";
import { TbClockHour3Filled } from "react-icons/tb";
import { Controller, useForm } from "react-hook-form";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import TimePicker from "react-time-picker";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import { FaRegCalendarDays } from "react-icons/fa6";
import Swal from "sweetalert2";
import useAxios from "../../../hooks/useAxios";
import useReserve from "../../../hooks/useReserve";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";

const Reservation = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxios();
  const [, refetch] = useReserve();
  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const reservation = {
      name: data.name,
      phone: parseInt(data.phone),
      email: data.mail,
      guest: parseInt(data.guest),
      date: data.date ? format(data.date, "yyyy-MM-dd") : null,
      time: data.time ? data.time : null,
    };
    axiosSecure.post("reserve", reservation).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "A Table Booked for You",
          timer: 2000,
          showConfirmButton: false,
          width: "20rem",
          customClass: {
            title: "text-lg",
            icon: "text-xs",
          },
        });
        reset();
        refetch();
      }
    });
  };
  return (
    <div className="px-4 py-20 lg:py-0 bg-white">
      <SectionTitle
        heading="book a table"
        subHeading="Reservation"
      ></SectionTitle>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-screen-md mx-auto"
      >
        <div className="grid md:grid-cols-3 gap-2 md:gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date*</span>
            </label>

            <Controller
              name="date"
              required
              control={control}
              defaultValue={null}
              rules={{
                required: "Date is required",
              }}
              render={({ field }) => (
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        " justify-between text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>mm/dd/yyyy</span>
                      )}
                      <CalendarIcon />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={(selectedDate) => field.onChange(selectedDate)}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              )}
            />
            {errors.date && (
              <p role="alert" className="text-xs text-red-500">
                {errors.date?.message}
              </p>
            )}
          </div>

          {/* Time Picker */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Time*</span>
            </label>

            <Controller
              name="time"
              control={control}
              defaultValue={null}
              rules={{
                required: "Time is required",
              }}
              render={({ field }) => (
                <TimePicker
                  onChange={field.onChange}
                  value={field.value}
                  format="h:mm a"
                  clearIcon={null}
                  className="rounded-md"
                />
              )}
            />
            {errors.time && (
              <p role="alert" className="text-xs text-red-500">
                {errors.time?.message}
              </p>
            )}
          </div>

          {/* guest  */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Guest*</span>
            </label>
            <Controller
              name="guest"
              control={control}
              defaultValue="" // Ensure default value is set
              rules={{
                required: "Guest number is required",
              }}
              render={({ field }) => (
                <Select {...field} onValueChange={field.onChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Person" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="4">4</SelectItem>
                      <SelectItem value="5">5</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.guest && (
              <p role="alert" className="text-xs text-red-500">
                {errors.guest?.message}
              </p>
            )}
          </div>

          {/* name  */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name*</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-lg border border-[#D0D0D0] text-sm placeholder:text-sm"
              {...register("name", { required: true })}
              aria-invalid={errors.name ? "true" : "false"}
            />
            {errors.name?.type === "required" && (
              <p role="alert" className="text-xs text-red-500">
                Name is required
              </p>
            )}
          </div>

          {/* phone  */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Phone*</span>
            </label>
            <input
              type="text"
              placeholder="Phone Number"
              className="p-3 rounded-lg border border-[#D0D0D0] text-sm placeholder:text-sm"
              {...register("phone", {
                required: "Phone Number is required",
              })}
              aria-invalid={errors.phone ? "true" : "false"}
            />
            {errors.phone && (
              <p role="alert" className="text-xs text-red-500">
                {errors.phone?.message}
              </p>
            )}
          </div>

          {/* email  */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email*</span>
            </label>
            <input
              type="email"
              value={user.email}
              className="p-3 rounded-lg border border-[#D0D0D0] text-sm placeholder:text-sm"
              {...register("mail", {
                required: "Email Address is required",
              })}
              aria-invalid={errors.mail ? "true" : "false"}
              readOnly
            />
            {errors.mail && (
              <p role="alert" className="text-xs text-red-500">
                {errors.mail?.message}
              </p>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="w-fit self-center btn bg-gradient-to-r from-[#835D23] to-[#B58130] text-white my-4 hover:border-[#D1A054] hover:bg-transparent hover:text-white"
        >
          Book A Table <FaRegCalendarDays className="text-xl" />
        </button>
      </form>

      <SectionTitle heading="Our Location" subHeading="Visit Us"></SectionTitle>

      <div className="grid md:grid-cols-3 gap-2">
        <Location
          title="phone"
          desc="+38 (012) 34 56 789"
          Icon={PiPhoneCallFill}
        ></Location>
        <Location
          title="address"
          desc="+38 (012) 34 56 789"
          Icon={MdLocationOn}
        ></Location>
        <Location
          title="working hour"
          desc="Mon - Fri: 08:00 - 22:00"
          desc2="Sat - Sun: 10:00 - 23:00"
          Icon={TbClockHour3Filled}
        ></Location>
      </div>
    </div>
  );
};

export default Reservation;
