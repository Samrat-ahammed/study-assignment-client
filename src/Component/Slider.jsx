/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
// eslint-disable-next-line react/prop-types
export default function Carousel({ slider }) {
  //   console.log(slider);
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    // eslint-disable-next-line react/prop-types
    if (current === 0) setCurrent(slider.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    // eslint-disable-next-line react/prop-types
    if (current === slider.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div className="overflow-hidden relative">
      <div
        className={`flex transition ease-out duration-40`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slider &&
          slider?.map((s) => {
            return <img className="rounded-lg" key={s.id} src={s.imgUrl} />;
          })}
      </div>

      <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
        <button onClick={previousSlide}>
          <BsFillArrowLeftCircleFill />
        </button>
        <button onClick={nextSlide}>
          <BsFillArrowRightCircleFill />
        </button>
      </div>

      <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
        {slider?.map((s, i) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={"circle" + i}
              className={`rounded-full w-5 h-5 cursor-pointer  ${
                i == current ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
