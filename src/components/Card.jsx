import "../scss/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const heros = [
  { name: "Sandup", description: "He is great" },
  { name: "Manish", description: "He is the best" },
  { name: "Subash", description: "He is shy" },
  { name: "Sujata", description: "She is lazy" },
  { name: "Brijen", description: "He is a legend" },
];

function CardList() {
  return (
    <section className="section__padding">
      <div className="row g-5">
        {heros.map((item) => (
          <div className="col-lg-4">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CardList;
