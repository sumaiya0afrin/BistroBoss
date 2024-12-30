import image from "../../assets/home/slide1.jpg";
import SectionTitle from "../../shared/SectionTitle";
const Recommend = () => {
  return (
    <div className=" px-4 lg:px-0 mt-16">
      <SectionTitle
        heading={"Chef Recommends"}
        subHeading={"Should Try"}
      ></SectionTitle>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="card bg-[#F3F3F3] rounded-none ">
          <figure className="h-[200px]">
            <img
              src={image}
              alt="Shoes"
              className="w-full h-full object-cover"
            />
          </figure>
          <div className="card-body items-center text-center p-5">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions">
              <button className="btn bg-[#E8E8E8] text-[#BB8506] border-b-2 border-b-[#BB8506] uppercase hover:bg-[#1F2937]">
                add to cart
              </button>
            </div>
          </div>
        </div>

        <div className="card bg-[#F3F3F3] rounded-none ">
          <figure className="h-[200px]">
            <img
              src={image}
              alt="Shoes"
              className="w-full h-full object-cover"
            />
          </figure>
          <div className="card-body items-center text-center p-5">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions">
              <button className="btn bg-[#E8E8E8] text-[#BB8506] border-b-2 border-b-[#BB8506] uppercase hover:bg-[#1F2937]">
                add to cart
              </button>
            </div>
          </div>
        </div>

        <div className="card bg-[#F3F3F3] rounded-none ">
          <figure className="h-[200px]">
            <img
              src={image}
              alt="Shoes"
              className="w-full h-full object-cover"
            />
          </figure>
          <div className="card-body items-center text-center p-5">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions">
              <button className="btn bg-[#E8E8E8] text-[#BB8506] border-b-2 border-b-[#BB8506] uppercase hover:bg-[#1F2937]">
                add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommend;
