import biography from "../assets/biography_page/hugo_biography.jpg"

function BiographyPage() {
  return (
    <section className="biography-container">
      <figure className="biography-img-container">
        <img
          className="biography-img"
          src={biography}
          alt=""
        />
      </figure>
      <article className="biography-description-container">
        <p className="biography-description-text">
          Hugo Degorre est un accordéoniste talentueux dont le parcours musical
          est jalonné de formations prestigieuses et de collaborations
          artistiques remarquables.
          <br />
          En 2016, il obtient son Diplôme d&apos;Études Musicales (DEM) en accordéon
          sous la tutelle de Jean-Luc Manca au conservatoire de Grenoble.
          <br />
          Après avoir achevé ses études d&apos;ingénieur à Grenoble et à Karlsruhe en
          2017, Hugo Degorre poursuit sa passion pour l&apos;accordéon en intégrant
          la Haute École des Arts du Rhin (HEAR) à Strasbourg, dans la classe de
          Marie-Andrée Joerger. Il affine ensuite son art à la Hochschule Musik
          Freiburg sous la direction de Teodoro Anzellotti, obtenant son Master
          en 2022. Pendant son parcours, il profite des masterclasses de maîtres
          renommés tels que Claudio Jacomucci, Vincent Lhermet, Marko Kassl, Mie
          Miki et Raimondas Sviackevicius.
          <br />
          Hugo Degorre a collaboré avec des compositeurs de renom comme
          Jean-Jacques Werner, Annette Schlünz, Philip Venebles et Hans
          Abrahamsen. Il s&apos;est produit avec des ensembles prestigieux tels
          qu&apos;Accroche Note, l&apos;ensemble Linéa et le KlangForum Heidelberg.
          <br />
          Récemment, il a joué à l&apos;Opéra du Rhin de Strasbourg avec l&apos;Orchestre
          Philharmonique de Strasbourg, au Badisches Staatstheater Karlsruhe, à
          la Filature à Mulhouse, au Palais des Fêtes de Strasbourg et avec la
          Philharmonie de Poche pour une série de concerts.
          <br />
          En 2023, il rejoint l&apos;ensemble à géométrie variable Nebensonnen ainsi
          que la compagnie La Chambre à Air, deux ensembles centrés sur le chant
          et l&apos;opéra. Hugo Degorre a également participé à de nombreux festivals
          prestigieux, notamment le festival Musica de Strasbourg, le festival
          Berlioz de la Côte Saint-André, le festival Donaueschinger Musiktage,
          le festival l&apos;Opéra Voyageur et le festival Musikfestspiel à
          Sarrebruck. Depuis 2017, Hugo Degorre transmet sa passion et son
          expertise en enseignant l&apos;accordéon au conservatoire de Strasbourg.
        </p>
      </article>
    </section>
  );
}

export default BiographyPage;
