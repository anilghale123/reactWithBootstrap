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
  {
    id: 5,

    description: "Healthy home workout",
    img: "t2.png",
  },
  {
    id: 6,

    description: "Healthy home workout",
    img: "t2.png",
  },
];
function Jyan() {
  return (
    <section className="mb-5">
      <div className="main__wrapper">
        {/* first section wrapper */}
        <div className="first__wrapper">
          <div className="content__wrapper">
            <figure>
              <img src="t2.png" alt="title" />{" "}
            </figure>
            <div className="first__absolute">Explore the world!!</div>
          </div>
        </div>

        {/* second section wrapper */}
        <div className="second__wrapper">
          <ul>
            <li className="listing__design">
              {listing.map((list) => (
                <div className="listing__flex">
                  <figure>
                    <img src={list.img} alt="title" />
                  </figure>

                  <h3>{list.description}</h3>
                </div>
              ))}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Jyan;
