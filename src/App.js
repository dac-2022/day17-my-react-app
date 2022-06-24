import { useRef, useState } from "react";
import Hello from "./components/Hello";

function App() {
  let cityRef = useRef();
  let descRef = useRef();
  let [list, setList] = useState([]);

  const addMoreRecord = () => {
    let newRecord = {
      city: cityRef.current.value,
      desc: descRef.current.value,
    };
    let newList = [newRecord, ...list];
    setList(newList);

    cityRef.current.value = "";
    descRef.current.value = "";
  };

  return (
    <div>
      <h1>Predefine Function By Browser!</h1>

      <div>
        <input
          ref={cityRef}
          type="text"
          className="form-control form-control-lg my-1 "
          placeholder="Enter City.."
        />
        <textarea
          ref={descRef}
          className="form-control form-control-lg my-1"
          placeholder="Enter Desc"
        />
        <input
          type="button"
          className="btn btn-primary my-1 w-100"
          value="Add More Record"
          onClick={addMoreRecord}
        />
      </div>

      {list.map((item, index) => (
        <Hello item={item} key={index} />
      ))}
    </div>
  );
}

export default App;
