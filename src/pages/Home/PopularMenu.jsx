import { useEffect, useState } from "react";
import SectionTitle from "../../shared/SectionTitle";
import MenuItem from "../../shared/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  }, []);
  return (
    <section className=" px-4 lg:px-0 mt-16">
      <SectionTitle
        heading="FROM OUR MENU"
        subHeading="Check it out"
      ></SectionTitle>

      <div className="grid md:grid-cols-2 gap-8">
        {menu.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>

      <button className="btn btn-outline border-0 border-b-4 mt-12 uppercase flex mx-auto ">
        View Full Menu
      </button>
    </section>
  );
};

export default PopularMenu;
