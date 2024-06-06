// /pages/LoginPage.tsx

import { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { RxDividerVertical } from "react-icons/rx";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { userLogin } from "../redux/Slices/LoginSlice";
import { userLoginData } from "../type/LoginPageType";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { RootState } from "../redux/store"; // Adjust the import path to your store file

const LoginPage = () => {
  const [userData, setUserData] = useState<userLoginData>({
    password: "",
    telNumber: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signupData = useSelector((state: RootState) => state.signup.userData);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitHandler = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    if (!userData.telNumber || !userData.password) {
      toast.error("Please enter all fields");
      return;
    }

    setLoading(true);

    try {
      // Simulate API request
      await new Promise<void>((resolve, reject) => {
        // Here, you would typically make an API call to validate the user
        // and check if the password is correct
        setTimeout(() => {
          // For demonstration, I'm assuming a simple check
          if (userData.telNumber !== signupData.telNumber) {
            reject("User not registered");
          } else if (userData.password !== signupData.password) {
            reject("Incorrect password");
          } else {
            resolve(); // Resolve without any value
          }
        }, 1000);
      });

      const completeUserData = { ...signupData, ...userData };
      dispatch(userLogin(completeUserData));
      window.localStorage.setItem("userData", JSON.stringify(completeUserData));
      navigate("/");
    } catch (error: any) {
      // Specify the type of error as string
      toast.error(error.toString());
    } finally {
      setLoading(false);
    }
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
                    onClick={() => navigate("/signup")}
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
