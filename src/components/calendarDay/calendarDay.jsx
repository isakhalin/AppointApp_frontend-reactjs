// rafc - создает реакт компонент
// clg  - console.log()

import React, {useState} from "react";

// Import custom comps
import {VksConstructor} from "../vksConstructor";

export const CalendarDay = ({daySelected}) => { // В daySelected приходит дата в милисекундах
  const [dayStartAt, setDayStartAt] = useState("09:00:00");
  const [dayEndAt, setDayEndAt] = useState("21:00:00")

  // console.log("Пришло в календарь", new Date(daySelected).toLocaleDateString().split("."));
  //console.log("!!!", new Date("2023-01-01 00:00:00").getTime())

  const calcDayStart = () => {
    const date = new Date(daySelected).toLocaleDateString().split(".");
    return new Date(`${date[2]}-${date[1]}-${date[0]} ${dayStartAt}`).getTime();
  }

  const calcDayEnd = () => {
    const date = new Date(daySelected).toLocaleDateString().split(".");
    return new Date(`${date[2]}-${date[1]}-${date[0]} ${dayEndAt}`).getTime();
  }

  // console.log("Data", new Date(daySelected).getDay() + 1)
  // console.log("!!!!", calcDayStart());
  // console.log("!!!!", calcDayEnd());

  const [vks, setVks] = useState([
    {
      id: "434264361",
      title: "new",
      description: "",
      // dayStartAt: new Date("2023-02-01 09:00:00").getTime(),
      // dayEndAt: new Date("2023-02-01 21:00:00").getTime(),
      start: new Date("2023-02-01 09:30:00").getTime(),
      end: new Date("2023-02-01 10:00:00").getTime(),
      styles: {
        top: 0,
        height: "5%",
      },
    },
    {
      id: "43467345361",
      title: "Вопросы общего образования образования образования образования образования образования",
      description: "",
      // dayStartAt: new Date("2022-12-20 09:00:00").getTime(),
      // dayEndAt: new Date("2022-12-20 21:00:00").getTime(),
      start: new Date("2023-02-01 10:30:00").getTime(), // 1671523200000
      end: new Date("2023-02-01 11:45:00").getTime(), // 1671526800000
      styles: {
        top: "15%", // 1 минута это 0,166666%. Рассчет для пикселей: 30 минут это 30px (start-dayStartAt)/60000
        height: "12.5%", // Рассчет для процентов 0.166666667 * мин. Рассчет для пикселей: (end-start)/60000
      },
    },
  ])

  const commonStyles = {
    position: "absolute",
    backgroundColor: "#ed8550",
    width: "100%",
    borderBottom: "1px solid black",
    boxSizing: "border-box",
  }

  const [day, setDay] = useState([
    {
      title: "9:00",
    },
    {
      title: "9:30",
    },
    {
      title: "10:00",
    },
    {
      title: "10:30",
    },
    {
      title: "11:00",
    },
    {
      title: "11:30",
    },
    {
      title: "12:00",
    },
    {
      title: "12:30",
    },
    {
      title: "13:00",
    },
    {
      title: "13:30",
    },
    {
      title: "14:00",
    },
    {
      title: "14:30",
    },
    {
      title: "15:00",
    },
    {
      title: "15:30",
    },
    {
      title: "16:00",
    },
    {
      title: "16:30",
    },
    {
      title: "17:00",
    },
    {
      title: "17:30",
    },
    {
      title: "18:00",
    },
    {
      title: "18:30",
    },
    // {
    //   title: "19:00",
    // },
    // {
    //   title: "19:30",
    // },
    // {
    //   title: "20:00",
    // },
    // {
    //   title: "20:30",
    // },
    // {
    //   title: "21:00",
    // },
    // {
    //   title: "21:30",
    // },
  ])

  // console.log("randomizer", Math.floor((Math.random() * 1000000000)))

  return (
    <div>
      <div className="calendar-wrp">
        {day.map((el) => (
          <div
            key={el.title}
            style={{
              width: "100%",
              height: "5%",
              borderBottom: "1px solid black",
              boxSizing: "border-box",
            }}
          >
            {el.title}
          </div>
        ))}
        {vks.map((el) => (
          <div key={el.start} style={{...commonStyles, ...el.styles}}>
            {el.title}
          </div>
        ))}
      </div>
      <VksConstructor vks={vks} setVks={setVks} calcDayStart={calcDayStart()}/>
    </div>
  );
};