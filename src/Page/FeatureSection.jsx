import { useEffect, useState } from "react";

const FeatureSection = () => {
  const [myFeature, setMyFeature] = useState([]);

  useEffect(() => {
    fetch("/feature.json")
      .then((res) => res.json())
      .then((data) => {
        setMyFeature(data);
      });
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-bold text-center bg-green-200 py-2 rounded-lg">
        Some Feature Of There{" "}
      </h2>
      <div className="grid grid-cols-a gap-5 mb-5 mt-5 md:grid-cols-2 lg:grid-cols-4">
        {myFeature.map((item, index) => (
          <div
            key={index}
            className="card badge-ghost bg-green-400 text-black-content"
          >
            <div className="card-body">
              <h2 className="card-title">{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
