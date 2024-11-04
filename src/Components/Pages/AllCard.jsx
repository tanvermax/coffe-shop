import { useLoaderData } from "react-router-dom";
import Card from "../Navber/Card";

const AllCard = () => {
  const coffee = useLoaderData();

  console.log(coffee);

//   const { name, image, category, origin, rating, popularity, type } =
//     coffe || {};

  return (
   <>
   <div className="flex justify-between py-5">
    <h1 className="text-3xl font-thin">Sort Coffee's By Popularity & Rating-</h1>
    <div>
        <button className="btn mr-4 bg-[#e6a417]"  type="button">Sort By Popularity</button>
        <button className="btn bg-[#e6a417]" type="button">Sort By Rating</button>
    </div>
   </div>
   <div className="grid grid-cols-3 gap-5 py-5">
    {
        coffee.map(coffe=> <Card key={coffe.id} coffee={coffe}></Card>)
    }
    </div>
  </>
  );
};

export default AllCard;
