// import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import movie1 from "../assets/logo/Clapperboard.svg";
// import movie2 from "../assets/logo/Movie Roll.svg";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const PaymentSuccess = () => {
  useEffect(() => window.scrollTo(0, 0));

  return (
    <div>
      <Navbar />

      <div className="mt-[7rem]">
        <h1 className="font-bold text-3xl mob-l:text-4xl md:text-5xl text-center">
          Payment successful!
        </h1>

        <div className="flex justify-center items-center my-5">
          <img src={movie1} alt="logo" />
          {/* <img src={movie2} alt="logo2" className="absolute" /> */}
        </div>

        <p className="font-normal m-2 text-md mob-l:text-lg md:text-xl text-[--Shade-600] text-center my-5">
          Transaction details have been sent to your email, you can also check
          other
          <br /> ticket details in My Tickets both on the website and your
          smartphone.
        </p>

        <div className="my-10 cursor-pointer border rounded-lg border-[--Shade-600] font-medium text-lg mob-m:text-xl sm:text-2xl text-[--Shade-400] flex justify-center items-center w-40 p-3 mx-auto">
          <Link to={"/my-ticket"}>
            <div className="hover:text-[--Shade-400]">My Ticket</div>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PaymentSuccess;
