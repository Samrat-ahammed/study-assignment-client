import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import { BiMessageSquareAdd } from "react-icons/Bi";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const AddAssignment = () => {
  const { user } = useContext(AuthContext);
  const [addAssignment, setAssignment] = useState({
    email: user?.email,
    title: "",
    mark: "",
    description: "",
    imgUrl: "",
    level: "",
    date: new Date(),
  });

  const handleAddAssignment = (e) => {
    e.preventDefault();
    fetch("https://study-assignment-server.vercel.app", {
      method: "Post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addAssignment),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire("Add your Assignment", "", "success");
        // event.target.reset();
      });
  };
  return (
    <form onSubmit={handleAddAssignment} className="mb-10 mt-10">
      <div className="bg-green-700 font-bold text-4xl p-4 text-white rounded-t-lg">
        Create-Your Assignment
      </div>
      <div className="space-y-4 bg-green-200 p-12">
        <div className="flex gap-4">
          <input
            required
            onChange={(e) =>
              setAssignment({ ...addAssignment, title: e?.target.value })
            }
            className="input input-bordered w-full"
            placeholder="Title"
            type="text"
          />
          <DatePicker
            required
            className="input input-bordered w-full"
            selected={addAssignment.date}
            onChange={(date) => setAssignment({ ...addAssignment, date: date })}
          />
        </div>
        <div className="flex gap-4">
          <input
            required
            className="input input-bordered w-1/2"
            placeholder="Enter Your Email"
            defaultValue={user?.email}
            type="text"
          />
          <input
            required
            onChange={(e) =>
              setAssignment({ ...addAssignment, imgUrl: e?.target.value })
            }
            className="input input-bordered w-1/2"
            placeholder="PhotoURL"
            type="text"
          />
        </div>
        <div className="flex gap-4">
          <input
            required
            onChange={(e) =>
              setAssignment({ ...addAssignment, mark: e?.target.value })
            }
            className="input input-bordered w-1/2"
            placeholder="Assignment Mark"
            type="text"
          />
          <div className="w-1/2">
            <select
              required
              onChange={(e) =>
                setAssignment({ ...addAssignment, level: e?.target.value })
              }
              className="select select-primary w-full max-w-xs"
            >
              <option disabled selected>
                Assignment difficulty level-
              </option>
              <option>easy</option>
              <option>medium</option>
              <option>hard</option>
            </select>
          </div>
        </div>
        <div>
          <input
            onChange={(e) =>
              setAssignment({ ...addAssignment, description: e?.target.value })
            }
            className="input input-bordered input-lg w-1/2"
            placeholder="Description"
            type="text"
          />
        </div>
      </div>
      <div className="bg-green-700 text-center font-bold text-4xl p-4 text-white rounded-b-lg">
        <div className="flex justify-center items-center text-center">
          <input
            className="btn badge-outline"
            type="submit"
            value=" Add Assignment"
          />
        </div>
      </div>
    </form>
  );
};

export default AddAssignment;
