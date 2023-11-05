import { RxUpdate } from "react-icons/Rx";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { useState } from "react";

const UpdateAssignment = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="mb-10 mt-10">
      <div className="bg-green-700 font-bold text-4xl p-4 text-white rounded-t-lg">
        Update-Your Assignment
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
            <RxUpdate></RxUpdate>
            Update assignment
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateAssignment;