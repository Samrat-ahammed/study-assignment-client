import { RxUpdate } from "react-icons/Rx";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateAssignment = () => {
  const assignment = useLoaderData();
  const { user } = useContext(AuthContext);

  console.log(assignment);

  const [addAssignment, setAssignment] = useState({
    email: user?.email,
    title: "",
    mark: "",
    description: "",
    imgUrl: "",
    level: "",
    date: new Date(),
  });

  const handleUpdateAssignment = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5000/allAssignment/${assignment._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addAssignment),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.modifiedCount > 0) {
          Swal.fire("Add your Assignment", "", "success");
        }
      });
  };

  useEffect(() => {
    if (assignment) {
      setAssignment({ ...assignment, date: new Date(assignment.date) });
    }
  }, [assignment]);
  return (
    <form onSubmit={handleUpdateAssignment} className="mb-10 mt-10">
      <div className="bg-green-700 font-bold text-4xl p-4 text-white rounded-t-lg">
        Create-Your Assignment
      </div>
      <div className="space-y-4 bg-green-200 p-12">
        <div className="flex gap-4">
          <input
            onChange={(e) =>
              setAssignment({ ...addAssignment, title: e?.target.value })
            }
            className="input input-bordered w-full"
            defaultValue={addAssignment?.title}
            type="text"
          />
          <DatePicker
            className="input input-bordered w-full"
            selected={addAssignment?.date}
            onChange={(date) => setAssignment({ ...addAssignment, date: date })}
          />
        </div>
        <div className="flex gap-4">
          <input
            className="input input-bordered w-1/2"
            placeholder="Enter Your Email"
            defaultValue={user?.email}
            type="text"
          />
          <input
            onChange={(e) =>
              setAssignment({ ...addAssignment, imgUrl: e?.target.value })
            }
            className="input input-bordered w-1/2"
            placeholder="PhotoURL"
            defaultValue={assignment.imgUrl}
            type="text"
          />
        </div>
        <div className="flex gap-4">
          <input
            onChange={(e) =>
              setAssignment({ ...addAssignment, mark: e?.target.value })
            }
            className="input input-bordered w-1/2"
            placeholder="Assignment Mark"
            defaultValue={assignment?.mark}
            type="text"
          />
          <div className="w-1/2">
            <select
              onChange={(e) =>
                setAssignment({ ...addAssignment, level: e?.target.value })
              }
              className="select select-primary w-full max-w-xs"
            >
              <option value="">Assignment difficulty level-</option>
              <option value="easy" selected={addAssignment.level === "easy"}>
                easy
              </option>
              <option
                value="medium"
                selected={addAssignment.level === "medium"}
              >
                medium
              </option>
              <option value="hard" selected={addAssignment.level === "hard"}>
                hard
              </option>
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
            defaultValue={addAssignment?.description}
            type="text"
          />
        </div>
      </div>
      <div className="bg-green-700 text-center font-bold text-4xl p-4 text-white rounded-b-lg">
        <div className="">
          <button type="submit" className="btn badge-outline">
            <RxUpdate></RxUpdate>
            Update Assignment
          </button>
        </div>
      </div>
    </form>
  );
};

export default UpdateAssignment;
