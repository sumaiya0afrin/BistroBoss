import { Link } from "react-router-dom";
import background from "../../assets/others/authentication.png";
import registerImg from "../../assets/others/authentication2.png";
import { useForm } from "react-hook-form";
import { CiFacebook } from "react-icons/ci";
import { RiGoogleLine } from "react-icons/ri";
import { VscGithub } from "react-icons/vsc";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, userProfile } = useContext(AuthContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = (data) => {
    const { name, mail, password } = data;

    console.log(name, mail, password);

    createUser(mail, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        userProfile(name)
          .then(() => {
            reset();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "User Created Successfully",
              timer: 2000,
              showConfirmButton: false,
              width: "20rem",
              customClass: {
                title: "text-lg",
                icon: "text-xs",
              },
              showClass: {
                popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `,
              },
              hideClass: {
                popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `,
              },
            });
          })
          .catch((err) => console.log(err));
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Register</title>
      </Helmet>
      <div
        className="hero  min-h-screen"
        style={{
          backgroundImage: `url(${background})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div
          className="hero-content w-4/5 justify-between gap-4 flex-col lg:flex-row md:p-16 my-4"
          style={{
            backgroundImage: `url(${background})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            boxShadow: "10px 10px 10px 10px rgba(0, 0, 0, 0.25)",
          }}
        >
          <div className="w-full">
            <h1 className="text-2xl md:text-4xl font-bold text-center">
              Sign Up
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
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
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Type here"
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

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  placeholder="Enter your password"
                  className="p-3 rounded-lg border border-[#D0D0D0] text-sm placeholder:text-sm"
                  {...register("password", {
                    required: "Password is required",
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                      message:
                        "Password must be at least 8 characters long, include at least one uppercase letter and one lowercase letter",
                    },
                  })}
                  aria-invalid={errors.password ? "true" : "false"}
                />
                {errors.password && (
                  <p role="alert" className="text-xs text-red-500">
                    {errors.password?.message}
                  </p>
                )}
              </div>

              <input
                type="submit"
                className="btn bg-[#D1A054] text-white my-4 hover:border-[#D1A054] hover:bg-transparent hover:text-[#D1A054]"
                value="Sign Up"
              />
            </form>

            <div className="text-center space-y-3">
              <p className="text-sm md:text-base text-[#D1A054]">
                Already registered?{" "}
                <span className="font-semibold">
                  Go to{" "}
                  <Link to="/login" className="hover:underline">
                    log in
                  </Link>
                </span>
              </p>
              <p>Or sign up with</p>

              <div className="flex items-center gap-4 text-3xl justify-center">
                <button>
                  <CiFacebook />
                </button>
                <button>
                  <RiGoogleLine />
                </button>
                <button>
                  <VscGithub />
                </button>
              </div>
            </div>
          </div>
          <img src={registerImg} />
        </div>
      </div>
    </div>
  );
};

export default Register;
