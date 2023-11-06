import { useLoaderData } from "react-router-dom";

const AssignmentDetails = () => {
  const assignment = useLoaderData();
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img className="w-full" src={assignment?.imgUrl} alt="Shoes" />
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
            <button
              onClick={() => document.getElementById("my_modal_5").showModal()}
              className="btn badge badge-accent"
            >
              Take assignment
            </button>

            <dialog
              id="my_modal_5"
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box">
                <h3 className="font-bold text-lg">google drive link</h3>

                <input
                  type="text"
                  placeholder="PDF link"
                  className="input input-bordered input-accent w-full max-w-xs"
                />
                <h3 className="font-bold text-lg">Quick Note</h3>

                <input
                  type="text"
                  placeholder="Note"
                  className="input input-bordered input-accent w-full max-w-xs"
                />
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Pending...</button>
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
