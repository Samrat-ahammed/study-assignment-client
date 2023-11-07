// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../Provider/AuthProvider";
const TakeAssignment = () => {
  // const { user } = useContext(AuthContext);
  // const [checking, setChecking] = useState([]);

  // const url = `http://localhost:5000/allAssignment?email=${user?.email}`;

  // useEffect(() => {
  //   if (user?.email) {
  //     fetch(`http://localhost:5000/allAssignment?email=${user?.email}`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setChecking(data);
  //       });
  //   }
  // }, [url, user?.email]);
  // const handleConfirm = (id) => {
  //   fetch(`http://localhost:5000/allAssignment/${id}`, {
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
  // console.log(checking);
  // console.log(checking.status);

  return (
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
  );
};

export default TakeAssignment;
