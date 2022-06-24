import Hello from "./components/Hello";

function App() {
  let list1 = [
    { city: "delhi", desc: "Delhi desc.." },
    { city: "kochi", desc: "kochi desc" },
  ];

  return (
    <div>
      <h1>Predefine Function By Browser!</h1>

      {list1.map((item, index) => (
        <Hello item={item} key={index} />
      ))}
    </div>
  );
}

export default App;
