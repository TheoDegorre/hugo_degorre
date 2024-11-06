import landing from "../assets/welcome_page/welcome_page-removebg.png";
import background from "../assets/Vector.svg";

function WelcomePage() {
  return (
    <>
    <section className="welcome-container">
      <div id="background-container">
      <img id="background" src={background} alt=''/>
      </div>
      <figcaption className="welcome-title-container">
        <p id="title">Hugo <br/> Degorre</p>
        <div className="line"/>
        <p id="subtitle">Accordéoniste</p>
      </figcaption>
      <figure className="welcome-img-container">
      <img id="welcome-img" src={landing} alt="accordeon en noir et blanc" />
      </figure>
      <div id="welcome-blur" />
    </section>
    </>
  );
}

export default WelcomePage;
