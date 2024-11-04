import { useLoaderData } from "react-router-dom";
import Card from "../Navber/Card";
import { useState } from "react";

const Coffees = () => {
  const coffee = useLoaderData();

  console.log(coffee);

  //   const { name, image, category, origin, rating, popularity, type } =
  //     coffe || {};

  const [coff, setCoff] = useState(coffee);
  const handleSort = (sortby) => {
    if (sortby == "popularity") {
      // sortby populaty
      const sorted = [...coffee].sort((a, b) => a.popuralrity - b.popuralrity);
      setCoff(sorted);
    } else if (sortby == "rating") {
      // sort by ratying
      const sorted = [...coffee].sort((a, b) => a.rating - b.rating);
      setCoff(sorted);
    }
  };

  return (
    <>
      <div className="flex justify-between py-5">
        <h1 className="text-3xl font-thin">
          Sort Coffee's By Popularity & Rating-
        </h1>
        <div>
          <button
            onClick={() => handleSort("popularity")}
            className="btn mr-4 bg-[#e6a417]"
            type="button"
          >
            Sort By Popularity
          </button>
          <button
            onClick={() => handleSort("rating")}
            className="btn bg-[#e6a417]"
            type="button"
          >
            Sort By Rating
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5">
        {coff.map((coffe) => (
          <Card key={coffe.id} coffee={coffe}></Card>
        ))}
      </div>
    </>
  );
};

export default Coffees;
