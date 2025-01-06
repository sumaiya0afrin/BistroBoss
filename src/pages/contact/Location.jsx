const Location = ({ title, desc, desc2, Icon }) => {
  return (
    <div>
      <div className="card card-compact  border border-[#E8E8E8] rounded-none ">
        <figure className="bg-[#D1A054] py-6 text-white text-2xl">
          <Icon />
        </figure>
        <div className="card-body justify-center items-center bg-[#F3F3F3] mx-7 mb-7 !py-20 max-h-20">
          <h2 className="card-title text-base lg:text-xl uppercase">{title}</h2>
          <p className="text-xs lg:text-base">{desc}</p>
          <p className="text-xs lg:text-base">{desc2}</p>
        </div>
      </div>
    </div>
  );
};

export default Location;
