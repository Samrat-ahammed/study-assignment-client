import { useLoaderData } from "react-router-dom";
import Card from "../Component/Card";
import Footer from "../Component/Footer";
import HomeAbout from "../Component/HomeAbout";
import Carousel from "../Component/Slider";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [slider, setSlider] = useState([]);
  const assignment = useLoaderData();

  useEffect(() => {
    fetch("/exm.json")
      .then((res) => res.json())
      .then((data) => {
        setSlider(data);
      });
  }, []);

  return (
    <div className="space-y-8">
      {/* Hero Slider ......  */}
      <div className="">
        <Carousel slider={slider}></Carousel>
      </div>
      {/* assignment card ...  */}
      <div>
        <h1 className="text-center text-green-700 text-4xl font-bold mb-8">
          Assignment
        </h1>
        <div className="grid grid-cols-4 gap-5 mb-5 mt-5">
          {assignment.map((item) => (
            <Card key={item._id} item={item}></Card>
          ))}
        </div>
      </div>
      {/* Home About ...  */}
      <div>
        <HomeAbout></HomeAbout>
      </div>
      {/* some about .. */}
      <div className="w-1/2 mx-auto text-center">
        <h2 className="font-bold text-2xl mb-3">About</h2>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum fuga
          cumque qui quidem maiores, amet labore deleniti iure ullam repellendus
          consectetur illo nulla non minima blanditiis ab aliquid quae magnam!
        </p>
      </div>
      {/* Footer....  */}
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
