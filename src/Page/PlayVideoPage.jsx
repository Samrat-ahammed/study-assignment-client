const studyVideos = [
  "https://www.youtube.com/embed/W6NZfCO5SIk",
  "https://www.youtube.com/embed/EKoI1hYbpA4",
  "https://www.youtube.com/embed/3jnbBVpOf40",
];

const VideoPlayer = ({ videoUrl }) => {
  return (
    <div className="max-w-screen-md mx-auto my-8">
      <div
        className="relative overflow-hidden"
        style={{ paddingTop: "56.25%" }}
      >
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={videoUrl}
          title="YouTube Video"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

const VideoGallery = () => {
  return (
    <div className="max-w-screen-md mx-auto my-8">
      <h2 className="text-3xl font-bold mb-4">Study Videos</h2>
      {studyVideos.map((videoUrl, index) => (
        <VideoPlayer key={index} videoUrl={videoUrl} />
      ))}
    </div>
  );
};

const PlayVideoPage = () => {
  return (
    <div>
      <div className="min-h-screen flex flex-col justify-between">
        <header className="bg-gray-800 text-white text-center py-4">
          <h1 className="text-3xl font-bold">Study Video Platform</h1>
        </header>
        <main className="flex-grow">
          <VideoGallery />
        </main>
        <footer className="bg-gray-800 text-white text-center py-4">
          <p>&copy; 2023 Study Video Platform</p>
        </footer>
      </div>
    </div>
  );
};

export default PlayVideoPage;
