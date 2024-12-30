import SectionTitle from "../../shared/SectionTitle";
import featureImg from "../../assets/home/featured.jpg";

const Feature = () => {
  return (
    <section className="relative bg-[#151515B3] text-white py-14 mt-16">
      <div
        className="absolute inset-0 bg-fixed"
        style={{
          backgroundImage: `url(${featureImg})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",

          opacity: 0.2, // Set the opacity of the background
        }}
      ></div>
      <SectionTitle
        heading={"From our menu"}
        subHeading={"Check it out"}
      ></SectionTitle>

      <div className="relative card card-side max-w-screen-lg mx-auto px-4 lg:px-0 rounded-none flex-col md:flex-row">
        <figure>
          <img src={featureImg} className="w-full h-full" alt="Movie" />
        </figure>
        <div className="card-body self-center">
          <p>March 20, 2023</p>
          <h2 className="card-title">WHERE CAN I GET SOME?</h2>
          <p>
            Come and indulge in an unforgettable culinary journey at Bistro
            Boss, where every meal is an opportunity to savor the best of fine
            dining.
          </p>
          <div className="card-actions">
            <button className="btn btn-outline border-0 border-b-4 border-b-white text-white uppercase text-lg hover:bg-[#1F2937] mt-4">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
