import React, { useState } from "react";
import { movies, series } from "../data/data";
import MovieCard from "./movies/MovieCard";
import SeriesCard from "./series/SeriesCard";
import Search from "./features/Search";

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredSeries = series.filter((serie) =>
    serie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

        <div className="flex items-center mt-4 justify-center gap-8">
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
        </div>
      </div>

      <section className="all-movies mt-6">
        <ul>
          {filteredItems.map((item) => (
            <li key={item.id}>
              {item.type === "movie" ? (
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
