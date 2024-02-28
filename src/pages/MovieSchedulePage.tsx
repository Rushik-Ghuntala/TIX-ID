// import React from 'react'

import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { MoviesData, movies } from "../data-API/movies-data";
import Navbar from "../components/Navbar";
import { HiOutlineLocationMarker } from "react-icons/hi";
import DateSelector from "../components/DateSelector";
import { showTheaterData } from "../redux/Thunk/TheaterThunk";
import { useDispatch, useSelector } from "react-redux";
import { DimensionData, TheaterData } from "../data";
import {
  selectDimension,
  selectTime,
  selectTimeSlote,
  setTheaterData,
} from "../redux/Slices/MovieBookingSlice";
import Footer from "../components/Footer";
import { FcSearch, FcFilmReel } from "react-icons/fc";
import { FaIndianRupeeSign } from "react-icons/fa6";

const MovieSchedulePage = () => {
  const dispatch = useDispatch();

  const [selectedTimeSlot, setSelectedTimeSlot] = useState<{
    theaterName: string;
    dimensionCategory: string;
    time: string;
    price: string;
    badge: string;
  } | null>(null);

  useEffect(() => {
    dispatch(showTheaterData() as any);
  }, []);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      day: "2-digit",
      month: "long",
      year: "numeric",
    };
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString("en-US", options);

    return formattedDate;
  };

  const { theaterData } = useSelector(
    (state: { theater: { theaterData: TheaterData[]; loading: boolean } }) =>
      state.theater
  );

  console.log("Theater Data from Thunk: ", theaterData);

  const [_selectedTheater, setSelectedTheater] = useState(null);
  const [_selectedDateTime, setSelectedDateTime] = useState(null);

  const handleMovieSelect = (theater: any) => {
    setSelectedTheater(theater);
    if (selectedDate) {
      //Minute me convert ho gya
      const timezoneOffset = selectedDate.getTimezoneOffset() * 60000;
      const selectedDateAdjusted = new Date(
        selectedDate.getTime() - timezoneOffset
      );
      const selectedDateOnly = selectedDateAdjusted.toISOString().split("T")[0];

      setSelectedDateTime(selectedDateOnly as any);
      dispatch(setTheaterData({ theater, dateTime: selectedDateOnly }));
    } else {
      console.error("No date selected.");
    }
  };

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const [tid, setTid] = useState("");

  const { selectedTime, selectedDimensionCategory } = useSelector(
    (state: any) => state.movieBooking
  );

  // const [selectedTheaterId, setSelectedTheaterId] = useState("")

  const handleDateSelection = (date: Date) => {
    setSelectedDate(date);
    console.log("Selected date: ", selectedDate);
  };

  const handleTimeSlotSelection = (
    theaterName: string,
    dimensionCategory: string,
    time: string,
    price: string,
    badge: string
  ) => {
    setSelectedTimeSlot({ theaterName, dimensionCategory, time, price, badge });
    console.log("Selected Time Slot Data: ", selectedTimeSlot);
  };

  const [searchParams, _setSearchParams] = useSearchParams();
  const [movieData, setMovieData] = useState<MoviesData>();
  // const [cinemaData, setCinemaData] = useState<TheaterData>();
  const [_cinemaData, setCinemaData] = useState<TheaterData[]>([]);

  // const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedBadge, setSelectedBadge] = useState<string>("all");
  const [selectedDimension, setSelectedDimension] = useState<string>("all");
  const [selectedCity, setSelectedCity] = useState<string>("surat");
  const [searchText, setSearchText] = useState<string>("");

  const handleDropdownChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    // setSelectedCity(event.target.value);
    // setSelectedBadge(event.target.value);
    // setSelectedDimension(event.target.value);
    // console.log(selectedCity)
    // console.log(selectedBadge)
    // console.log(selectedDimension)

    const { name, value } = event.target;
    if (name === "city") {
      setSelectedCity(value);
    } else if (name === "badge") {
      setSelectedBadge(value);
    } else if (name === "dimension") {
      setSelectedDimension(value);
    }
  };

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchText(event.target.value);
  };

  // const filteredTheaters = theaterData.filter(theater =>
  //     theater.city.toLowerCase() === selectedCity.toLowerCase() &&
  //     theater.name.toLowerCase().includes(searchText.toLowerCase())
  // );

  const filteredTheaters = theaterData.filter(
    (theater) =>
      theater.city.toLowerCase() === selectedCity.toLowerCase() &&
      theater.name.toLowerCase().includes(searchText.toLowerCase()) &&
      (selectedBadge === "all" || theater.badge === selectedBadge) &&
      theater.dimension.some(
        (dimension) =>
          selectedDimension === "all" ||
          dimension.dimensionCategory === selectedDimension
      )
  );

  const getId = () => {
    const id = searchParams.get("id");
    if (id) {
      const movie = movies.find((movieData) => movieData.id === +id);
      if (movie) {
        setMovieData(movie);
        console.log(movie.name);
      }
    }
  };

  const getTheaterData = () => {
    const city = selectedCity.toLowerCase();
    console.log("selectedCity:", city);
    const theatersInCity = theaterData.filter(
      (theater) => theater.city.toLowerCase() === city
    );
    console.log("theaterData", theatersInCity);
    setCinemaData(theatersInCity);
    console.log(theatersInCity);
  };

  useEffect(() => {
    getId();
    getTheaterData();
    window.scrollTo(0, 0);
  }, [selectedCity]);

  // const renderDimensionCategories = (dimensionData: DimensionData[] | undefined) => {
  //     if (!dimensionData) return null;

  //     return cinemaData.map((filter) => (filter.dimension.map((dimension) => (
  //         <div key={dimension.dimensionCategory}>
  //             <h3>{dimension.dimensionCategory}</h3>
  //             <h3>{dimension.price}</h3>
  //             <ul>
  //                 {dimension.time.map((time, index) => (
  //                     <li key={index}>
  //                         {time}
  //                     </li>
  //                 ))}
  //             </ul>
  //         </div>
  //     ))))
  // };

  // {console.log("Theater Data:", theaterData)}

  return (
    <div>
      {/* TESTING  */}
      {/* <div>MovieSchedulePage</div>
            <div>{movieData?.name}</div>
            <div>{cinemaData?.name}</div> */}

      <Navbar />

      <div className="w-full min-[920px]:w-11/12 flex flex-col min-[920px]:flex-row mx-auto mt-[9rem]">
        {/* LEFT CONTAINER  */}
        <div className="w-11/12 mx-auto min-[920px]:w-2/4 ">
          <div className="font-bold text-4xl my-2">Schedule</div>
          <div className="text-base text-[--Shade-600] font-normal my-3">
            Choose the cinema schedule you want to watch
          </div>

          <div className="w-11/12 min-[920px]:w-11/12 h-20 my-6">
            <DateSelector onDateSelect={handleDateSelection} />
            <div className="w-11/12 h-1 ml-11 mt-6">
              <hr />
            </div>
          </div>

          <form className="mt-12 ml-7">
            <div className="flex items-center gap-x-2 my-3">
              <div>
                <HiOutlineLocationMarker />
              </div>
              <div>
                <select
                  id="city"
                  name="city"
                  value={selectedCity}
                  onChange={handleDropdownChange}
                >
                  <option value="all">CITY</option>
                  <option value="surat">Surat</option>
                  <option value="mumbai">Mumbai</option>
                  <option value="ahmedabad">Ahmedabad</option>
                </select>
              </div>
            </div>
            <div className="w-full flex flex-wrap sm:flex-nowrap min-[920px]:flex-wrap gap-y-3 items-center gap-x-3 my-5">
              <div className="flex border border-black rounded-lg p-2 items-center justify-between">
                <input
                  type="text"
                  id="search"
                  name="search"
                  placeholder="Search Theater"
                  value={searchText}
                  onChange={handleSearchInputChange}
                  className="outline-none rounded-sm"
                />
                {/* <IoSearch size={20} stroke="black" strokeWidth={2} /> */}
                <FcSearch size={25} />
              </div>
              <div className="border outline-none border-black rounded-lg p-1">
                <select
                  id="badge"
                  name="badge"
                  value={selectedBadge}
                  onChange={handleDropdownChange}
                >
                  <option value="all">BADGE</option>
                  <option value="CGV">CGV</option>
                  <option value="CINEPOLIS">CINEPOLIS</option>
                  <option value="XXI">XXI</option>
                </select>
              </div>
              <div className="border outline-none border-black rounded-lg p-1">
                <select
                  id="dimension"
                  name="dimension"
                  value={selectedDimension}
                  onChange={handleDropdownChange}
                >
                  <option value="all">DIMENSION</option>
                  <option value="Regular 2D">Regular 2D</option>
                  <option value="Gold Class 2D">Gold Class 2D</option>
                  <option value="Velvet 2D">Velvet 2D</option>
                  <option value="2D">2D</option>
                </select>
              </div>
            </div>
          </form>

          {/* THEATER SECTION  */}
          <div className="m-7">
            {/* {cinemaData.map((theater) => (
                        <div key={theater.id}>
                            <h2>{theater.name}</h2>
                            <p>{theater.address}</p>
                            {renderDimensionCategories(theater.dimension)}
                        </div>
                    ))} */}
            {/* Render filtered theaters */}
            {filteredTheaters.map((theater) => (
              <div key={theater.id} onClick={() => setTid(theater.id)}>
                <div className="w-full flex flex-col mob-s:flex-row justify-between my-2">
                  <div className="flex items-center gap-x-3">
                    <FcFilmReel size={25} />
                    <h2 className="font-medium text-2xl mob-s:text-xl sm:text-2xl">
                      {theater.name}
                    </h2>
                  </div>
                  <div
                    className={`${
                      theater.badge === "CGV" ? "cgv" : "bg-gray-50"
                    } 
                    ${
                      theater.badge === "CINEPOLIS" ? "cinepolis" : "bg-gray-50"
                    }
                    ${theater.badge === "XXI" ? "xxi" : "bg-gray-50"}
                    border h-9 text-white font-bold  flex justify-center items-center  p-2 rounded-md`}
                  >
                    <p>{theater.badge}</p>
                  </div>
                </div>
                <p className="font-normal text-sm sm:text-base text-[--Shade-600]">
                  {theater.address}
                </p>
                {/* {renderDimensionCategories(theater.dimension)} */}
                {/* <p>{theater.city}</p> */}

                {/* <h1>hello</h1> */}
                <ul className="mb-5">
                  {theater.dimension.map((dimension: DimensionData) => (
                    <li
                      key={dimension.dimensionCategory}
                      onClick={() => dispatch(selectTimeSlote(dimension.time))}
                    >
                      <div className="w-full flex justify-between items-center my-3">
                        <div className="font-medium text-xl text-[--Shade-600] uppercase">
                          {dimension.dimensionCategory}
                        </div>
                        <div className="flex items-center">
                          <div>
                            <FaIndianRupeeSign size={14} />
                          </div>
                          <div>{dimension.price}</div>
                        </div>
                      </div>
                      <ul className="w-11/12 mob-s:w-10/12 mob-m:w-9/12 mob-l:w-8/12 sm:w-7/12 md:w-6/12 flex flex-wrap gap-3">
                        {dimension.time.map((time, index) => (
                          <li
                            key={index}
                            className={` ${
                              selectedDimensionCategory ===
                                dimension.dimensionCategory &&
                              selectedTime === time
                                ? "bg-[#1A2C50] text-white"
                                : ""
                            } border border-[--Shade-400] text-sm font-bold cursor-pointer w-16 px-3 py-2 rounded-md`}
                            onClick={() => (
                              handleTimeSlotSelection(
                                theater.name,
                                dimension.dimensionCategory,
                                time,

                                dimension.price,
                                theater.badge
                              ),
                              dispatch(selectTime(time)),
                              dispatch(
                                selectDimension(
                                  selectedTimeSlot?.dimensionCategory
                                )
                              )
                            )}
                          >
                            {time}
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div>
          <hr className="bg-[--Shade-300] h-1 m-10" />
        </div>

        {/* RIGHT CONTAINER  */}
        <div className="w-11/12 mx-auto min-[920px]:w-2/4 flex flex-col justify-start items-center">
          <div className="w-[16rem] mob-s:w-[18rem] mob-m:w-[20rem] mx-auto flex flex-col gap-y-8">
            <div>
              <img
                src={movieData?.image}
                alt="image"
                className="w-[16rem] mob-s:w-[18rem] mob-m:w-[20rem] xl:w-[25rem] h-[21rem] mob-s:h-[23rem] mob-m:h-[25rem] xl:h-[30rem] rounded-lg shadow-lg "
              />
            </div>

            <div className="flex flex-col gap-y-2">
              <div className="text-2xl font-medium">{movieData?.name}</div>
              <div className="flex gap-x-12">
                <div className="flex flex-col gap-y-3">
                  <div>Genre</div>
                  <div>Duration</div>
                  <div>Director</div>
                  <div>Rated</div>
                </div>
                <div className="flex flex-col gap-y-3">
                  <div>{movieData?.genre}</div>
                  <div>{movieData?.duration}</div>
                  <div>{movieData?.director}</div>
                  <div>{movieData?.rated}</div>
                </div>
              </div>
            </div>
          </div>

          {/* SHOW DATE  */}
          <div className="border border-[--Shade-600] rounded-lg px-14 xl:px-16 py-10 my-20">
            <div className="text-3xl font-bold">
              {selectedTimeSlot
                ? `${selectedTimeSlot?.theaterName}`
                : "Please Select The Time"}
            </div>
            <div className="mt-4 text-lg font-medium text-[--Shade-600] mt-10">
              {selectedDate
                ? formatDate(selectedDate as unknown as string)
                : "No date selected"}
            </div>

            <div className="mt-2 text-center">
              {selectedTimeSlot ? (
                <div className="flex flex-col mob-s:flex-row items-center justify-between text-xl font-medium">
                  <div>{selectedTimeSlot.dimensionCategory}</div>
                  <div>{selectedTimeSlot.time}</div>
                </div>
              ) : (
                "No time slot selected"
              )}
            </div>

            <div className="font-normal text-xs text-[--Shade-400] my-4">
              <sup>*</sup>Seat selection can be done after this
            </div>

            {selectedDate && selectedTimeSlot && (
              <Link to={`/movie-schedule/seat-selection?id=${tid}`}>
                <button
                  className="border rounded-lg bg-[--Royal-Blue] w-full p-2.5 text-2xl font-medium text-[--Sunshine-Yellow]"
                  onClick={() => handleMovieSelect(selectedTimeSlot)}
                >
                  Buy Now
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MovieSchedulePage;
