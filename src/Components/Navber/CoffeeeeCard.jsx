import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const CoffeeeeCard = () => {
  const naviagte = useNavigate();
  const { catego } = useParams();
  console.log(catego);
  const data = useLoaderData();
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    if (catego) {
      const filteredCategory = [...data].filter(
        (coffee) => coffee.category === catego
      );
      setCoffees(filteredCategory);
    } else {
      setCoffees(data.slice(0, 6));
    }
  }, [catego, data]);

  console.log(data);

  return (
    <>
      <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5">
        {coffees.map((coffee) => (
          <Card key={coffee.id} coffee={coffee}></Card>
        ))}
      </div>
      <button
        onClick={() => naviagte("/coffees")}
        className="text-center text-2xl btn bg-[#e6a417] "
      >
        View All
      </button>
    </>
  );
};

export default CoffeeeeCard;
