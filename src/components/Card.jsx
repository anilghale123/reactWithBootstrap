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
      <div className="">
        <div className="flex__card">
          {heros.map((item, index) => (
            <div className="position__relative">
              <div className="card__design">
                <h5>{item.name}</h5>
                <p>{item.description}</p>
                <button type="button">Save</button>
              </div>

              <div className="position__absolute">
                <p className="">Sale</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CardList;
