import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import NewsPost from '../components/NewsPost';
// import NewsPostPage from './NewsPostPage';

const NewsPage: React.FC = () => {

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
  
  return (
    <div>
      <Navbar />

      <NewsPost />
    </div>
  );
};

export default NewsPage;
