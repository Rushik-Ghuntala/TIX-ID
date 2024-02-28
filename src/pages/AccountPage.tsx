// import React from 'react'
import Navbar from "../components/Navbar";
import { useDispatch } from "react-redux";
import { userLogout } from "../redux/Slices/LoginSlice";
import { useNavigate } from "react-router";

const AccountPage = () => {
  // const login = useSelector((state: any) => state.login)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // console.log(login.useData.name);

  const logoutHandler = (event: any) => {
    event.preventDefault();
    dispatch(userLogout());
    navigate("/");
  };

  return (
    <div>
      <Navbar />

      <div className="bg-gray-200 w-9/12 mt-[7rem] mx-auto px-6 py-1 pb-[3rem] rounded-3xl">
        <div className="w-11/12  mx-auto my-[5rem] flex justify-between items-center">
          <div className="w-[20rem] h-[20rem] flex justify-center items-center rounded-full drop-shadow-lg bg-[--Royal-Blue] text-[--Sunshine-Yellow]">
            <p className="z-[100] font-bold text-8xl">R</p>
          </div>
          <div className="flex flex-col gap-y-10 font-bold text-4xl">
            <p>Name: Rushik</p>
            <p>Contact Number: 9898989898</p>
            <p>Password: 1111</p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button
            onClick={logoutHandler}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-12 rounded-full"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
