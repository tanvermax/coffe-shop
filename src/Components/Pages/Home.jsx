// import React from 'react';

import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Navber/Banner";
import Heading from "../Navber/Heading";
import Categories from "./Categories";

const Home = () => {
    const categories = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <Heading
        title={"Browse Coffees Category"}
        subtile={
          "Choose your desire coffee category through specific coffees that fit in your taste"
        }
      ></Heading>
     <Categories categories={categories}></Categories>
     <Outlet></Outlet>
    </div>
  );
};

export default Home;
