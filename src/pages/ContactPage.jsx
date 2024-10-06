import contact from "../assets/contact_page/contact.jpg"

function ContactPage() {
  return (
    <section className="contact-page-container">
      <figure className="contact-figure-container">
        <img
          id="figure-img"
          src={contact}
          alt=""
        />
      </figure>
      <figcaption className="contact-page-description-container">
        <a href="mailto:degorreh@gmail.com">degorreh@gmail.com</a>
      </figcaption>
    </section>
  );
}

export default ContactPage;
