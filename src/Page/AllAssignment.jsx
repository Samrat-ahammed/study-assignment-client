// import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useContext, useEffect, useState } from "react";

const AllAssignment = () => {
  //   const assignment = useLoaderData();
  const { user } = useContext(AuthContext);
  const [addProduct, setAddProduct] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/allAssignment?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAddProduct(data);
      });
  }, [user]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result?.isConfirmed) {
        fetch(`http://localhost:5000/allAssignment/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data?.deletedCount > 0) {
              // eslint-disable-next-line react/prop-types
              const remaining = addProduct.filter((item) => item._id !== _id);
              console.log(remaining);
              setAddProduct(remaining);
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="text-center items-center mb-5">
        <h2 className="text-center text-green-700 text-4xl font-bold mb-8">
          All Assignment
        </h2>
      </div>
      <ul className="menu menu-vertical lg:menu-horizontal bg-emerald-300 rounded-box mb-5">
        <li>
          <a>Easy</a>
        </li>
        <li>
          <a>Medium</a>
        </li>
        <li>
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
                <button
                  onClick={() => handleDelete(item?._id)}
                  className="btn btn-primary"
                >
                  delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllAssignment;
