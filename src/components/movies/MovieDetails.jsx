import { useNavigate } from "react-router-dom";

const MovieDetails = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div className="max-w-4xl mx-auto p-6 rounded-lg shadow-lg">
      <button
        onClick={() => navigate("/")}
        className="absolute cursor-pointer top-4 left-4 py-2 px-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-200"
      >
        Kthehu
      </button>
      <div className="flex items-center justify-center">
        <h2 className="m-2">Filmi i Plote</h2>
      </div>
      <div className="flex flex-col md:flex-row items-center space-x-6">
        <img
          src={item.image ? item.image : "/no-movie.png"}
          alt={item.title}
          className="w-full md:w-1/3 rounded-lg"
        />
        <div className="mt-4 md:mt-0">
          <h2 className="text-3xl font-semibold ">{item.title}</h2>
          <p className="mt-2 text-gray-300">{item.desc}</p>

          <div className="mt-4 space-y-2">
            <p className="text-lg font-medium text-gray-300">
              <span className="text-white">Vleresimi: </span>
              {item.rating}
            </p>
            <p className="text-lg font-medium text-gray-300">
              <span className="text-white">Gjuha: </span>
              {item.language}
            </p>
            <p className="text-lg font-medium text-gray-300">
              <span className="text-white">Lloji: </span>
              {item.type}
            </p>
            <p className="text-lg font-medium text-gray-300">
              <span className="text-white">Karakteri Kryesor: </span>{" "}
              {item.mainCharacter}
            </p>
            <p className="text-lg font-medium text-gray-300">
              <span className="text-white">Autori: </span>
              {item.author}
            </p>
            <p className="text-lg font-medium text-gray-300">
              <span className="text-white">Kryesoret: </span>{" "}
              {item.mainCast.join(", ")}
            </p>
          </div>
        </div>
      </div>
      {item.videoURL && (
        <div className="mt-6">
          <iframe
            width="100%"
            height="400"
            src={item.videoURL}
            title={item.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
