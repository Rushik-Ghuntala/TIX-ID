// /pages/AccountPage.tsx
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../redux/Slices/LoginSlice";
import { useNavigate } from "react-router";
import { RootState } from "../redux/store"; // Adjust the import path to your store file

const AccountPage = () => {
  const { isLoggedIn, userData } = useSelector(
    (state: RootState) => state.login
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    event.preventDefault();
    dispatch(userLogout());
    navigate("/");
  };

  if (!isLoggedIn) {
    navigate("/login");
    return null; // Return null to avoid rendering the component if the user is not logged in
  }

  const avatarUrl = `https://api.dicebear.com/8.x/initials/svg?seed=${userData.email}`;

  return (
    <div>
      <Navbar />
      <div className="bg-gray-100 w-11/12 mt-[7rem] mx-auto px-6 py-8 rounded-3xl shadow-lg">
        <div className="w-full flex flex-col items-center gap-8">
          <img
            src={avatarUrl}
            alt="User Avatar"
            className="w-40 h-40 rounded-full shadow-md"
          />
          <div className="flex flex-col items-center gap-4 text-center font-semibold text-xl md:text-2xl">
            <p className="text-gray-700">Name: {userData.name || "Unknown"}</p>
            <p className="text-gray-700">
              Email: {userData.email || "Unknown"}
            </p>
            <p className="text-gray-700">
              Contact Number: {userData.telNumber || "Unknown"}
            </p>
            <p className="text-gray-700">
              Password: {userData.password ? "******" : "Not Set"}
            </p>
          </div>
          <button
            onClick={logoutHandler}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-full transition duration-200"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
