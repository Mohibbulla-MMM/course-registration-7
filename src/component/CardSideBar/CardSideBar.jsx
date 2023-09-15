const CardSideBar = ({ bookMarkTitle, reminingHour, totlaPrice }) => {
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
        <table
          className="text-xl bg-white p-1 py-2 font-semibold  rounded my-3 w-full"
          key={item.id}
        >
          <tr>
            <div className="flex w-full">
              <th className="text-gray-800 block ">{i + 1}.</th>
              <td className="text-gray-600 block"> {item.title}</td>
            </div>
          </tr>
        </table>
      ))}
      <hr className="border- border-2 border-gray-500 my-3" />
      {/* totla credit hour  */}
      <h2 className="text-xl font-semibold">
        Total Credit Hour : {20 - reminingHour}
      </h2>
      <hr className="border- border-2 border-gray-500 my-3" />
      {/* totla price hour  */}
      <h2 className="text-2xl font-bold">Total Price: ${totlaPrice}</h2>
    </div>
  );
};

export default CardSideBar;
