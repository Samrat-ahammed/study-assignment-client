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
          <div className="flex justify-between mb-4">
            {" "}
            <p className="text-gray-500 font-semibold">Level:Hard</p>
            <p className="text-gray-700 font-semibold badge badge-secondary badge-outline">
              Mark:20
            </p>
          </div>

          <div className="card-actions justify-between">
            <Link to={"updateAssignment"} className="btn badge-outline">
              Update
            </Link>
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
