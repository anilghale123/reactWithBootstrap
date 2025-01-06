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
      <div className="container">
        <div className="row g-4">
          {heros.map((item, index) => (
            <div className="col-md-4 col-lg-3" key={index}>
              <div className="card shadow-sm">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-center text-primary">
                    {item.name}
                  </h5>
                  <p className="card-text text-muted">{item.description}</p>
                  <button className="btn btn-outline-primary mt-auto">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CardList;
