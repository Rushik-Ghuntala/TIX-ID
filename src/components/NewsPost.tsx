import React, { useEffect, useState } from "react";
// import { newsData, NewsPostsData } from '../data-API/news-data';
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { NewsData } from "../data";
import { showNewsData } from "../redux/Thunk/NewsThunk";
import { IoSearch } from "react-icons/io5";

const NewsPost: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showNewsData() as any);
  }, []);

  const { newsData } = useSelector(
    (state: { news: { newsData: NewsData[]; loading: boolean } }) => state.news
  );

  // console.log("NewsData form Thunk: " , newsData)

  const [visiblePosts, setVisiblePosts] = useState<number>(3);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchText, setSearchText] = useState<string>("");

  //Aya thi list kadhi nakhu che build na karne
  const [_list, setList] = useState<NewsData[]>();

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCategory(event.target.value);
  };

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchText(event.target.value);
    const l: NewsData[] = newsData.filter((post) =>
      post.title.toLowerCase().includes(searchText.toLowerCase())
    );
    if (event.target.value !== "") {
      setList(l);
    } else {
      setList([]);
    }
  };

  const sortNewsDataDescending = (data: NewsData[]) => {
    return data.slice().sort((a, b) => {
      const dateA = new Date(a.dates);
      const dateB = new Date(b.dates);
      return dateB.getTime() - dateA.getTime();
    });
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "short",
      year: "numeric",
    };
    return date.toLocaleDateString("en-GB", options);
  };

  const handleReadMore = () => {
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 3);
  };

  const renderSubSection = () => {
    const filteredData = sortNewsDataDescending(newsData).filter(
      (post) => post.category !== selectedCategory
    );
    return (
      <div className="flex overflow-scroll scroll_none w-[100vw]">
        {/* <h2>Other Categories</h2> */}
        {filteredData.map((post) => (
          <div key={post.id} className="min-w-[420px] mx-7 ">
            <div>
              <div className="flex justify-between">
                <div className="mb-[2.5rem]">
                  <img
                    src={post.image}
                    loading="lazy"
                    alt={post.title}
                    className="w-[420px] h-[240px] rounded-xl"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-y-5 w-11/12 px-1">
                <div className="w-20 h-8 border flex justify-center items-center font-normal text-sm text-[--Shade-900] capitalize">
                  {post.category}
                </div>
                <div className="font-medium w-11/12 text-2xl text-[--Shade-900]">
                  {post.title}
                </div>
                {/* <div>{post.description.substring(0, 100)}</div> */}
                <div>{formatDate(post.dates)} | TIX ID</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="mt-[5rem] sm:mt-[7rem]">
      <div className=" w-11/12 mx-auto flex flex-col gap-5 my-9">
        <div className="text-2xl mob-m:text-3xl sm:text-4xl font-bold text-[--Shade-900]">
          TIX ID News
        </div>
        <p className="text-xs sm:text-sm font-normal">
          Latest News about the world of cinema for you!
        </p>
        {/* FORM */}
        <form>
          <div className="w-8/12 flex flex-wrap md:flex-nowrap items-center justify-between">
            <div className="md:w-8/12 mx-3 h-10 flex justify-between items-center border border-[--Shade-300] rounded-lg p-5 my-3">
              <input
                className="w-36 mob-l:w-11/12 h-5 outline-none"
                type="text"
                id="search"
                name="search"
                placeholder="Search Post"
                value={searchText}
                onChange={handleSearchInputChange}
              />
              <IoSearch
                color="var(--Shade-300)"
                size={25}
                stroke="black"
                strokeWidth={3}
              />
            </div>

            {/* RECOMDATION CHHEE  */}
            {/* <div className="list-container">
                {
                    list?.map(item => (<div>{item.title}</div>))
                }
            </div> */}

            <div className="flex mx-3 items-center gap-x-4">
              <label htmlFor="category" className="hidden mob-s:block">
                Category:
              </label>
              <select
                id="category"
                name="category"
                value={selectedCategory}
                onChange={handleCategoryChange}
                className="w-40 border border-[--Shade-300] rounded-lg p-2"
              >
                <option value="all">All</option>
                <option value="spotlight">Spotlight</option>
                <option value="news">News</option>
                <option value="video">Video</option>
              </select>
            </div>
          </div>
        </form>
        <div className="flex flex-wrap gap-5 mx-3">
          <p className="border border-[--Shade-500] text-[--Shade-500] hover:border-black hover:text-black hover:cursor-pointer w-32 h-[2.5rem] flex justify-center items-center rounded-3xl">
            Spider Man
          </p>
          <p className="border border-[--Shade-500] text-[--Shade-500] hover:border-black hover:text-black hover:cursor-pointer w-32 h-[2.5rem] flex justify-center items-center rounded-3xl">
            Gucci
          </p>
          <p className="border border-[--Shade-500] text-[--Shade-500] hover:border-black hover:text-black hover:cursor-pointer w-32 h-[2.5rem] flex justify-center items-center rounded-3xl">
            Marvel
          </p>
          <p className="border border-[--Shade-500] text-[--Shade-500] hover:border-black hover:text-black hover:cursor-pointer w-32 h-[2.5rem] flex justify-center items-center rounded-3xl">
            Peter Parker
          </p>
          <p className="border border-[--Shade-500] text-[--Shade-500] hover:border-black hover:text-black hover:cursor-pointer w-32 h-[2.5rem] flex justify-center items-center rounded-3xl">
            Ghostbuster
          </p>
        </div>
      </div>
      {/* MAIN SECTION */}
      <div className="w-11/12 mx-auto">
        {/* Render first 'visiblePosts' number of news data */}
        <div>
          {sortNewsDataDescending(newsData)
            .filter((post) => {
              if (selectedCategory === "all") {
                return post.title
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              } else {
                return (
                  post.category === selectedCategory &&
                  post.title.toLowerCase().includes(searchText.toLowerCase())
                );
              }
            })
            .slice(0, visiblePosts)
            .map((post, index) => (
              <div key={post.id} className="my-[4rem]">
                <div className="hidden md:block">
                  {index % 2 === 0 ? (
                    <div>
                      <div className=" flex w-11/12 justify-between items-center mx-auto">
                        <div className="flex justify-between mx-1">
                          <div>
                            <Link to={`/news-post?id=${post.id}`}>
                              <img
                                src={post.image}
                                loading="lazy"
                                alt={post.title}
                                className="w-[30rem] h-[20rem] rounded-xl"
                              />
                            </Link>
                          </div>
                        </div>
                        <div className="flex flex-col gap-y-5 w-[28rem] px-1">
                          <div className="w-24 h-9 border flex justify-center items-center font-normal text-sm text-[--Shade-900] capitalize">
                            {post.category}
                          </div>
                          <div className="font-medium w-11/12 text-2xl text-[--Shade-900]">
                            {post.title}
                          </div>
                          <div>{post.description[0].substring(0, 100)}...</div>
                          <div>{formatDate(post.dates)} | TIX ID</div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className=" flex w-10/12 justify-between items-center mx-auto">
                        <div className="flex flex-col gap-y-5 w-[28rem] px-1">
                          <div className="w-24 h-9 border flex justify-center items-center font-normal text-sm text-[--Shade-900] capitalize">
                            {post.category}
                          </div>
                          <div className="font-medium w-11/12 text-2xl text-[--Shade-900]">
                            {post.title}
                          </div>
                          <div>{post.description[0].substring(0, 100)}...</div>
                          <div>{formatDate(post.dates)} | TIX ID</div>
                        </div>
                        <div className="flex justify-between">
                          <div>
                            <Link to={`/news-post?id=${post.id}`}>
                              <img
                                src={post.image}
                                loading="lazy"
                                alt={post.title}
                                className="w-[30rem] h-[20rem] rounded-xl"
                              />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="block md:hidden">
                  <div className="w-11/12 mx-auto">
                    <div className=" flex flex-col gap-2 justify-between items-center">
                      <div className="flex justify-between ">
                        <div>
                          <Link to={`/news-post?id=${post.id}`}>
                            <img
                              src={post.image}
                              loading="lazy"
                              alt={post.title}
                              className="w-[30rem] h-[15rem] mob-m:h-[20rem] rounded-xl"
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="flex flex-col gap-y-5 max-w-[28rem] px-1">
                        <div className="w-24 h-9 border flex justify-center items-center font-normal text-sm text-[--Shade-900] capitalize">
                          {post.category}
                        </div>
                        <div className="font-medium w-11/12 text-lg mob-s:text-xl mob-l:text-2xl text-[--Shade-900]">
                          {post.title}
                        </div>
                        <div className="text-justify text-sm mob-l:text-normal">
                          {post.description[0].substring(0, 50)}...
                        </div>
                        <div>{formatDate(post.dates)} | TIX ID</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {/* Button to load more news data */}
        {visiblePosts < newsData.length && (
          <div className="flex justify-center items-center my-[4rem]">
            <button
              onClick={handleReadMore}
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-md font-bold text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Read More
              </span>
            </button>
          </div>
        )}
      </div>
      {/* SUB SECTION */}
      <div className="w-[100vw] mt-[8rem] mb-[4rem]">
        {selectedCategory !== "all" && renderSubSection()}
      </div>

      {/* FOOTER  */}
      <Footer />
    </div>
  );
};

export default NewsPost;
