import { BiDollar } from "react-icons/bi";
import { BsBook } from "react-icons/bs";

const Card = ({ cards, handlerTitleAddToBookmark }) => {
  const { banner, title, description, price, duration } = cards;
  // console.log(cards);
  // console.log(duration);
  return (
    <div className="shadow-md border-2 border-gray-100 flex flex-col gap-3 p-4 rounded-md    mb-4 bg-gray-100">
      <figure className="flex justify-center items-center overflow-hidden">
        <img
          className="inline-block rounded-md w-full  h-[170px] object-cover overflow-hidden"
          src={banner}
          alt=""
        />
      </figure>
      <h1
        title={title}
        className="text-2xl font-semibold whitespace-nowrap overflow-ellipsis overflow-hidden"
      >
        {title}
      </h1>
      <p className="text-gray-500">{description.slice(0, 50)}...</p>
      <div className="flex flex-wrap gap-1 justify-between font-semibold ">
        {/* ----- creadit and  price section ---- */}
        <div className="flex items-center">
          <BiDollar className="text-2xl mr-2"></BiDollar>
          {/* icon */}
          <span className="mr-1">Price: </span>
          <span>{price}</span>
        </div>
        <div className="flex items-center">
          {/* credit icon */}
          <BsBook className="text-2xl mr-3"></BsBook>

          <span className="mr-1">Credit: </span>
          <span>{duration?.hours}</span>
          <span> hr</span>
        </div>
      </div>
      {/* button */}
      <button
        onClick={() => handlerTitleAddToBookmark(cards)}
        className="btn btn-accent text-lg mt-4"
      >
        Select
      </button>
    </div>
  );
};

export default Card;
