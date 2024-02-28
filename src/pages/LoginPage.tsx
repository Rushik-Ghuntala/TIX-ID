// import React from 'react'

import { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { RxDividerVertical } from "react-icons/rx";

import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { userLogin } from "../redux/Slices/LoginSlice";

import { userLoginData } from "../type/LoginPageType";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const LoginPage = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

  const [userData, setUserData] = useState<userLoginData>({
    // email: "",
    name: "",
    password: "",
    telNumber: "", // Add phoneNumber to userData
    // countryCode: "" // Add countryCode to userData
  });

  //set show passwor dand hide password variable
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // console.log("Login User Data: ", userData)
  };

  // const handlePhoneChange = (value: string, country: any) => {
  //     setUserData(prevData => ({
  //         ...prevData,
  //         phoneNumber: value,
  //         countryCode: country.dialCode // Update countryCode based on selected country
  //     }));
  // };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (!userData.telNumber || !userData.password) {
      toast.error("Please enter all fields");
      return;
    }

    console.log("Full Login Data: ", userData);

    dispatch(userLogin(userData));

    window.localStorage.setItem("userData", JSON.stringify(userData));

    navigate(-1);
  };

  return (
    <div>
      <div className=" bg-login-background bg-cover h-full mob-s:h-screen w-screem">
        {/* <img src={LoginBackground} className="w-screen h-screen" /> */}
        <div className="w-11/12 mx-auto flex justify-between items-start">
          <div className="w-11/12 mx-auto mt-[2rem] flex flex-col gap-5 min-[920px]:flex-row justify-between items-start">
            {/* BUTTON LEFT SIDE  */}
            <div>
              <button
                onClick={() => navigate(-1)}
                className="bg-transparent text-white text-xl mob-s:text-2xl font-bold  flex gap-x-6 items-center z-100"
              >
                <div>
                  <IoIosArrowRoundBack size={40} />
                </div>
                <div>Return</div>
              </button>
            </div>

            {/* FORM RIGHT SIDE  */}
            <div className="bg-white mb-[1rem] py-10 mob-l:py-14 sm:py-24 md:py-28 px-3 mob-m:px-4 mob-l:px-10 min-[550px]:px-20 sm:px-32 md:px-36 shadow-2xl shadow-slate-700 rounded-lg">
              <div className="">
                <form
                  onSubmit={submitHandler}
                  className="flex flex-col gap-y-4 mob-s:gap-y-8"
                >
                  <div className="font-bold text-xl mob-s:text-2xl mob-m:text-4xl text-black">
                    Log in to TIX ID
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="telNumber"
                      className="font-normal text-xs min-[270px]:text-sm mob-s:text-md mob-m:text-lg text-[--Shade-900]"
                    >
                      PHONE NUMBER
                    </label>
                    <div className="flex items-center gap-x-0 mob-s:gap-x-4 font-normal text-xs min-[270px]:text-sm mob-s:text-md mob-m:text-xl text-[--Shade-400] ">
                      <p className="cursor-default">+91</p>
                      <div>
                        <RxDividerVertical size={28} />
                      </div>
                      <input
                        id="telNumber"
                        name="telNumber"
                        type="tel"
                        placeholder="Enter Phone Number"
                        // size={20}
                        // minlength="9"
                        maxLength={10}
                        onChange={changeHandler}
                        value={userData.telNumber}
                        className="outline-none"
                      />
                    </div>
                    <hr className="bg-[--Shade-300] h-0.5" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="password"
                      className="font-normal text-xs min-[270px]:text-sm mob-s:text-md mob-m:text-lg text-[--Shade-900]"
                    >
                      PASSWORD{" "}
                    </label>
                    <div className="flex justify-between items-center">
                      <input
                        className="font-normal text-xs min-[270px]:text-sm mob-s:text-md mob-m:text-xl text-[--Shade-400] outline-none"
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        placeholder="Enter Your Password"
                        onChange={changeHandler}
                        value={userData.password}
                      />
                      <span
                        className="cursor-pointer "
                        onClick={() => setShowPassword((prev) => !prev)}
                      >
                        {showPassword ? (
                          <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                        ) : (
                          <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                        )}
                      </span>
                    </div>
                    <hr className="bg-[--Shade-300] h-0.5" />
                  </div>

                  <button
                    type="submit"
                    className="border bg-[--Royal-Blue] text-white h-12 rounded-lg font-medium text-xs min-[270px]:text-sm mob-s:text-md mob-m:text-xl"
                  >
                    Login Now
                  </button>

                  <p className="font-normal text-xs text-center text-[--Shade-600]">
                    Don't have an account yet?
                  </p>

                  <button
                    type="submit"
                    className=" border border-[--Shade-600] h-12 rounded-lg text-[--Royal-Blue] font-medium text-xs min-[270px]:text-sm mob-s:text-md mob-m:text-xl"
                  >
                    Register Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
