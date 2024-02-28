import { useDispatch, useSelector } from "react-redux";
import { reset } from "../redux/Slices/MyTicketSlice";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { GrLocation } from "react-icons/gr";
import { useEffect } from "react";

const MyTicketPage = () => {
  const dispatch = useDispatch();

  useEffect(() => window.scrollTo(0, 0));

  const { tickets } = useSelector((state: any) => state.myTicket);

  console.log("allTickets", tickets);

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
    // const [weekday, day,  month, year] = formattedDate.split(' ');
    // const date1 = day.split("").replace(",", " ");
    // const capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1);

    // return `${weekday} ${capitalizedMonth} ${day}  ${year}`;
  };

  // const clickHandler = () => {};

  return (
    <div>
      <Navbar />
      <div className="w-11/12 mx-auto m-5 mt-[3rem] mob-s:mt-[5rem] mob-l:mt-[7rem]">
        <p className="font-bold text-xl mob-m:text-2xl sm:text-3xl text-[--Shade-900]">
          My Tickets
        </p>
        <p className="font-medium text-sm mob-m:text-md sm:text-lg text-[--Shade-600]">
          List of tickets and transactions you have made
        </p>

        {tickets.length === 0 && (
          <div className="font-bold text-3xl text-center m-5">
            There are no Booked Ticket !!!
          </div>
        )}

        <div>
          {tickets.map((ticket: any, index: any) => (
            <div key={index}>
              <Link to={`/my-ticket/${ticket.token}`}>
                <div className="flex flex-col gap-y-4 min-[720px]:flex-row m-10 items-center gap-x-12">
                  <div>
                    <img
                      src={ticket.movie.image}
                      alt="MoviePoster"
                      className="w-48 h-50 mob-s:h-64 rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col gap-y-6">
                    <div className="flex flex-col gap-y-1">
                      <p className="font-medium text-lg mob-m:text-xl mob-l:text-2xl min-[500px]:text-3xl text-[--Shade-900]">
                        {ticket.movie.name}
                      </p>
                      <p className="font-normal text-sm mob-m:text-md mob-l:text-lg text-[--Shade-700]">
                        {formatDate(ticket.date)}, {ticket.time}
                      </p>
                    </div>
                    <div className="flex items-center gap-x-4">
                      <p className="font-normal text-sm mob-s:text-md mob-m:text-lg mob-l:text-xl text-[--Shade-400] flex items-center gap-x-2">
                        <GrLocation />
                        {ticket.theater.theaterName}
                      </p>
                      <p className="font-medium text-sm mob-s:text-md mob-m:text-lg mob-l:text-xl text-[--Shade-700]">
                        ({ticket.theater.dimensionCategory})
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
              <hr className="w-full min-h-5" />
            </div>
          ))}
        </div>

        <div className="w-20 mx-auto border p-2 border-[--Shade-300] text-[--Shade-300] rounded-md cursor-pointer">
          <Link to={"/"}>
            <div className="flex items-center justify-center">HOME</div>
          </Link>
        </div>

        {tickets.length > 0 && (
          <button
            className="m-5 w-32 mx-auto border p-2 border-[--Shade-300] text-[--Shade-300] rounded-md cursor-pointer flex items-center justify-center"
            onClick={() => dispatch(reset())}
          >
            Data Reset
          </button>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default MyTicketPage;
