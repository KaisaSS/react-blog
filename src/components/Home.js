import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import BlogList from "./BlogList";
import Loading from "./Loading";

const Home = () => {
  const { data, isLoading, error } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && <Loading />}
      {data && <BlogList blogs={data} title="All Blogs" />}
    </div>
  );
};

export default Home;
