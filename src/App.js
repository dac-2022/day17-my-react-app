import { useState } from "react";
import Hello from "./components/Hello";

function App() {
  let [list, setList] = useState([{ city: "delhi", desc: "Delhi desc.." }]);

  const addMoreRecord = () => {
    let newRecord = { city: "TVM", desc: "TVM desc.." };
    let newList = [newRecord, ...list];
    setList(newList);
  };

  return (
    <div>
      <h1>Predefine Function By Browser!</h1>

      <div>
        <input type="button" value="Add More Record" onClick={addMoreRecord} />
      </div>

      {list.map((item, index) => (
        <Hello item={item} key={index} />
      ))}
    </div>
  );
}

export default App;
