import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const MyAllAssignment = () => {
  const [addProduct, setAddProduct] = useState([]);

  const { user } = useContext(AuthContext);
  console.log(user?.email);

  const url = `https://study-assignment-server.vercel.app/takeAssignment?email=${user?.email}`;
  useEffect(() => {
    // if (user?.email) {
    // axios
    //   .get(url, { withCredentials: true })
    //   .then((res) => setAddProduct(res.data));
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setAddProduct(data);
        console.log(data);
      });
    // }
  }, [url]);

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
        fetch(
          `https://study-assignment-server.vercel.app/takeAssignment/${_id}`,
          {
            method: "DELETE",
          }
        )
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
    <div className="grid grid-cols-a gap-5 mb-5 mt-5 md:grid-cols-2 lg:grid-cols-4">
      {addProduct.length > 0 && addProduct.length > 0 ? (
        addProduct?.map((item) => (
          <div key={item._id} className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10 h-40">
              <img
                src={item.imgUrl}
                alt="Shoes"
                className="rounded-xl w-full h-full"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{item.title}</h2>
              <p>
                Assignment Status:{" "}
                <span className="text-blue-800 font-bold">{item.status}</span>
              </p>
              <p className="badge badge-secondary">
                Assignment Mark: {item.mark}
              </p>
              <p
                className="badge badge-primary
            "
              >
                Obtain Marks: {item.giveMark}
              </p>
              <p>feedback: {item.note}</p>
              <div className="card-actions">
                <button
                  onClick={() => handleDelete(item._id)}
                  className="btn btn-primary"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="items-center text-center mx-auto">
          <h1 className="text-red-800 text-3xl font-bold text-center">
            Please Add Assignment.....
          </h1>
        </div>
      )}
    </div>
  );
};

export default MyAllAssignment;
