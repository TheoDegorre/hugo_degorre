import landing from "../assets/welcome_page/welcome_page.jpg"

function WelcomePage() {
  return (
    <section className="welcome-container">
      <img
        id="welcome-img"
        src={landing}
        alt="accordeon en noir et blanc"
      />
    </section>
  );
}

export default WelcomePage;
