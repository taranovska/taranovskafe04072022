import { useState } from "react";
import "./App.css";

import { data } from "./data";

function App() {
  let initialDataTime = [];
  for (const item of data) {
    initialDataTime.push(item.time);
  }

  const [dataTime, setDataTime] = useState([...initialDataTime]);

  const buttonClicked = () => {
    setDataTime(
      Array.from({ length: data.length }, (i) => getRandomIntInclusive(1, 10))
    );
  };

  setInterval(() => buttonClicked(), 30000);

  function getRandomIntInclusive(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  let sumOfDataTime = dataTime.reduce((prevTime: number, nextTime: number) => {
    return prevTime + nextTime;
  });
  let marginLeft: number[] = [0];

  return (
    <>
      <h1 className="h1" data-testid="title">
        spent time (seconds)
      </h1>
      <div data-testid="chartComponent">
        {data.map((page, index) => {
          marginLeft.push((dataTime[index] * 100) / sumOfDataTime);
          let widthLeft: string = (dataTime[index] * 100) / sumOfDataTime + "%";
          const calcMarginLeftPercentage =
            marginLeft.slice(0, index + 1).reduce((prev, next) => prev + next) +
            "%";

          return (
            <div className="grid-container" key={index}>
              <div className="grid-item1">{page.name}</div>
              <div className="container grid-item2">
                <div className="progress">
                  <div
                    className="progress-bar"
                    style={{
                      marginLeft: calcMarginLeftPercentage,
                      width: widthLeft,
                      backgroundColor: "#f27011",
                    }}
                  >
                    {dataTime[index]}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <button className="button" id="button" onClick={buttonClicked}>
          click
        </button>
      </div>
    </>
  );
}

export default App;
