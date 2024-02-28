// import React from 'react'
import Navbar from "../components/Navbar";
import Movies from "../components/Movies";
import Advertisment from "../components/Advertisment";
import News from "../components/News";
import ComingSoon from "../components/ComingSoon";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Movies />
      <Advertisment />
      <News />
      <ComingSoon />
      <Footer/>
    </div>
  );
};

export default Home;
