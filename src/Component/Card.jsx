import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="grid grid-cols-4 gap-5 mb-5 mt-5">
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img
            className="w-full"
            src="https://i.ibb.co/9wrJqPf/download.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Assignment title</h2>
          <p className="text-gray-700 font-semibold">Mark:20</p>
          <p className="text-gray-500 font-semibold">Level:Hard</p>
          <div className="card-actions justify-between">
            <button className="btn badge-outline">Update</button>
            <Link to={"assignmentDetails"} className="btn badge-outline">
              View
            </Link>
          </div>
        </div>
      </div>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img
            className="w-full"
            src="https://i.ibb.co/9wrJqPf/download.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Assignment title</h2>
          <p className="text-gray-700 font-semibold">Mark:20</p>
          <p className="text-gray-500 font-semibold">Level:Hard</p>
          <div className="card-actions justify-between">
            <button className="btn badge-outline">Update</button>
            <Link to={"assignmentDetails"} className="btn badge-outline">
              View
            </Link>
          </div>
        </div>
      </div>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img
            className="w-full"
            src="https://i.ibb.co/9wrJqPf/download.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Assignment title</h2>
          <p className="text-gray-700 font-semibold">Mark:20</p>
          <p className="text-gray-500 font-semibold">Level:Hard</p>
          <div className="card-actions justify-between">
            <button className="btn badge-outline">Update</button>
            <Link to={"assignmentDetails"} className="btn badge-outline">
              View
            </Link>
          </div>
        </div>
      </div>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img
            className="w-full"
            src="https://i.ibb.co/9wrJqPf/download.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Assignment title</h2>
          <p className="text-gray-700 font-semibold">Mark:20</p>
          <p className="text-gray-500 font-semibold">Level:Hard</p>
          <div className="card-actions justify-between">
            <button className="btn badge-outline">Update</button>
            <Link to={"assignmentDetails"} className="btn badge-outline">
              View
            </Link>
          </div>
        </div>
      </div>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img
            className="w-full"
            src="https://i.ibb.co/9wrJqPf/download.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Assignment title</h2>
          <p className="text-gray-700 font-semibold">Mark:20</p>
          <p className="text-gray-500 font-semibold">Level:Hard</p>
          <div className="card-actions justify-between">
            <button className="btn badge-outline">Update</button>
            <Link to={"assignmentDetails"} className="btn badge-outline">
              View
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
