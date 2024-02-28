// import React from 'react'
import logo from "../assets/logo/TIX ID.svg";
import { RxDividerVertical } from "react-icons/rx";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FcMenu } from "react-icons/fc";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
  const login = useSelector((state: any) => state.login);
  // const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // if(isMenuOpen){
  //   pointer
  // }

  return (
    <div className="fixed top-0 w-full mx-auto  flex bg-white drop-shadow-xl h-10 mob-s:h-12 mob-m:h-16 mob-l:h-20 border z-50">
      {/* LARG DISPLAY  */}
      <div className="w-11/12 mx-auto flex justify-between items-center">
        <div>
          <Link to={"/"}>
            <img src={logo} width={64} height={64} />
          </Link>
        </div>

        {/* LARG DISPLAY  */}
        <div>
          <div className="hidden md:block">
            <nav>
              <ul className="flex mx-auto  gap-x-5 lg:gap-x-10 items-center  font-semibold ">
                <li>
                  <Link to={"/"}>
                    <div className="hover:text-[--Shade-900]">Home</div>
                  </Link>
                </li>
                <li>
                  <Link to={"/my-ticket"}>
                    <div className="hover:text-[--Shade-900]">My Tickets</div>
                  </Link>
                </li>
                <li>
                  <Link to={"/news"}>
                    <div className="hover:text-[--Shade-900]">TIX ID News</div>
                  </Link>
                </li>
                <li>
                  <RxDividerVertical width={2} height={240} size={25} />
                </li>
                <li>
                  <IoMdNotificationsOutline size={25} />
                </li>
                {!login.isLoggedIn && (
                  <li className="text-[18px] font-medium leading-4 ">
                    <Link to={"/signup"}>
                      <p className="text-black hover:text-black">Sign Up</p>
                    </Link>
                  </li>
                )}
                {!login.isLoggedIn && (
                  <li className="w-[101px] h-[48px] rounded-md py-[12px] text-center bg-[--Royal-Blue] ">
                    <Link to={"/login"}>
                      <p className="text-[--Pastel-Yellow] ">Login</p>
                    </Link>
                  </li>
                )}
                {login.isLoggedIn && (
                  <li className="w-[101px] h-[48px] rounded-md py-[12px] text-center bg-[--Royal-Blue] ">
                    <Link to={"/account"}>
                      <div className="text-[--Pastel-Yellow] ">
                        {/* {login.userData.name.charAt(0)} */}
                        Rushik
                      </div>
                    </Link>
                  </li>
                )}
              </ul>
            </nav>
          </div>
        </div>

        {/* MOBILE MD DISPLAY  */}
        <div className="md:hidden">
          <div className="">
            <button className="md:hidden" onClick={toggleMenu}>
              {!isMenuOpen ? (
                <div className="">
                  <FcMenu size={25} />
                </div>
              ) : (
                <div className="h-[100vh] absolute top-0 left-0 w-screen bg-white overflow-scroll">
                  <div className="w-11/12 mx-auto m-2">
                    <div className="flex justify-between items-center">
                      <div>
                        <Link to={"/"}>
                          <img src={logo} width={64} height={64} className="" />
                        </Link>
                      </div>
                      <div className="">
                        <IoCloseCircleOutline
                          size={35}
                          onClick={() => setIsMenuOpen(!isMenuOpen)}
                        />
                      </div>
                    </div>
                    <div className="m-5 flex flex-col items-start gap-10 ">
                      <Link to={"/"}>
                        <div className="font-medium text-2xl cursor-pointer">
                          Home
                        </div>
                      </Link>
                      <Link to={"/my-ticket"}>
                        <div className="font-medium text-2xl">My Tickets</div>
                      </Link>
                      <Link to={"/news"}>
                        <div className="font-medium text-2xl">TIX ID News</div>
                      </Link>

                      {!login.isLoggedIn && (
                        <div className="w-full border bg-[--Royal-Blue] rounded-lg text-[--Royal-Blue] p-4 flex items-center justify-center text-2xl font-medium leading-4">
                          <Link to={"/login"}>
                            <p className="text-[--Pastel-Yellow] ">Login</p>
                          </Link>
                        </div>
                      )}

                      {/* <div className="flex justify-center items-center font-normal text-xs text-[--Shade-600]">
                        Don't have an account yet?
                      </div> */}

                      {!login.isLoggedIn && (
                        <div className="w-full border-2 border-[--Shade-600] rounded-lg text-[--Royal-Blue] p-3 flex items-center justify-center text-2xl font-medium leading-4">
                          <Link to={"/signup"}>
                            <p className="text-black hover:text-black">
                              Sign Up
                            </p>
                          </Link>
                        </div>
                      )}

                      {login.isLoggedIn && (
                        <div className="w-full border-2 bg-[--Royal-Blue] rounded-lg text-[--Royal-Blue] p-3 flex items-center justify-center text-2xl font-medium leading-4">
                          <Link to={"/account"}>
                            <div className="text-[--Pastel-Yellow] ">
                              {login.userData.name.charAt(0)}
                              {/* Rushik */}
                            </div>
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

