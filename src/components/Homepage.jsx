import React, { useState } from "react";
import { movies, series } from "../data/data";
import MovieCard from "./movies/MovieCard";
import SeriesCard from "./series/SeriesCard";
import Search from "./features/Search";

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [extraFilter, setExtraFilter] = useState(null);

  let filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  let filteredSeries = series.filter((serie) =>
    serie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (extraFilter === "trending") {
    filteredMovies = filteredMovies.filter((movie) => movie.trending);
    filteredSeries = filteredSeries.filter((serie) => serie.trending);
  } else if (extraFilter === "nostalgia") {
    filteredMovies = filteredMovies.filter((movie) => movie.nostalgia);
    filteredSeries = filteredSeries.filter((serie) => serie.nostalgia);
  }

  const filteredItems =
    filterType === "all"
      ? [...filteredMovies, ...filteredSeries]
      : filterType === "movies"
      ? filteredMovies
      : filteredSeries;

  return (
    <main>
      <div className="pattern" />
      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="Hero Banner" />
          <h1>
            Shiko <span className="text-gradient">Anime</span> Shqip
          </h1>
        </header>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <div className="flex items-center mt-4 justify-center gap-4 flex-wrap">
          <button
            className={`py-2 px-4 rounded-lg cursor-pointer ${
              filterType === "all" ? "bg-blue-500 text-white" : "bg-gray-300"
            }`}
            onClick={() => setFilterType("all")}
          >
            Te gjitha
          </button>
          <button
            className={`py-2 px-4 rounded-lg cursor-pointer ${
              filterType === "movies" ? "bg-blue-500 text-white" : "bg-gray-300"
            }`}
            onClick={() => setFilterType("movies")}
          >
            Filmat
          </button>
          <button
            className={`py-2 px-4 rounded-lg cursor-pointer ${
              filterType === "series" ? "bg-blue-500 text-white" : "bg-gray-300"
            }`}
            onClick={() => setFilterType("series")}
          >
            Serialet
          </button>
          <button
            className={`py-2 px-4 rounded-lg cursor-pointer ${
              extraFilter === "trending"
                ? "bg-green-500 text-white"
                : "bg-gray-300"
            }`}
            onClick={() =>
              setExtraFilter(extraFilter === "trending" ? null : "trending")
            }
          >
            Trending
          </button>
          <button
            className={`py-2 px-4 rounded-lg cursor-pointer ${
              extraFilter === "nostalgia"
                ? "bg-yellow-500 text-white"
                : "bg-gray-300"
            }`}
            onClick={() =>
              setExtraFilter(extraFilter === "nostalgia" ? null : "nostalgia")
            }
          >
            Nostalgji
          </button>
        </div>
      </div>

      <section className="all-movies mt-6">
        <ul>
          {filteredItems.map((item) => (
            <li key={item.id}>
              {item.type === "Anime" ||
              item.type === "Disney" ||
              item.type === "Cartoon" ? (
                <MovieCard movie={item} />
              ) : (
                <SeriesCard series={item} />
              )}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default HomePage;
