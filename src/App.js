function App() {
  return (
    <div>
      <h1>Predefine Function By Browser!</h1>
      <Hello />
      <World />
      <Hello />
      <World />
    </div>
  );
}

// <Hello />
function Hello() {
  return <h1>I am also Tag!</h1>;
}

function World() {
  return (
    <div>
      <h1>Hello World Tag!</h1>
    </div>
  );
}

export default App;
