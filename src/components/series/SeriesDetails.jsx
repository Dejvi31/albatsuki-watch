import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SeriesDetails = ({ item }) => {
  const [selectedEpisode, setSelectedEpisode] = useState(
    item.episodes[0].episodeVideoURL
  );

  const navigate = useNavigate();

  const handleEpisodeChange = (episodeURL) => {
    setSelectedEpisode(episodeURL);
  };

  const currentEpisodeIndex = item.episodes.findIndex(
    (episode) => episode.episodeVideoURL === selectedEpisode
  );

  const previousEpisode =
    currentEpisodeIndex > 0 ? item.episodes[currentEpisodeIndex - 1] : null;
  const nextEpisode =
    currentEpisodeIndex < item.episodes.length - 1
      ? item.episodes[currentEpisodeIndex + 1]
      : null;

  return (
    <div className="max-w-4xl mx-auto p-6 rounded-lg shadow-lg">
      <button
        onClick={() => navigate("/")}
        className="absolute cursor-pointer top-4 left-4 py-2 px-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-200"
      >
        Kthehu
      </button>
      <div className="flex items-center justify-center">
        <h2 className="m-2">Seria e Plote</h2>
      </div>
      <div className="flex flex-col md:flex-row items-center space-x-6">
        <img
          src={item.image ? item.image : "/no-movie.png"}
          alt={item.title}
          className="w-full md:w-1/3 rounded-lg"
        />
        <div className="mt-4 md:mt-0">
          <h2 className="text-3xl font-semibold">{item.title}</h2>
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

      <div className="mt-6">
        <iframe
          src={selectedEpisode}
          title="Episode Player"
          width="100%"
          height="500px"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

      <div className="mt-6 flex justify-between items-center space-x-6">
        <button
          onClick={() =>
            previousEpisode &&
            handleEpisodeChange(previousEpisode.episodeVideoURL)
          }
          disabled={!previousEpisode}
          className="py-2 px-4 bg-gray-500 text-white rounded-lg cursor-pointer disabled:opacity-50"
        >
          Previous
        </button>

        <div className="text-lg font-medium text-gray-300">
          <span className="text-white">Current Episode: </span>
          {currentEpisodeIndex + 1} / {item.episodes.length}
        </div>

        <button
          onClick={() =>
            nextEpisode && handleEpisodeChange(nextEpisode.episodeVideoURL)
          }
          disabled={!nextEpisode}
          className="py-2 px-4 bg-gray-500 text-white rounded-lg cursor-pointer disabled:opacity-50"
        >
          Next
        </button>
      </div>

      <div className="mt-6">
        <h3 className="text-2xl font-semibold text-gray-300">Episodet:</h3>
        <div className="mt-4 grid grid-cols-3 gap-4">
          {item.episodes.map((episode) => (
            <button
              key={episode.episodeNumber}
              onClick={() => handleEpisodeChange(episode.episodeVideoURL)}
              className={`text-lg cursor-pointer py-2 px-4 rounded-lg transition duration-200 ${
                selectedEpisode === episode.episodeVideoURL
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-blue-500 hover:bg-blue-600"
              } text-white`}
            >
              Episode {episode.episodeNumber}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeriesDetails;
