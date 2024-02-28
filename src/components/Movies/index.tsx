// // import React from 'react'
// // import { movies } from '../data-API/movies-data'

// import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { showMoviesData } from "../redux/Thunk/MoviesThunk";
// import { MoviesData } from "../data-API/movies-data";
// import { setMovieData } from "../redux/Slices/MovieBookingSlice";
// import { MovieSliceProps } from "../redux/Slices/MoviesSlice";
// import styled from "styled-components";
// // import { showAllData } from '../redux/Slices/MoviesSlice';

// const Movies = () => {
//   var settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   const slider = useRef<Slider>(null); // Specify Slider type here

//   const dispatch = useDispatch();

//   const [id, setId] = useState("");

//   const { moviesData, loading } = useSelector(
//     (state: { movies: MovieSliceProps }) => state.movies
//   );

//   useEffect(() => {
//     dispatch(showMoviesData() as any);
//   }, []);

//   const [selectedMovie, setSelectedMovie] = useState(null);

//   const handleMovieSelect = (movie: any) => {
//     setSelectedMovie(movie);
//     console.log("handleMovieSelect: ", movie);
//     localStorage.setItem("selectedMovie", JSON.stringify(movie));

//     dispatch(setMovieData(movie));
//   };

//   // const [selectedMovie, setSelectedMovie] = useState("")

//   // const clickHandler = () => {
//   //     console.log("Select ho gaya Bhai")
//   // }

//   // const [selectedMovie, setSelectedMovie] = useState(null);

//   // // Function to handle movie selection and storage in localStorage
//   // const handleMovieSelect = (movie: any) => {
//   //     setSelectedMovie(movie);
//   //     console.log("Selected Movie: ", selectedMovie)
//   //     localStorage.setItem('selectedMovie', JSON.stringify(movie));
//   // };

//   return (
//     <div>
//       <div className="hidden mob-l:flex w-11/12 mx-auto items-center mt-[7rem] mb-[2rem]">
//         <button
//           onClick={() => slider?.current?.slickPrev()}
//           className="w-[50px] h-[50px] mob-l:w-[60px] mob-l:h-[60px]  sm:w-[65px] sm:h-[65px] md:w-[60px] md:h-[60px]  lg:w-[72px] lg:h-[72px] z-10 flex justify-center items-center rounded-full border bg-white drop-shadow-2xl"
//         >
//           <AiOutlineLeft />
//         </button>
//         <div className="w-[80%] mob-l:w-[90%]] md:w-[80%] lg:w-[85%] h-full  mx-auto flex flex-col">
//           <Slider ref={slider} {...settings}>
//             {loading ? (
//               <h1>LOADING</h1>
//             ) : (
//               moviesData.map((movie) => (
//                 <div key={movie.id} className="flex">
//                   <MoviesContainer className="mx-auto flex flex-col justify-between items-center">
//                     <MoviesInnerContainer className="">
//                       <Link
//                         to={`/movie-schedule?id=${movie.id}`}
//                         onClick={() => handleMovieSelect(movie)}
//                       >
//                         <MoviePoster
//                           src={movie.image}
//                           className="rounded-2xl bg-cover"
//                         ></MoviePoster>
//                       </Link>
//                     </MoviesInnerContainer>
//                     <MoviesDescContainer className="flex flex-col justify-between items-center">
//                       <div className="font-bold text-lg mob-l:text-2xl sm:text-3xl md:text-xl lg:text-3xl xl:text-4xl text-[--Shade-900]">
//                         <p>{movie.name}</p>
//                       </div>
//                       <div className="flex gap-x-5">
//                         <div className="w-9 h-7 rounded flex items-center justify-center bg-[--XXI-Gradient1] text-[--White] font-bold text-xs">
//                           XXI
//                         </div>
//                         <div className="w-10 h-7 rounded flex items-center justify-center bg-[--CGV-Red] text-[--White] font-bold text-xs">
//                           CGV
//                         </div>
//                         <div className="w-20 h-7 rounded flex items-center justify-center bg-[--Cenepolis-Blue] text-[--White] font-bold text-xs">
//                           Cinépolis
//                         </div>
//                       </div>
//                     </MoviesDescContainer>
//                   </MoviesContainer>
//                 </div>
//               ))
//             )}
//           </Slider>
//         </div>
//         <button
//           onClick={() => slider?.current?.slickNext()}
//           className="w-[50px] h-[50px] mob-l:w-[60px] mob-l:h-[60px] sm:w-[65px] sm:h-[65px] md:w-[60px] md:h-[60px]  lg:w-[72px] lg:h-[72px] z-10 flex justify-center items-center rounded-full border bg-white drop-shadow-2xl"
//         >
//           <AiOutlineRight />
//         </button>
//       </div>

//       <div className="flex mob-l:hidden overflow-scroll scroll_none w-full mx-auto items-center mt-[4rem] mob-s:mt-[7rem] ">
//         {moviesData.map((movie) => (
//           <div key={movie.id}>
//             <div className="min-w-[12rem] jio:min-w-[14rem] mob-s:min-w-[15rem] mob-l:min-w-[17rem] mx-4 mob-s:mx-5 ">
//               <div className="mb-4">
//                 <Link
//                   to={`/movie-schedule?id=${movie.id}`}
//                   onClick={() => handleMovieSelect(movie)}
//                 >
//                   <img
//                     src={movie.image}
//                     className="w-[12rem] jio:w-[13rem] mob-s:w-[15rem] mob-l:w-[17rem] h-[16rem] jio:h-[18rem] mob-s:h-[20rem] rounded-2xl bg-cover"
//                   ></img>
//                 </Link>
//               </div>
//               <div className=" flex flex-col justify-between items-center gap-y-3">
//                 <div className="text-sm jio:text-md mob-s:text-lg mob-l:text-xl font-bold text-[--Shade-900]">
//                   {movie.name}
//                 </div>
//                 <div className="flex gap-x-5">
//                   <div className="w-7 jio:w-8 mob-s:w-9 h-5 jio:h-6 mob-s:h-7 rounded flex items-center justify-center bg-[--XXI-Gradient1] text-[--White] font-medium mob-s:font-bold text-xs">
//                     XXI
//                   </div>
//                   <div className="w-8 jio:w-9 mob-s:w-10 h-5 jio:h-6 mob-s:h-7 rounded flex items-center justify-center bg-[--CGV-Red] text-[--White] font-medium mob-s:font-bold text-xs">
//                     CGV
//                   </div>
//                   <div className="w-18 jio:w-19 mob-s:w-20 h-5 jio:h-6 mob-s:h-7 rounded flex items-center justify-center bg-[--Cenepolis-Blue] text-[--White] font-medium mob-s:font-bold text-xs">
//                     Cinépolis
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Movies;

