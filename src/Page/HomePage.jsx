import { useLoaderData } from "react-router-dom";
import Card from "../Component/Card";
import Footer from "../Component/Footer";
import HomeAbout from "../Component/HomeAbout";
import Carousel from "../Component/Slider";
import { useEffect, useState } from "react";
import HomeAboutSec from "../Component/HomeAboutSec";

const HomePage = () => {
  const assignment = useLoaderData();
  const [slider, setSlider] = useState([]);

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
        <div className="grid grid-cols-a gap-5 mb-5 mt-5 md:grid-cols-2 lg:grid-cols-4">
          {assignment?.map((item) => (
            <Card key={item?._id} item={item}></Card>
          ))}
        </div>
      </div>
      {/* Home About ...  */}
      <div>
        <HomeAbout></HomeAbout>
      </div>
      {/* some about .. */}

      <HomeAboutSec></HomeAboutSec>
      <div className="w-1/2 mx-auto text-center">
        <p className="text-gray-500">
          Teaching Methods: Various teaching methods, from traditional lectures
          to hands-on experiences, are used to facilitate learning. The choice
          of method can depend on the subject matter, age of the students, and
        </p>
      </div>
      {/* Footer....  */}
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
