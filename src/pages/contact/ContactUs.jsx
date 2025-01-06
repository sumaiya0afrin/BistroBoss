import { Helmet } from "react-helmet-async";
import Cover from "../../shared/Cover";
import menuImg from "../../assets/contact/banner.jpg";
import SectionTitle from "../../shared/SectionTitle";
import Location from "./Location";
import { PiPhoneCallFill } from "react-icons/pi";
import { MdLocationOn } from "react-icons/md";
import { TbClockHour3Filled } from "react-icons/tb";
import { useForm } from "react-hook-form";
import { GrSend } from "react-icons/gr";

const ContactUs = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Contact Us</title>
      </Helmet>
      <Cover
        img={menuImg}
        title="Contact Us"
        desc="Would you like to try a dish?"
      />

      <div className="max-w-screen-lg mx-auto mt-16 px-4 lg:px-0">
        <SectionTitle
          heading="Our Location"
          subHeading="Visit Us"
        ></SectionTitle>

        <div className="grid md:grid-cols-3 gap-6">
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

        <div className="my-12 md:my-24">
          <SectionTitle
            heading="Contact Form"
            subHeading="Send Us a Message"
          ></SectionTitle>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col bg-[#F3F3F3] p-8 md:p-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
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

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email*</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="p-3 rounded-lg border border-[#D0D0D0] text-sm placeholder:text-sm"
                  {...register("mail", {
                    required: "Email Address is required",
                  })}
                  aria-invalid={errors.mail ? "true" : "false"}
                />
                {errors.mail && (
                  <p role="alert" className="text-xs text-red-500">
                    {errors.mail?.message}
                  </p>
                )}
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone*</span>
              </label>
              <input
                placeholder="Enter your phone number"
                className="p-3 rounded-lg border border-[#D0D0D0] text-sm placeholder:text-sm"
                {...register("phone", {
                  required: "Phone number is required",
                })}
                aria-invalid={errors.phone ? "true" : "false"}
              />
              {errors.phone && (
                <p role="alert" className="text-xs text-red-500">
                  {errors.phone?.message}
                </p>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Message*</span>
              </label>
              <textarea
                placeholder="Write your message here"
                className="p-3 rounded-lg border border-[#D0D0D0] text-sm placeholder:text-sm h-48"
                {...register("message", {
                  required: "Message is required",
                })}
                aria-invalid={errors.message ? "true" : "false"}
              />
              {errors.message && (
                <p role="alert" className="text-xs text-red-500">
                  {errors.message?.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-fit self-center btn bg-gradient-to-r from-[#835D23] to-[#B58130] text-white my-4 hover:border-[#D1A054] hover:bg-transparent hover:text-white"
            >
              Send Message <GrSend className="text-xl" />
            </button>
            {/* <input
            type="submit"
            className="btn bg-gradient-to-r from-[#835D23] to-[#B58130] text-white my-4 hover:border-[#D1A054] hover:bg-transparent hover:text-white"
            value="Send Message"
          /> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
