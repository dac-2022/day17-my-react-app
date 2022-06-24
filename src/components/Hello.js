import World from "./World";

function Hello({ item }) {
  return (
    <div className="row">
      <div className="col-12 col-md-6">
        <World item={item} />
      </div>
    </div>
  );
}

// export { Hello };
export default Hello;
