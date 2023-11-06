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
            <button className="btn badge badge-accent">Take assignment</button>
          </div>
          <h2 className="card-title">Details:--</h2>
          <p>{assignment.description}</p>
        </div>
      </div>
    </div>
  );
};

export default AssignmentDetails;
