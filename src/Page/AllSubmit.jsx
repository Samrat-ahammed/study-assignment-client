import { useLoaderData } from "react-router-dom";

const AllSubmit = () => {
  const pendingAssignment = useLoaderData();

  console.log(pendingAssignment);

  return (
    <div className="bg-green-100 p-12 rounded-md">
      <div className="overflow-x-auto bg-white">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Assignment Title</th>
              <th>Assignment Marks</th>
              <th>Examinee Name</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className="p-10 m-10">
              <td className="py-5">Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td
                className="btn btn-info"
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
              >
                Give Mark
              </td>

              <dialog
                id="my_modal_5"
                className="modal modal-bottom sm:modal-middle"
              >
                <div className="modal-box">
                  <h3 className="font-bold text-lg">Feedback</h3>
                  <p className="py-4">
                    <a className="underline text-blue-900" href="http://">
                      Google Drive Link
                    </a>
                    <br />
                    <div className="mt-5">
                      <h2 className="font-bold">Give mark:</h2>
                      <input
                        type="number"
                        placeholder="Give Mark"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="mt-5">
                      <h2 className="font-bold">Give Feedback:</h2>
                      <input
                        type="number"
                        placeholder="Give Mark"
                        className="input input-bordered w-full"
                        required
                      />
                    </div>
                  </p>
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      {/* <button className="btn btn-secondary">Submit</button> */}
                    </form>
                  </div>
                </div>
              </dialog>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSubmit;
