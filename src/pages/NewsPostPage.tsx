// import React from 'react'

import { useSearchParams } from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { useEffect, useState } from "react";
import { NewsPostsData, newsData } from "../data-API/news-data";
import NewsContent from "../components/NewsPostContent";

const NewsPostPage = () => {

    const [searchParams] = useSearchParams();
    const [_data, setData] = useState<NewsPostsData>();

    const getId = () => {
        const id = searchParams.get("id");
        if(id) {
          const d = newsData.filter( data => data.id === +id)
          console.log(d[0]);
          setData(d[0]);
        }
    }

    useEffect(() => {
        getId();
    }, [])




  return (
    <div>
        <Navbar/>

        <NewsContent/>

        <Footer/>
    </div>
  )
}

export default NewsPostPage