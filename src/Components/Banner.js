import React,{useState,useEffect} from "react";
import Image from "../banner.jpg";
import axios from 'axios';
function Banner() {

  const [movie,setMovies] = useState({});
  useEffect(function(){
  axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=5540e483a20e0b20354dabc2d66a31c9&page=1`).then((res) => {
        // console.table(res.data.results)
        setMovies(res.data.results[0]);
    }
    )
  },[])
  return (
    <div
      className={`bg-[url(https://image.tmdb.org/t/p/original${movie.backdrop_path})] h-[45vh] md:h-[70vh] 
     bg-center bg-cover flex items-end font-serif`}
    >
      <div className="text-white text-xl md:text-3xl bg-gray-900 bg-opacity-70 w-full flex justify-center p-4">
        {movie.title}
      </div>
    </div>
  );
}

export default Banner;
