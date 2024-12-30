import background from "../../assets/home/chef-service.jpg";
const About = () => {
  return (
    <div className=" px-4 lg:px-0 mt-12">
      <div
        className="py-16 lg:py-24 md:px-20 px-8"
        style={{
          backgroundImage: `url(${background})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="bg-white text-center p-8 md:p-16 space-y-2">
          <h3 className=" text-2xl md:text-3xl font-cinzel">Bistro Boss</h3>
          <p>
            Welcome to Bistro Boss, where we bring the finest blend of gourmet
            dining and casual elegance to your table. Nestled in the heart of
            the city, Bistro Boss offers a diverse menu inspired by
            international cuisines, with an emphasis on fresh, locally sourced
            ingredients.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
