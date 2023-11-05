import Card from "../Component/Card";
import Footer from "../Component/Footer";
import HomeAbout from "../Component/HomeAbout";
import Carousel from "../Component/Slider";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [slider, setSlider] = useState([]);

  useEffect(() => {
    fetch("/exm.json")
      .then((res) => res.json())
      .then((data) => {
        setSlider(data);
      });
  }, []);

  console.log(slider);
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
        <Card></Card>
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
