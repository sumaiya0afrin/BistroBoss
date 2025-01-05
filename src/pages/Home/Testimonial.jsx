import SectionTitle from "../../shared/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Rating, ThinStar } from "@smastrom/react-rating";
import { useEffect, useState } from "react";
import "@smastrom/react-rating/style.css";
import quote from "../../assets/quote.png";

const Testimonial = () => {
  const [review, setReview] = useState([]);

  const myStyles = {
    itemShapes: ThinStar,
    activeFillColor: "#CD9003",
    inactiveFillColor: "#A1A1A1",
  };

  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return (
    <section className="max-w-screen-lg mx-auto px-4 lg:px-0 my-16">
      <SectionTitle
        heading={"Testimonials"}
        subHeading={"What Our Clients Say"}
      ></SectionTitle>

      <Carousel className="w-full">
        <CarouselContent>
          {review.map((review) => (
            <CarouselItem key={review._id}>
              <div className="p-2 md:p-4 lg:p-6">
                <Card>
                  <CardContent className="flex flex-col  items-center justify-center p-6 space-y-3">
                    <Rating
                      style={{ maxWidth: 180 }}
                      value={review.rating}
                      itemStyles={myStyles}
                      readOnly
                    />

                    <img src={quote} alt="" />

                    <p className="text-center">{review.details}</p>
                    <h3 className="text-[#CD9003] text-xl md:text-2xl lg:text-3xl font-medium uppercase">
                      {review.name}
                    </h3>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden lg:flex" />
        <CarouselNext className="hidden lg:flex" />
      </Carousel>
    </section>
  );
};

export default Testimonial;
