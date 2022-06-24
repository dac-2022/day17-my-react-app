function World({ item }) {
  return (
    <div className="card">
      <div className="card-header">Featured</div>
      <div className="card-body">
        <h5 className="card-title">{item.city}</h5>
        <p className="card-text">{item.desc}</p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}

export default World;
