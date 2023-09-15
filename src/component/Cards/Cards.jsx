import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";

const Cards = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("../../../public/data.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <div className="grid sm:grid-cols-4 grid-cols-1 gap-5">
      <div className=" md:col-span-3 sm:col-span-2 col-span-1  grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-6 ">
        {cards.map((item, i) => (
          <Card key={item.id + i} cards={item}></Card>
        ))}
      </div>
      <div className="col-span-1 sm:col-span-2  md:col-span-1">
        <div className="bg-gray-100 rounded-md p-4">
            <p> mohibbulla </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
