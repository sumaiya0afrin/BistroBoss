import { Helmet } from "react-helmet-async";
import Cover from "../../shared/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
import UseMenu from "../../hooks/UseMenu";
import SectionTitle from "../../shared/SectionTitle";
import MenuCategory from "../../shared/MenuCategory";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
const Menu = () => {
  const [menu] = UseMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover
        img={menuImg}
        title="our menu"
        desc="Would you like to try a dish?"
      />

      <SectionTitle
        heading="Today's offer"
        subHeading="Don't miss"
      ></SectionTitle>
      <MenuCategory items={offered} />

      {/* dessert  */}
      <MenuCategory
        items={dessert}
        title="desserts"
        coverImg={dessertImg}
        desc="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />

      {/* pizza  */}
      <MenuCategory
        items={pizza}
        title="pizza"
        coverImg={pizzaImg}
        desc="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />

      {/* salad  */}
      <MenuCategory
        items={salad}
        title="salads"
        coverImg={saladImg}
        desc="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />

      {/* soup  */}
      <MenuCategory
        items={soup}
        title="soups"
        coverImg={soupImg}
        desc="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
    </div>
  );
};

export default Menu;
