import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

interface DateSelectorProps {
  onDateSelect: (date: Date) => void;
}

const DateSelector: React.FC<DateSelectorProps> = ({ onDateSelect }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1220,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const slider = useRef<Slider>(null);

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    onDateSelect(date);
  };

  const [datesOfMonth, setDatesOfMonth] = useState<
    { date: Date; day: string }[]
  >([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  let isSelected = false;
  if (selectedDate) {
    isSelected = true;
  }
  console.log("isSelected", isSelected);

  useEffect(() => {
    const currentDate = new Date();
    const lastDayOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    ).getDate();
    const dates: { date: Date; day: string }[] = [];

    for (let i = currentDate.getDate(); i <= lastDayOfMonth; i++) {
      const date = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        i
      );
      const day = date.toLocaleDateString("en-US", { weekday: "short" });
      dates.push({ date, day });
    }

    setDatesOfMonth(dates);
  }, []);

  //   const handleDateClick = (date: Date) => {
  //     setSelectedDate(date);
  //   };

  return (
    <div className="app-container ">
      {/* <h2 className='text-blue-500'>Dates from Today to End of Month</h2> */}
      <div className="w-[99%] h-20 mx-auto flex">
        <button
          onClick={() => slider?.current?.slickPrev()}
          className="bg-white m-5"
        >
          <FaAngleLeft />
        </button>

        <div className="w-[90%] ">
          <Slider ref={slider} {...settings}>
            {datesOfMonth.map((dateObj, index) => (
              <div key={index} className="gap-5">
                <div
                  className={` ${
                    dateObj.date === selectedDate
                      ? "bg-[#1A2C50] text-white"
                      : ""
                  } flex flex-col border border-[--Shade-600] w-[5.5rem] h-[5.5rem] rounded-lg justify-center items-center p-3`}
                  // className={`seat ${isSelected ? 'selected bg-red-300' : 'bg-gray-200'} rounded-md p-3 cursor-pointer`}
                  onClick={() => handleDateClick(dateObj.date)}
                >
                  <div>
                    <div className="text-lg font-medium">
                      {dateObj.date.getDate()}{" "}
                      {dateObj.date.toLocaleDateString("en-US", {
                        month: "short",
                      })}
                    </div>
                    <div className="font-black text-2xl uppercase">
                      {dateObj.day}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <button
          onClick={() => slider?.current?.slickNext()}
          className="bg-white"
        >
          <FaAngleRight />
        </button>
      </div>

      {/* {
      selectedDate && (
        <div>
          <h3>Selected Date</h3>
          <p>{selectedDate.toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</p>
        </div>
      )
      } */}
    </div>
  );
};

export default DateSelector;
