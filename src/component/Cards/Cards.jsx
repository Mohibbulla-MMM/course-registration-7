import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";
import CardSideBar from "../CardSideBar/CardSideBar";
import swal from "sweetalert";

const Cards = () => {
  const [cards, setCards] = useState([]);
  const [bookMarkTitle, setBookMarkTitle] = useState([]);
  const [reminingHour, setReminingHour] = useState(20);
  useEffect(() => {
    fetch("../../../public/data.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  // ========= title add handler =======
  const handlerTitleAddToBookmark = (data) => {
    const newBookMark = [...bookMarkTitle, data];
    const itemChecker = bookMarkTitle.find((item) => item.id == data.id);
    if (!itemChecker) {
      let totlaHours = data.duration.hours;
      bookMarkTitle.forEach((element) => {
        totlaHours += element.duration.hours;
      });
      let reaminingHours = 20 - totlaHours;
      // console.log(totlaHours);
      if (reaminingHours < 0) {
        swal({
          title: ` You cannot buy this course`,
          text: `Credit for this course ${
            data.duration.hours
          } \n Your current credit ${reaminingHours + data.duration.hours}`,
          icon: "warning",
          button: "cancel",
        });
        return;
      } else {
        setReminingHour(reaminingHours);
        setBookMarkTitle(newBookMark);
      }
    } else {
      swal({
        title: `${data.title}`,
        text: "Already selected!",
        icon: "warning",
        button: "cancel",
      });
    }
  };
  // console.log(bookMark);

  return (
    <div className="grid sm:grid-cols-4 grid-cols-1 gap-5">
      <div className=" md:col-span-3 sm:col-span-2 col-span-1  grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-6 ">
        {cards.map((item, i) => (
          <Card
            key={item.id + i}
            cards={item}
            handlerTitleAddToBookmark={handlerTitleAddToBookmark}
          ></Card>
        ))}
      </div>
      <div className="col-span-1 sm:col-span-2  md:col-span-1">
        <div className="bg-gray-100 rounded-md p-4">
          <CardSideBar
            bookMarkTitle={bookMarkTitle}
            reminingHour={reminingHour}
          ></CardSideBar>
        </div>
      </div>
    </div>
  );
};

export default Cards;
