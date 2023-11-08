// import { useContext, useEffect, useState } from "react";
import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
// import { AuthContext } from "../Provider/AuthProvider";

const AssignmentDetails = () => {
  // const { user } = useContext(AuthContext);
  const assignment = useLoaderData();
  // const [checking, setChecking] = useState([]);

  // const url = `https://study-assignment-server.vercel.app/allAssignment?email=${user?.email}`;

  // useEffect(() => {
  //   if (user?.email) {
  //     fetch(`https://study-assignment-server.vercel.app/allAssignment?email=${user?.email}`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setChecking(data);
  //       });
  //   }
  // }, [url, user?.email]);
  // const handleConfirm = (id) => {
  //   fetch(`https://study-assignment-server.vercel.app/allAssignment/${id}`, {
  //     method: "PATCH",
  //     headers: { "content-type": "application/json" },
  //     body: JSON.stringify({ status: "confirm" }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // console.log(data);

  //       if (data.modifiedCount > 0) {
  //         const remaining = checking.filter((items) => items._id !== id);
  //         const update = checking.find((item) => item._id === id);
  //         update.status = "confirm";
  //         const newChecking = [update, ...remaining];
  //         setChecking(newChecking);
  //       }
  //     });
  // };

  const { user } = useContext(AuthContext);
  const [addAssignment, setAssignment] = useState({
    email: user.email,
    mark: assignment?.mark,
    title: assignment?.title,
    imgUrl: assignment?.imgUrl,
    note: "",
    pdf: "",
    status: "Pending",
  });

  const handleTakeAssignment = () => {
    fetch("https://study-assignment-server.vercel.app/takeAssignment", {
      method: "Post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addAssignment),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire("Take Your Assignment", "", "success");
        // event.target.reset();
      });
  };

  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img className="w-full" src={assignment?.imgUrl} alt="" />
        </figure>
        <div className="card-body">
          <div className="flex justify-between">
            <div>
              <h2 className="card-title">
                {assignment?.title}
                <div className="badge badge-secondary">
                  Mark :{assignment?.mark}
                </div>
              </h2>
              <div className="flex gap-10">
                <h4 className="text-gray-500 font-bold">
                  Level:{assignment?.level}
                </h4>
                <h4 className="text-gray-500">Date:{assignment?.date}</h4>
              </div>
            </div>
            <Link
              // to={"/takeAssignment"}
              onClick={() => document.getElementById("my_modal_5").showModal()}
              className="btn badge badge-accent"
            >
              Take assignment
            </Link>

            <dialog
              id="my_modal_5"
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box">
                <h3 className="font-bold text-lg">google drive link</h3>

                <input
                  onChange={(e) =>
                    setAssignment({ ...addAssignment, pdf: e?.target.value })
                  }
                  type="text"
                  placeholder="PDF link"
                  className="input input-bordered input-accent w-full max-w-xs"
                />
                <h3 className="font-bold text-lg">Quick Note</h3>

                <input
                  onChange={(e) =>
                    setAssignment({ ...addAssignment, note: e?.target.value })
                  }
                  type="text"
                  placeholder="Note"
                  className="input input-bordered input-accent w-full max-w-xs"
                />

                <div className="modal-action">
                  <form method="dialog">
                    <button
                      onClick={handleTakeAssignment}
                      className="btn btn-ghost btn-xs"
                    >
                      Take Assignment
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
          <h2 className="card-title">Details:--</h2>
          <p>{assignment.description}</p>
        </div>
      </div>
    </div>
  );
};

export default AssignmentDetails;
