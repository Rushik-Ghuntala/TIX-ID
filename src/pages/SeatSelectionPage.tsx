// import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
  selectTime,
  setSelectedSeats,
} from "../redux/Slices/MovieBookingSlice";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { FcClock, FcApproval } from "react-icons/fc";
import { IoArrowBack } from "react-icons/io5";

const SeatSelectionPage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // const [selectedSeat, setSelectedSeat] = useState<string[]>([]);

  const { selectedTheater, selectedTime } = useSelector(
    (state: any) => state.movieBooking
  );

  console.log("Selectded Theater ", selectedTheater);

  // const { theaterName, dimensionCategory, time } = selectedTheater;

  const dispatch = useDispatch();
  const { selectedTimeSlotsList } = useSelector(
    (state: any) => state.movieBooking
  );

  const { selectedSeats = [] } = useSelector(
    (state: any) => state.movieBooking
  );

  const handleSeatClick = (seat: string) => {
    const updatedSeats = [...selectedSeats];
    const seatIndex = updatedSeats.indexOf(seat);

    if (seatIndex === -1 && selectedSeats.length < 5) {
      updatedSeats.push(seat);
    } else if (seatIndex !== -1) {
      updatedSeats.splice(seatIndex, 1);
    } else if (selectedSeats.length >= 5) {
      updatedSeats.shift();
      updatedSeats.push(seat);
    }

    dispatch(setSelectedSeats(updatedSeats));
  };

  // console.log("Var of Seat: ", selectedSeat)

  // Function to render seat components
  const renderSeats = () => {
    const rows = ["A", "B", "C", "D", "E", "F", "G", "H"];
    const columns = Array.from({ length: 20 }, (_, index) => index + 1);

    return rows.map((row) => (
      <div key={row} className="flex gap-4 justify-between items-center">
        {columns.map((column) => {
          const seat = `${row}${column}`;
          const isSelected = selectedSeats.includes(seat);

          return (
            <div
              key={`${row}${column}`}
              className={`seat ${
                isSelected ? "selected bg-red-300" : "bg-gray-200"
              } rounded-md p-3 cursor-pointer`}
              onClick={() => handleSeatClick(seat)}
            >
              {row}
              {column}
            </div>
          );
        })}
      </div>
    ));
  };

  //storing all data in variable
  const [storedData] = useState({
    storedTheater: selectedTheater,
    storedTime: selectTime,
    storedSeat: selectedSeats,
  });

  console.log(storedData);

  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div>
        <div className="mt-[7rem] w-11/12 mx-auto">
          <div className="text-4xl font-bold text-[--Shade-900]">
            Select Seats
          </div>

          <div className="text-base font-normal text-[--Shade-600] my-2">
            Choose the seat you will occupy during the movie screening
          </div>

          <div className="flex items-center gap-x-2 my-3">
            <div>
              <FcClock size={20} />
            </div>
            <div className="font-bold text-lg my-3">
              Selected Time: {selectedTime}
            </div>
          </div>
          <div>
            <div className="flex items-baseline gap-3 my-6">
              <div className="font-bold text-sm">Change Time:</div>
              <div className="w-72 flex flex-wrap gap-2">
                {selectedTimeSlotsList.map((time: any) => (
                  <p
                    className={`${
                      selectedTime === time ? "bg-[#1A2C50] text-white" : ""
                    } border border-[--Shade-400] cursor-pointer rounded-md w-16 p-2`}
                    //className={`${selectedTime} === ${time} ? 'text-red-500' : 'text-slate-200'`}
                    onClick={() => dispatch(selectTime(time))}
                  >
                    {time}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="p-4">
            <h2 className="text-2xl font-bold mb-4 text-[--Shade-900]">
              Seat Selection
            </h2>
            <div className="grid grid-cols-20 gap-2 justify-start items-center overflow-scroll ">
              {renderSeats()}
            </div>
          </div>
        </div>

        <div className="w-full my-14 h-16 flex justify-center items-center  uppercase bg-[--Sky-Blue] text-md mob-s:text-xl mob-m:text-2xl font-bold text-[--Shade-200]">
          The cinema screen is here
        </div>

        <div className="w-11/12 mx-auto my-9 flex flex-col gap-y-5 sm:flex-row items-center justify-between">
          <div>
            <h3 className="font-bold text-lg mob-m:text-xl mob-l:text-2xl text-[--Shade-600] mb-2">
              Selected Seats:
            </h3>
            <ul className="flex gap-5 text-lg mob-s:text-xl mob-m:text-2xl mob-l:text-3xl font-bold text-[--Shade-900]">
              {selectedSeats.map((seat: string) => (
                <li key={seat}>{seat}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div onClick={() => navigate(-1)} className="border border-[--Shade-600] rounded-md text-md mob-s:text-lg mob-l:text-xl font-medium uppercase h-10 p-3 mob-s:p-5 mob-l:p-7 flex items-center gap-3 cursor-pointer">
              <div>
                <IoArrowBack size={20} />
              </div>
              <div>Back</div>
            </div>
            <div className="border bg-[--Royal-Blue] text-[--Sunshine-Yellow]  rounded-md text-md mob-s:text-lg mob-l:text-xl font-medium uppercase h-10 p-3 mob-s:p-5 mob-l:p-7 flex items-center gap-3 cursor-pointer">
              {selectedSeats.length != 0 && (
                <Link to={"/movie-schedule/seat-selection/confirm-payment"}>
                  <div className="flex items-center gap-3 hover:text-white">
                    <div>
                      <FcApproval size={25} />
                    </div>
                    <div>Confirmation</div>
                  </div>
                </Link>
              )}
            </div>
          </div>
        </div>

        <div></div>

        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default SeatSelectionPage;
