const HomeAboutSec = () => {
  return (
    <div className="hero min-h-screen bg-base-200 mx-auto">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img
            src="https://i.ibb.co/jV7JhyD/course3-1-1200x600.jpg"
            className="w-3/4 rounded-lg shadow-2xl"
          />
          <img
            src="https://i.ibb.co/qk88Kz5/course14-1-1200x600.jpg"
            className="w-1/2 absolute right-5 top-1/2 border-7 border-white rounded-lg shadow-2xl"
          />
        </div>
        <div className="lg:w-1/2 space-y-5 p-5">
          <h3 className="font-bold text-red-700">About Us</h3>
          <h3 className="font-bold text-5xl">
            Education is knowledge, skills, values, and attitudes.
          </h3>

          <p className="py-6">
            Purpose of Education: Education serves various purposes, including
            personal development, societal progress, and economic growth. It
            empowers individuals, fosters critical thinking, and helps them
            become responsible, informed citizens.
          </p>
          <p className="py-6">
            Formal and Informal Education: Education can be formal, such as
            school and university settings, or informal, like learning from
            family, community,
          </p>
          <button className="btn btn-secondary">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default HomeAboutSec;
