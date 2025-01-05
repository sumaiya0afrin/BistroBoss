import { Helmet } from "react-helmet-async";
import Cover from "../../shared/Cover";
import menuImg from "../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import UseMenu from "../../hooks/UseMenu";
import ShopTab from "./ShopTab";
import { useParams } from "react-router-dom";

const Shop = () => {
  const categories = ["salad", "pizza", "soups", "desserts", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = UseMenu();

  const drink = menu.filter((item) => item.category === "drinks");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");

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

      <div className="max-w-screen-lg mx-auto mt-16 px-4 lg:px-0">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className="!text-center uppercase font-bold mb-5">
            <Tab>Salad</Tab>
            <Tab>pizza</Tab>
            <Tab>soups</Tab>
            <Tab>desserts</Tab>
            <Tab>drinks</Tab>
          </TabList>
          <TabPanel>
            <ShopTab items={salad} />
          </TabPanel>
          <TabPanel>
            <ShopTab items={pizza} />
          </TabPanel>
          <TabPanel>
            <ShopTab items={soup} />
          </TabPanel>
          <TabPanel>
            <ShopTab items={dessert} />
          </TabPanel>
          <TabPanel>
            <ShopTab items={drink} />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Shop;
