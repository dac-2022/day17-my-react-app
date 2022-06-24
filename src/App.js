import Hello from "./components/Hello";

function App() {
  let list = ["delhi", "kolkata"];

  return (
    <div>
      <h1>Predefine Function By Browser!</h1>

      {list.map((item, index) => (
        <Hello item={item} key={index} />
      ))}
    </div>
  );
}

export default App;
