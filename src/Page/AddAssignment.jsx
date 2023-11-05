import { useState } from "react";
import DatePicker from "react-datepicker";
import { BiMessageSquareAdd } from "react-icons/Bi";
import "react-datepicker/dist/react-datepicker.css";

const AddAssignment = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <div className="bg-green-700 font-bold text-4xl p-4 text-white rounded-t-lg">
        Add-Your Assignment
      </div>
      <div className="space-y-4 bg-green-200 p-12">
        <div className="flex gap-4">
          <input
            className="input input-bordered w-full"
            placeholder="Title"
            type="text"
          />
          <DatePicker
            className="input input-bordered w-full"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
        <div className="flex gap-4">
          <input
            className="input input-bordered w-1/2"
            placeholder="Enter Your Email"
            type="text"
          />
          <input
            className="input input-bordered w-1/2"
            placeholder="PhotoURL"
            type="text"
          />
        </div>
        <div className="flex gap-4">
          <input
            className="input input-bordered w-1/2"
            placeholder="Assignment Mark"
            type="text"
          />
          <div className="w-1/2">
            <select className="select select-primary w-full max-w-xs">
              <option disabled selected>
                What is the best TV show?
              </option>
              <option>Game of Thrones</option>
              <option>Lost</option>
              <option>Breaking Bad</option>
              <option>Walking Dead</option>
            </select>
          </div>
        </div>
        <div>
          <input
            className="input input-bordered input-lg w-1/2"
            placeholder="Description"
            type="text"
          />
        </div>
      </div>
      <div className="bg-green-700 text-center font-bold text-4xl p-4 text-white rounded-b-lg">
        <div className="">
          <button className="btn badge-outline">
            <BiMessageSquareAdd></BiMessageSquareAdd>
            Add assignment
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddAssignment;
