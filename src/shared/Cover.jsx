const Cover = ({ img, title, desc }) => {
  return (
    <div>
      <div
        className={`hero ${
          title === "our menu"
            ? "h-[400px] md:h-[700px]"
            : "h-[300px] md:h-[550px]"
        } `}
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-lg">
            <h1 className="mb-5 text-2xl md:text-4xl lg:text-6xl font-bold font-cinzel text-white">
              {title}
            </h1>
            <p
              className={`mb-5 text-white ${
                title === "our menu" ? "text-lg md:text-2xl" : "text-base"
              } `}
            >
              {desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
