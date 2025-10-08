import React from "react";
import { useLoaderData } from "react-router";
import Hero from "../../Components/Hero/Hero";
import Trendingpage from "../../TrendingPage/Trendingpage";

const Home = () => {
  const data = useLoaderData();
  return (
    <div>
      <Hero></Hero>
      <Trendingpage data={data}></Trendingpage>
    </div>
  );
};

export default Home;
