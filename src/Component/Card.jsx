import { Link } from "react-router-dom";

const Card = ({ item }) => {
  const { _id, title, mark, level, imgUrl } = item || {};




  

  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img className="w-full" src={imgUrl} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="flex justify-between mb-4">
            <p className="text-gray-500 font-semibold">Level:{level}</p>
            <p className="text-gray-700 font-semibold badge badge-secondary badge-outline">
              Mark:{mark}
            </p>
          </div>

          <div className="card-actions justify-between">
            <Link to={`updateAssignment/${_id}`} className="btn badge-outline">
              Update
            </Link>
            <Link to={`assignmentDetails/${_id}`} className="btn badge-outline">
              View
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
