function Card(props) {
  return props.empty ?
    (
      <div className="card card-empty">
        <h3>Out of Potential Matches! Come back later for more</h3>
      </div>
    ) : (
      <div
        style={{ backgroundImage: `url(${props.person.url})` }}
        className="card"
      >
        <h3>{props.person.name}</h3>
      </div>
    );
}

export default Card;