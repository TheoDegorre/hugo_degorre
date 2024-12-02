import landing from "../assets/welcome_page/welcome_page-removebg.png";
// import background from "../assets/Vector.svg";

function WelcomePage() {
  return (
    <>
      <section className="welcome-container">
        <figcaption className="welcome-title-container">
          <p id="title">
            Hugo Degorre
          </p>
          <div className="line" />
          <p id="subtitle">Accordéoniste</p>
        </figcaption>
        <figure className="welcome-img-container">
          <img
            id="welcome-img"
            src={landing}
            alt="accordeon en noir et blanc"
          />
          <div id="welcome-img-blur" />
        </figure>
      </section>
    </>
  );
}

export default WelcomePage;
