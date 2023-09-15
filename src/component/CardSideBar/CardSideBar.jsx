const CardSideBar = ({ bookMarkTitle, reminingHour }) => {
  return (
    <div>
      {/* Credit Hour Remaining  */}

      <h1 className="text-xl font-bold text-teal-600">
        Credit Hour Remaining {reminingHour} hr
      </h1>
      <hr className="border- border-2 border-gray-500 my-3" />

      {/* title add  */}
      <h1 className=" text-2xl font-bold">Course Name</h1>
      {bookMarkTitle.map((item, i) => (
        <h2
          className="text-xl bg-white p-1 py-2 font-semibold  rounded my-3"
          key={item.id}
        >
          <span className="text-gray-800">{i + 1}.</span>
          <span className="text-gray-600"> {item.title}</span>
        </h2>
      ))}
      <hr className="border- border-2 border-gray-500 my-3" />
      {/* totla credit hour  */}
      <h2>Total Credit Hour : {20 - reminingHour}</h2>
      {/* totla price hour  */}
    </div>
  );
};

export default CardSideBar;
