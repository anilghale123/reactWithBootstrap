import "../scss/style.scss";

const listing = [
  {
    id: 1,
    description: "Effective home workout",
    img: "t2.png",
  },
  {
    id: 2,

    description: "Defective home workout",
    img: "t2.png",
  },
  {
    id: 3,

    description: "Super home workout",
    img: "t2.png",
  },
  {
    id: 4,

    description: "Healthy home workout",
    img: "t2.png",
  },
];
function Jyan() {
  return (
    <section className="bg__yellow section__padding">
      <div className="news__flex">
        <div className="position__relative">
          <div className="">
            <figure>
              <img src="b5.jpg" alt="cuisine" className="img__cuisine" />
            </figure>
          </div>
          <div>
            <p className="position__absolute">explore world cuisine</p>
          </div>
        </div>

        <ul className="">
          {listing.map((item) => (
            <li className="n__flex" key={item.id}>
              <div className=" i__flex">
                <figure>
                  <img src={item.img} alt="title" className="img__list" />
                </figure>

                <p>{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Jyan;
