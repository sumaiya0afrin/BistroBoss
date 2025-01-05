import { Link } from "react-router-dom";
import Cover from "./Cover";
import MenuItem from "./MenuItem";

const MenuCategory = ({ items, title, coverImg, desc }) => {
  return (
    <div className="mb-12">
      {title && <Cover img={coverImg} title={title} desc={desc} />}
      <div className="max-w-screen-lg mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mt-16 px-4 lg:px-0">
          {items.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>

        <Link to={`/shop/${title}`}>
          <button className="btn btn-outline border-0 border-b-4 mt-12 uppercase flex mx-auto ">
            order your favourite food
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
