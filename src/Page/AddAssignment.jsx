import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const AddAssignment = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <div className="bg-green-700 font-bold text-4xl p-4 text-white rounded-t-lg">
        Add-Your Assignment
      </div>
      <div>
        <input className="input input-bordered w-full" type="text" />
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </div>
    </div>
  );
};

export default AddAssignment;
