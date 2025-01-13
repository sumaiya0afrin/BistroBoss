import { useForm } from "react-hook-form";
import SectionTitle from "../../../shared/SectionTitle";
import { BsRocketTakeoffFill } from "react-icons/bs";
import { Rating } from "@smastrom/react-rating";
import { useContext, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";
import useAxios from "../../../hooks/useAxios";

const AddReview = () => {
  const { user } = useContext(AuthContext);
  const [rating, setRating] = useState(0);
  const axiosSecure = useAxios();
  const {
    register,

    formState: { errors },
    handleSubmit,
    reset,
    setValue,
  } = useForm();

  const handleRatingChange = (value) => {
    setRating(value);
    setValue("rating", value, { shouldValidate: true });
  };

  const onSubmit = (data) => {
    setRating(0);

    const testimonial = {
      name: user.displayName,
      details: data.review,
      rating: data.rating,
    };
    console.log(testimonial);

    axiosSecure.post("review", testimonial).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Review Added Successfully",
          timer: 2000,
          showConfirmButton: false,
          width: "20rem",
          customClass: {
            title: "text-lg",
            icon: "text-xs",
          },
        });
        reset();
      }
    });
  };
  return (
    <div className="px-4 py-20 lg:py-0 lg:px-0">
      <SectionTitle
        heading="give a review"
        subHeading="Sharing is Caring!!!"
      ></SectionTitle>

      <div className="bg-white max-w-4xl mx-auto py-10 px-8 mb-12">
        {" "}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-screen-md mx-auto space-y-3"
        >
          <div className="form-control justify-self-center items-center">
            <label className="label">
              <span className="label-text font-cinzel text-2xl md:text-3xl">
                rate us!
              </span>
            </label>
            <Rating
              style={{ maxWidth: 180 }}
              value={rating}
              onChange={handleRatingChange}
              isRequired
            />
            <input
              type="hidden"
              {...register("rating", { required: "Rating is required" })} // Register with validation
            />
            {errors.rating && (
              <p role="alert" className="text-xs text-red-500">
                {errors.rating.message}
              </p>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Which recipe you liked most?</span>
            </label>
            <input
              type="text"
              placeholder="Recipe you liked most"
              className="p-3 rounded-lg border border-[#D0D0D0] text-sm placeholder:text-sm"
              {...register("recipe")}
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">
                Do you have any suggestion for us?
              </span>
            </label>
            <input
              type="text"
              placeholder="Sugggestion"
              className="p-3 rounded-lg border border-[#D0D0D0] text-sm placeholder:text-sm"
              {...register("Sugggestion")}
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">
                Kindly express your care in a short way.
              </span>
            </label>
            <textarea
              type="text"
              placeholder="Review in detail"
              className="p-3 rounded-lg border border-[#D0D0D0] text-sm placeholder:text-sm h-48"
              {...register("review", { required: true })}
              aria-invalid={errors.review ? "true" : "false"}
            />
            {errors.review?.type === "required" && (
              <p role="alert" className="text-xs text-red-500">
                Review is required
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-fit self-center btn bg-gradient-to-r from-[#835D23] to-[#B58130] text-white my-4 hover:border-[#D1A054] hover:bg-transparent hover:text-white"
          >
            Send Review
            <BsRocketTakeoffFill className="text-xl" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
