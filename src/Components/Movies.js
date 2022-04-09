import React, { useState, useEffect } from "react";
import Image from "../banner.jpg";
import axios from "axios";

import Pagination from "./Pagination";

function Movies() {
  const [movie, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [hover, setHover] = useState("");
  const [favourites, setFavourites] = useState([]);
  function goAhead() {
    setPage(page + 1);
  }

  function goBack() {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  useEffect(
    function () {
      axios
        .get(
          `https://api.themoviedb.org/3/trending/movie/week?api_key=5540e483a20e0b20354dabc2d66a31c9&page=${page}`
        )
        .then((res) => {
          // console.table(res.data.results)
          setMovies(res.data.results);
          let oldFav = localStorage.getItem("imdb");
          oldFav = JSON.parse(oldFav) ||[];
          setFavourites([...oldFav]);

        });
    },
    [page]
  );

  let addToFav = (movie) => {
    let newArray = [...favourites, movie];
    setFavourites([...newArray]);
    localStorage.setItem("imdb",JSON.stringify(newArray));
  };

  let delFromFav = (movie) =>{
        let newArray = favourites.filter((m)=>m.id!==movie.id)
        setFavourites([...newArray]);
        localStorage.setItem("imdb",JSON.stringify(newArray));
  }

  return (
    <>
      <div className="mb-8 text-center">
        <div className=" mt-8 mb-8 font-bold text-3xl text-center text-black-400">
          Trending Movies
        </div>
        {
        movie.length == 0 ? (
          <div className="flex justify-center">
          <svg role="status" class="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
      </svg>
      </div>
        ) : (
          <div className="flex flex-wrap justify-center ">
            {movie.map((movie) => (
              <div
                className={`bg-[url(https://image.tmdb.org/t/p/original${movie.backdrop_path})] md:h-[30vh] md:w-[250px] h-[30vh] w-[180px]
                                bg-cover bg-center rounded-xl flex items-end m-5 hover:scale-110 ease-out duration-300
                                relative drop-shadow-2xl`}
                onMouseEnter={() => {
                  setHover(movie.id);
                  console.log(movie.id);
                }}
                onMouseLeave={() => {
                  setHover("");
                }}
              >
                {hover == movie.id && 
                  <>
                    {!favourites.find((m) => m.id == movie.id) ? (
                      <div
                        className="absolute top-2 right-2
                                  p-2
                                  bg-gray-800
                                  rounded-xl
                                  text-xl
                                  cursor-pointer
                                  "
                        onClick={() => addToFav(movie)}
                      >
                        😍
                      </div>
                    ) : (
                      <div
                        className="absolute top-2 right-2
                                  p-2
                                  bg-gray-800
                                  rounded-xl
                                  text-xl
                                  cursor-pointer
                                  "
                        onClick={() => delFromFav(movie)}
                      >
                        ❌
                      </div>
                    )}
                  </>
                }

                <div className="bg-gray-900 text-white w-full py-2 text-center rounded-b-xl  md:font-bold">
                  {movie.title}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Pagination pageProp={page} goBack={goBack} goAhead={goAhead} />
    </>
  );
}

export default Movies;
