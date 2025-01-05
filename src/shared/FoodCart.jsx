const FoodCart = ({ item }) => {
  return (
    <div className="card bg-[#F3F3F3] rounded-none ">
      <figure className="h-[200px]">
        <img
          src={item.image}
          alt="Shoes"
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="card-body items-center text-center p-5">
        <h2 className="card-title">{item.name}</h2>
        <p>{item.recipe}</p>
        <p className="font-cinzel font-semibold my-3 text-lg">
          Price: {item.price}
        </p>
        <div className="card-actions">
          <button className="btn bg-[#E8E8E8] text-[#BB8506] border-b-2 border-b-[#BB8506] uppercase hover:bg-[#1F2937]">
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCart;
