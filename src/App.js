import { useEffect, useState } from "react";

function App() {
  // We are already initilize here
  // Static Initilization
  let [list, setList] = useState([]);

  // Why shall i use ?
  // Dymainc - Lets suppose coming from Server.
  useEffect(() => {
    console.log("Heloo");

    // Initizaling the stateful variable from Server Data
    setList([1, 1, 1, 1, 1, 1]);
  }, []);

  return (
    <div>
      {list.map(() => (
        <h1>Hello World</h1>
      ))}
    </div>
  );
}

export default App;
