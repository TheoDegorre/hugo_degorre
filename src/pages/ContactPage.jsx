import contact from "../assets/contact_page/contact.jpg"

function ContactPage() {
  return (
    <section className="contact-page-container">

      <figure className="contact-figure">
        <img
          id="figure-img"
          src={contact}
          alt=""
        />
      </figure>
<figcaption className="contact-page-figcaption">

        <a href="mailto:degorreh@gmail.com">degorreh@gmail.com</a>
        <div id="contact-line"/>
      
      <div className="footer-social-link">
        <a href="http://google.fr" className="fa fa-facebook" />
        <a href="http://google.fr" className="fa fa-soundcloud" />
        <a href="http://google.fr" className="fa fa-instagram" />
      </div>
      

</figcaption>
      <div id="contact-blur" />
    </section>
  );
}

export default ContactPage;
