import Hello from "./components/Hello";

function App() {
  let list = Array.from({ length: 100 });

  return (
    <div>
      <h1>Predefine Function By Browser!</h1>

      {list.map((item, index) => (
        <Hello key={index} />
      ))}
    </div>
  );
}

export default App;
