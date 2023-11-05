const AssignmentDetails = () => {
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img
            className="w-full"
            src="https://i.ibb.co/9wrJqPf/download.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <div className="flex justify-between">
            <div>
              <h2 className="card-title">
                assignment title
                <div className="badge badge-secondary">Mark :20</div>
              </h2>
              <div className="flex gap-10">
                <h4 className="text-gray-500 font-bold">Level:Hard</h4>
                <h4 className="text-gray-500">Date:01/11/2023</h4>
              </div>
            </div>
            <button className="btn badge badge-accent">Take assignment</button>
          </div>
          <h2 className="card-title">Details:--</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
            quisquam illum blanditiis laudantium adipisci sit sunt explicabo,
            porro magnam nihil sequi reprehenderit. Tempore minima repellendus
            eum asperiores exercitationem fuga dolor?
          </p>
        </div>
      </div>
    </div>
  );
};

export default AssignmentDetails;
