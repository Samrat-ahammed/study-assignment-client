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
      <div>
        <h2>Assignment</h2>
      </div>
      {/* Home About ...  */}
      <div>
        <HomeAbout></HomeAbout>
      </div>
      {/* Footer....  */}
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
