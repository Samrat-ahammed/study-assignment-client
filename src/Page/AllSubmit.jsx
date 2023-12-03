import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const AllSubmit = () => {
  const { user } = useContext(AuthContext);
  const [pendingAssign, setPendingAssign] = useState([]);
  const [updatedId, setUpdatedId] = useState("");
  const [reload, isReload] = useState(false);

  const [addAssignment, setAssignment] =
    useState({
      giveMark: "",
      status: "complete",
    }) || {};

  useEffect(() => {
    const getPendingAssignment = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/takeAssignment?email=${user?.email}`
        );
        const data = await response.json();
        setPendingAssign(data);
        console.log(data[0].pdf);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    if (user?.email) {
      getPendingAssignment();
    }
  }, [user, reload]);

  const handleGiveMark = () => {
    fetch(`http://localhost:5000/takeAssignment/${updatedId}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(addAssignment),
    }).then(() => {
      // getPendingAssignment();
      isReload(!reload);
    });
  };

  return (
    <>
      <div className="bg-green-100 p-12 rounded-md">
        <div className="overflow-x-auto bg-white">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Assignment Title</th>
                <th>Assignment Marks</th>
                <th>Mark</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {pendingAssign.length > 0 &&
                pendingAssign?.map((item) => (
                  <tr key={item._id} className="p-10 m-10">
                    <td className="py-5">{item?.title}</td>
                    <td>Assignment Mark : {item?.mark}</td>
                    <td
                      className="btn btn-info"
                      onClick={() => {
                        document.getElementById("my_modal_5").showModal();
                        setUpdatedId(item._id);
                      }}
                    >
                      Give Mark
                    </td>
                    <td>{item.status}</td>

                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                  </tr>
                ))}
            </tbody>
          </table>

          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <h3 className="font-bold text-lg">PdfLink!</h3>
              <attribute className="text-blue-800"></attribute>
              <div className="py-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Give Mark</span>
                  </label>
                  <label className="input-group input-group-vertical">
                    <span>Mark</span>
                    <input
                      onChange={(e) =>
                        setAssignment({
                          ...addAssignment,
                          giveMark: e?.target.value,
                        })
                      }
                      type="text"
                      placeholder="Mark"
                      className="input input-bordered"
                    />
                  </label>
                </div>
              </div>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button onClick={handleGiveMark} className="btn">
                    submit
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </>
  );
};

export default AllSubmit;
