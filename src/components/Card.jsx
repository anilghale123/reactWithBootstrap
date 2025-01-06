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
        <div className="row g-4 position__relative">
          {heros.map((item, index) => (
            <div className="col-sm-1 col-md-2 col-lg-3" key={index}>
              <div className="card shadow-sm">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-center">{item.name}</h5>
                  <p className="card-text text-muted">{item.description}</p>
                  <button className="btn btn-outline-success mt-auto">
                    Learn More
                  </button>
                </div>
              </div>

              <div className="">
                <p className="position__absolute">Sale</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CardList;
