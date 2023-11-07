import avater from "../assets/avater.jpg";
import aboutImg from "../assets/img1.jpg";

const HomeAbout = () => {
  return (
    <div className="items-center justify-center mx-auto space-x-8 md:flex lg:flex">
      <div className="md:w-1/2 flex items-center justify-center">
        <div>
          {" "}
          <h3 className="text-5xl font-bold text-green-500 mb-10">
            The advent of the internet has revolutionized education
          </h3>
          <p className="font-semibold text-blue-400 mb-10">
            Education is the process of acquiring knowledge, skills, values, and
            habits. It can occur in formal settings like schools and
            universities or informally through life experiences and
            self-directed learning.
          </p>
          <div className="avatar-group -space-x-6">
            <div className="avatar">
              <div className="w-12">
                <img src={avater} />
              </div>
            </div>
            <div className="avatar">
              <div className="w-12">
                <img src={avater} />{" "}
              </div>
            </div>
            <div className="avatar">
              <div className="w-12">
                <img src={avater} />{" "}
              </div>
            </div>
            <div className="avatar">
              <div className="w-12">
                <img src={avater} />{" "}
              </div>
            </div>
            <div className="avatar placeholder">
              <div className="w-12 bg-neutral-focus text-neutral-content">
                <span>+99</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-1/2">
        <img className="w-full rounded-md" src={aboutImg} alt="" />
      </div>
    </div>
  );
};

export default HomeAbout;
