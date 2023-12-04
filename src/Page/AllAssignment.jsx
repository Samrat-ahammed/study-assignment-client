// import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllAssignment = () => {
  //   const assignment = useLoaderData();
  const { user } = useContext(AuthContext);
  const [level, setLevel] = useState("");
  const [addProduct, setAddProduct] = useState([]);

  useEffect(() => {
    fetch(
      `https://study-assignment-server.vercel.app/allAssignment?level=${level}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAddProduct(data);
      });
  }, [user, level]);

  return (
    <div>
      <div className="text-center items-center mb-5">
        <h2 className="text-center text-green-700 text-4xl font-bold mb-8">
          All Assignment
        </h2>
      </div>
      <ul className="menu menu-vertical lg:menu-horizontal bg-emerald-300 rounded-box mb-5">
        <li
          onClick={() => setLevel("easy")}
          className={level === "easy" && "btn"}
        >
          <a>Easy</a>
        </li>
        <li
          onClick={() => setLevel("medium")}
          className={level === "medium" && "btn"}
        >
          <a>Medium</a>
        </li>
        <li
          onClick={() => setLevel("hard")}
          className={level === "hard" && "btn"}
        >
          <a>Hard</a>
        </li>
      </ul>
      <div className="mb-5">
        {addProduct?.map((item) => (
          <div
            key={item?._id}
            className=" w-full h-full card lg:card-side bg-base-100 border mb-5"
          >
            <figure className="w-full h-full md:w-1/4 md:h-full">
              <img
                className="md:w-full h-full"
                src={item?.imgUrl}
                alt="Album"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item?.title}</h2>
              <div className="space-x-5">
                <p className="badge badge-secondary ">Mark: {item?.mark}</p>
                <p className="badge badge-outline">status: {item?.status}</p>
              </div>
              <div className="card-actions justify-end">
                {/* <Link
                  to={`updateAssignment/${item._id}`}
                  className="btn badge-outline"
                >
                  Update
                </Link> */}
                <Link
                  to={`/assignmentDetails/${item._id}`}
                  className="btn btn-primary"
                >
                  Views
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllAssignment;
