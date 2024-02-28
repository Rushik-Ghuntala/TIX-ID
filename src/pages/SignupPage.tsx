import { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { RxDividerVertical } from "react-icons/rx";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { userLogin } from "../redux/Slices/LoginSlice";
import { userSignupData } from "../type/SignupPageType";
import "react-phone-input-2/lib/style.css";

const SignupPage = () => {
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState<userSignupData>({
    name: "",
    telNumber: "",
    countryCode: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  //set show passwor dand hide password variable
  const [showPassword, setShowPassword] = useState(false);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // const handlePhoneChange = (value: string, country: any) => {
  //   setUserData((prevData) => ({
  //     ...prevData,
  //     phoneNumber: value,
  //     countryCode: country.dialCode,
  //   }));
  // };

  const submitHandler1 = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (!userData.name || !userData.telNumber) {
      toast.error("Please enter all fields");
      return;
    }

    setStep(2);

    // console.log("Full Signup Data: ", userData);
    // dispatch(userLogin(userData));
    // window.localStorage.setItem('userData', JSON.stringify(userData));

    // navigate('/')
  };

  const submitHandler2 = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (!userData.email || !userData.password) {
      toast.error("Please enter all fields");
      return;
    }

    console.log("Full Signup Data: ", userData);
    dispatch(userLogin(userData));
    window.localStorage.setItem("userData", JSON.stringify(userData));

    navigate("/");
  };

  return (
    <div>
      <div className={step === 1 ? "visibleLogin" : "hiddenLogin"}>
        {/* First Step */}
        <div className="absolute top-0 bg-signup1-background bg-cover h-full mob-s:h-screen w-screen">
          <div className="w-11/12 mx-auto flex justify-between items-start">
            <div className="w-11/12 mx-auto mt-[2rem] flex flex-col gap-5 min-[920px]:flex-row justify-between items-start">
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

              {/* RIGHT FORM  */}
              <div className="bg-white mb-[1rem] py-10 mob-l:py-14 sm:py-24 md:py-28 px-3 mob-m:px-4 mob-l:px-10 min-[550px]:px-20 sm:px-32 md:px-36 shadow-2xl shadow-slate-700 rounded-lg">
                <form
                  onSubmit={submitHandler1}
                  className="flex flex-col gap-y-4 mob-s:gap-y-8"
                >
                  <div className="font-bold text-xl mob-s:text-2xl mob-m:text-4xl text-black">
                    Sign up for TIX ID
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="name"
                      className="font-normal text-xs min-[270px]:text-sm mob-s:text-md mob-m:text-lg text-[--Shade-900]"
                    >
                      FULL NAME
                    </label>
                    <div className="flex items-center gap-x-0 mob-s:gap-x-4 font-normal text-xs min-[270px]:text-sm mob-s:text-md mob-m:text-xl text-[--Shade-400] ">
                      <input
                        type="name"
                        id="name"
                        name="name"
                        placeholder="Enter Your Full Name"
                        onChange={changeHandler}
                        value={userData.name}
                        className="outline-none"
                      />
                    </div>
                    <hr className="bg-[--Shade-300] h-0.5" />
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

                  <button className="border bg-[--Royal-Blue] text-white h-12 rounded-lg font-medium text-xs min-[270px]:text-sm mob-s:text-md mob-m:text-xl">
                    Continue
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={step === 2 ? "visibleLogin slide-in-right" : "hiddenLogin"}
      >
        {/* Second Step */}
        <div className="absolute top-0 bg-signup2-background bg-cover h-screen w-screen">
          <div className="w-11/12 mx-auto flex justify-between items-start">
            <div className="w-11/12 mx-auto mt-[2rem] flex flex-col gap-5 min-[920px]:flex-row justify-between items-start">
              <div>
                <button
                  onClick={() => setStep(1)}
                  className="bg-transparent text-white text-xl mob-s:text-2xl font-bold  flex gap-x-6 items-center z-100"
                >
                  <div>
                    <IoIosArrowRoundBack size={40} />
                  </div>
                  <div>Return</div>
                </button>
              </div>

              <div className="bg-white mb-[1rem] py-10 mob-l:py-14 sm:py-24 md:py-28 px-3 mob-m:px-4 mob-l:px-10 min-[550px]:px-20 sm:px-32 md:px-36 shadow-2xl shadow-slate-700 rounded-lg">
                <form
                  onSubmit={submitHandler2}
                  className="flex flex-col gap-y-4 mob-s:gap-y-8"
                >
                  <div className="font-bold text-xl mob-s:text-2xl mob-m:text-4xl text-black">
                    Sign up for TIX ID
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="email"
                      className="font-normal text-xs min-[270px]:text-sm mob-s:text-md mob-m:text-lg text-[--Shade-900]"
                    >
                      EMAIL
                    </label>
                    <div className="flex items-center gap-x-0 mob-s:gap-x-4 font-normal text-xs min-[270px]:text-sm mob-s:text-md mob-m:text-xl text-[--Shade-400] ">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter Your Email"
                        onChange={changeHandler}
                        value={userData.email}
                      />
                    </div>
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
                    Register Now
                  </button>

                  <p className="font-medium text-xs text-red-600 text-center">
                    <sup>*</sup>By registering, I agree to the policies of TIX
                    ID.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
