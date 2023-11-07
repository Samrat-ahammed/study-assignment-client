import { useEffect, useState } from "react";

const MyAllAssignment = () => {
  const [pendingAssign, setPendingAssign] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/takeAssignment")
      .then((res) => res.json())
      .then((data) => {
        setPendingAssign(data);
        console.log(data);
      });
  }, []);

  return (
    <div>
      {pendingAssign?.map((item) => (
        <div key={item._id}>
          <div className="bg-green-100 p-12 rounded-md flex justify-between">
            <div>
              <div>
                {" "}
                <h2 className="font-bold">PDF Link</h2>
                <input
                  type="text"
                  placeholder="PDF link"
                  className="input input-bordered input-info w-full max-w-xs"
                />
              </div>
              <div>
                <h2 className="font-bold">Quick Note</h2>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-lg w-full max-w-xs"
                />
              </div>
            </div>
            <div>
              <h3 className="text-blue-800 font-bold">
                status: <button className="btn">pending status</button>
              </h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyAllAssignment;
