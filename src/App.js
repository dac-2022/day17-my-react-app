import Hello from "./components/Hello";

function App() {
  let list = ["delhi", "kolkata"];

  return (
    <div>
      <h1>Predefine Function By Browser!</h1>

      {list.map((item, index) => (
        <Hello city={item} key={index} />
      ))}
    </div>
  );
}

export default App;
