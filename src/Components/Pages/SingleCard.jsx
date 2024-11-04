import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const SingleCard = () => {
  const { id } = useParams();

  const data= useLoaderData();

  const [coffee,setCoffee]= useState({});

  useEffect(()=>{
    const singledata=  data.find(coffee=> coffee.id == id);
    setCoffee(singledata)
  },[data,id])


  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello : {coffee.description} </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
