import { useEffect, useState } from "react";

function App() {
  let [secondCounter, setSecondCounter] = useState(0);
  let [minuteCounter, setMinuteCounter] = useState(0);
  let [hourCounter, setHourCounter] = useState(0);

  useEffect(() => {
    let date = new Date();
    setSecondCounter(date.getSeconds());
    setMinuteCounter(date.getMinutes());
    setHourCounter(date.getHours());

    // initilation ::
    let t = setTimeout(() => {
      setSecondCounter(secondCounter + 1);
    }, 1000);

    // uninitialize
    return () => clearTimeout(t);
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
