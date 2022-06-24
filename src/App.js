import { useEffect, useState } from "react";

function App() {
  let [secondCounter, setSecondCounter] = useState();
  let [minuteCounter, setMinuteCounter] = useState();
  let [hourCounter, setHourCounter] = useState();

  useEffect(() => {
    // Initilzation
    let date = new Date();
    setSecondCounter(date.getSeconds());
    setMinuteCounter(date.getMinutes());
    setHourCounter(date.getHours());

    let clock = setTimeout(() => {
      if (secondCounter == 60) {
        setSecondCounter(0);
      } else {
        setSecondCounter(secondCounter + 1);
      }
    }, 1000);

    // Un Intitialize
    return () => clearTimeout(clock);
  }, [secondCounter]);

  return (
    <div>
      <h1>Clock Demo</h1>
      <h1>
        {hourCounter} : {minuteCounter} : {secondCounter}
      </h1>
    </div>
  );
}

export default App;
