import About from "./Home/About";
import Banner from "./Home/Banner";
import Category from "./Home/Category";
import Contact from "./Home/Contact";
import Feature from "./Home/Feature";
import PopularMenu from "./Home/PopularMenu";
import Recommend from "./Home/Recommend";
import Testimonial from "./Home/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="max-w-screen-lg mx-auto">
        <Category />
        <About />
        <PopularMenu />
        <Contact />
        <Recommend />
      </div>
      <Feature />
      <Testimonial />
    </div>
  );
};

export default Home;
