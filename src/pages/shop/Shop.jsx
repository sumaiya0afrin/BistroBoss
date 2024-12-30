import { Helmet } from "react-helmet-async";
import Cover from "../../shared/Cover";
import menuImg from "../../assets/shop/banner2.jpg";

const Shop = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Shop</title>
      </Helmet>
      <Cover
        img={menuImg}
        title="our shop"
        desc="Would you like to try a dish?"
      />
    </div>
  );
};

export default Shop;
