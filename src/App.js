function App() {
  return (
    <div>
      <h1 id="id1">Hello World</h1>

      <Hie msg="Abcd" title="delhi" />
      <Hie msg="pqrs" title="calcutta" />
      <Hie msg="mlns" title="kochi" />

      <hr />
      <Anything username="Rahul" />
      <Anything username="Rohit" />
      <Anything username="Sanju" />
    </div>
  );
}

function Hie({ msg, title }) {
  return (
    <div>
      <h1>
        Hie.. {msg} {title}
      </h1>
    </div>
  );
}

function Anything(props) {
  return (
    <div>
      <h1>Hello {props.username}</h1>
    </div>
  );
}

export default App;
