import World from "./World";

function Hello({ city }) {
  return (
    <div className="row">
      <div className="col-12 col-md-6">
        <World cityName={city} />
      </div>
    </div>
  );
}

// export { Hello };
export default Hello;
