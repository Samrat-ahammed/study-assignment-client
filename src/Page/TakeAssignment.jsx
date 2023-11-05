import profileLogo from "../assets/profileLogo.svg";
const TakeAssignment = () => {
  return (
    <div className="bg-green-100 p-12 rounded-md">
      <div className="overflow-x-auto shadow bg-white">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Mark</th>
              <th>Level</th>
              <th>Confirmation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={profileLogo}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Name</div>
                    <div className="text-sm opacity-50">Email</div>
                  </div>
                </div>
              </td>
              <td>
                <span className="badge badge-ghost badge-sm">Mark</span>
              </td>
              <td>hard</td>
              <th>
                <button className="btn btn-ghost btn-xs">confirm</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TakeAssignment;
