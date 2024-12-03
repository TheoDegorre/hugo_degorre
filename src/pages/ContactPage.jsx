import contact from "../assets/contact_page/hugo_contact.webp";

function ContactPage() {
  return (
    <section className="contact-page-container">
      <figure className="contact-figure">
        <img id="figure-img" src={contact} alt="" />
        <div id="contact-blur" />
      </figure>

      <figcaption className="contact-figcaption">
        <a href="mailto:degorreh@gmail.com">degorreh@gmail.com</a>
        <div id="contact-line" />

        <div className="footer-social-link">
          <a href="http://google.fr" className="fa fa-facebook" />
          <a href="http://google.fr" className="fa fa-soundcloud" />
          <a href="http://google.fr" className="fa fa-instagram" />
        </div>
      </figcaption>

    </section>
  );
}

export default ContactPage;
