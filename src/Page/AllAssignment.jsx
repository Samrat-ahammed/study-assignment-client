// import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useContext, useEffect, useState } from "react";

const AllAssignment = () => {
  //   const assignment = useLoaderData();
  const { user } = useContext(AuthContext);
  const [addProduct, setAddProduct] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/allAssignment?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setAddProduct(data);
        });
    }
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
    <div className="mb-5">
      {addProduct?.map((item) => (
        <div
          key={item?._id}
          className="card lg:card-side bg-base-100 border h-[200px] w-full mb-5"
        >
          <figure className="w-1/4 h-full">
            <img className="w-full h-full" src={item?.imgUrl} alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{item?.title}</h2>
            <p>
              <div className="badge badge-secondary">Mark: {item?.mark}</div>
            </p>
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
  );
};

export default AllAssignment;
