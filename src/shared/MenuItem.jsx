const MenuItem = ({ item }) => {
  return (
    <div className="flex space-x-4 flex-col md:flex-row">
      <img
        src={item.image}
        style={{ borderRadius: "0 200px 200px 200px" }}
        alt=""
        className="md:w-[100px]"
      />
      <div>
        <h3 className="font-cinzel text-xl text-[#151515]">
          {item.name}------------
        </h3>
        <p className="text-[#737373]">{item.recipe}</p>
      </div>
      <p className="text-[#BB8506] text-xl">${item.price}</p>
    </div>
  );
};

export default MenuItem;
