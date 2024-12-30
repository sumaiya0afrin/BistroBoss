const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="md:w-4/12 mx-auto text-center my-8">
      <p className="text-[#D99904] lg:text-xl mb-2">---{subHeading}---</p>
      <h3 className="text-2xl lg:text-3xl uppercase border-y-4 py-4">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
