import { useLoaderData } from "react-router-dom";
import Card from "../Component/Card";
import Footer from "../Component/Footer";
import HomeAbout from "../Component/HomeAbout";
import Carousel from "../Component/Slider";
import { useEffect, useState } from "react";
import HomeAboutSec from "../Component/HomeAboutSec";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
const HomePage = () => {
  const { count } = useLoaderData();
  const [loading, setLoading] = useState(true);
  const [assignment, setAssignment] = useState();
  const [slider, setSlider] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(0);

  const numberOfPages = Math.ceil(count / itemsPerPage);

  const pages = [...Array(numberOfPages).keys()];

  const handlePagiNation = () => {
    fetch(
      `https://study-assignment-server.vercel.app/allAssignmentPagination?page=${currentPage}&size=${itemsPerPage}`
    )
      .then((res) => res.json())
      .then((data) => {
        setAssignment(data), setLoading(false);
      });
  };

  const handleSlider = () => {
    fetch("/exm.json")
      .then((res) => res.json())
      .then((data) => {
        setSlider(data);
      });
  };

  useEffect(() => {
    handleSlider();
    handlePagiNation();
  }, [currentPage]);

  const handlePrevPeg = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNextPeg = () => {
    if (currentPage < pages?.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

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
        <div className="grid grid-cols-a gap-5 mb-5 mt-5 md:grid-cols-2 lg:grid-cols-3">
          {assignment?.length > 0 &&
            assignment?.map((item) => (
              <Card key={item?._id} item={item}></Card>
            ))}
        </div>
      </div>
      <div className="text-white text-center pagination my-10">
        <button onClick={handlePrevPeg} className="btn">
          <FaArrowAltCircleLeft />
        </button>
        {loading ? (
          <p>Loading...</p>
        ) : (
          pages.map((page) => (
            <button
              className={`${
                currentPage === page
                  ? "selected text-black-800 bg-red-500 font-semibold"
                  : "your-non-selected-class"
              } text-blue-500 bg-gray-200 py-2 px-4 rounded-full mx-2`}
              onClick={() => setCurrentPage(page)}
              key={page}
            >
              {page}
            </button>
          ))
        )}
        <button onClick={handleNextPeg} className="btn">
          <FaArrowAltCircleRight />
        </button>
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
