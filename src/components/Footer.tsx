// import React from 'react'
import logo from "../assets/logo/TIX ID.svg";
import { FaInstagram, FaFacebookSquare, FaTwitter } from "react-icons/fa";
import GooglePlay from "../assets/logo/Google Play.svg";
import AppStore from "../assets/logo/App Store.svg";

const Footer = () => {
  return (
    <div className="flex flex-col justify-between items-start mt-[7rem] mb-[5rem]">
      <hr className="h-1 w-full bg-[--Shade-300] mb-[3rem]" />
      <div className="w-11/12 flex flex-col gap-10 mx-auto md:flex-row justify-between items-start md:items-start">
        <div>
          <img
            src={logo}
            alt="photu"
            className="block mob-s:hidden md:block w-40 lg:w-50 h-16 lg:h-20"
          />
        </div>

        <div className="flex flex-col mob-s:flex-row gap-10 lg:gap-24 lg:mr-6">
          <div className="flex flex-col gap-2 mob-s:gap-6">
            <p className="text-lg font-bold mob-s:font-medium text-[--Shade-900]">
              Company
            </p>
            <p className="text-base font-normal text-[--Shade-900]">
              Contact Us
            </p>
            <p className="text-base font-normal text-[--Shade-900]">About</p>
            <p className="text-base font-normal text-[--Shade-900]">Partner</p>
          </div>
          <div className="flex flex-col gap-2 mob-s:gap-6">
            <p className="text-lg font-bold mob-s:font-medium text-[--Shade-900]">
              About
            </p>
            <p className="text-base font-normal text-[--Shade-900]">
              TIX ID News
            </p>
            <p className="text-base font-normal text-[--Shade-900]">Cinema</p>
            <p className="text-base font-normal text-[--Shade-900]">
              My Ticket
            </p>
            <p className="text-base font-normal text-[--Shade-900]">Payment</p>
            <p className="text-base font-normal text-[--Shade-900]">
              Installment
            </p>
          </div>
          <div className="flex flex-col gap-2 mob-s:gap-6">
            <p className="text-lg font-bold mob-s:font-medium text-[--Shade-900]">
              Support
            </p>
            <p className="text-base font-normal text-[--Shade-900]">
              Help Center
            </p>
            <p className="text-base font-normal text-[--Shade-900]">
              Privacy Policy
            </p>
            <p className="text-base font-normal text-[--Shade-900]">FAQ</p>
            <p className="text-base font-normal text-[--Shade-900]">
              Terms and Conditions
            </p>
            <p className="text-base font-normal text-[--Shade-900]">
              Update Covid-19
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <div className="text-lg font-medium text-[--Shade-900]">
              Follow Social Media
            </div>
            <div className="flex gap-5">
              <div>
                <FaInstagram size={25} />
              </div>
              <div>
                <FaTwitter size={25} />
              </div>
              <div>
                <FaFacebookSquare size={25} />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-lg font-medium text-[--Shade-900]">
              Download the TIX ID Application
            </div>
            <div className="flex flex-col mob-s:flex-row gap-5">
              <div>
                <img src={GooglePlay} />
              </div>
              <div>
                <img src={AppStore} />
              </div>
            </div>
          </div>
          <div className="text-xs font-normal text-[--Shade-900]">
            2021 TIX ID - PT Nusantara Elang Sejahtera.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
