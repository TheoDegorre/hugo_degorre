import biography from "../assets/biography_page/hugo_biography.jpg";

function BiographyPage() {
  return (
    <section className="biography-container">
      <figure className="biography-img-container">
        <img className="biography-img" src={biography} alt="" />
      </figure>
      <article className="biography-description-container">
        <p className="biography-description-text">
          C’est en 2016 qu’Hugo Degorre obtient son DEM d’accordéon dans la
          classe de Jean-Luc Manca au conservatoire de Grenoble.
          <br />
          Ayant fini ses études d’ingénieur à Grenoble et Karlsruhe en 2017, il
          intègre la HEAR de Strasbourg (Haute École des Arts du Rhin) dans la
          classe d’accordéon de Marie-Andrée Joerger, puis la Hochschule Musik
          Freiburg avec Teodoro Anzellotti où il obtient son Master en 2022.
          <br />
          Lors de masterclass, il bénéficie de l’enseignement de Claudio
          Jacomucci, Vincent Lhermet, Marko Kassl, Mie Miki et Raimondas
          Sviackevicius. Il a pu réaliser des créations de compositeurs reconnus
          comme Jean-Jacques Werner, Annette Schlünz, Philip Venebles, Hans
          Abrahamsen et se produire avec l’ensemble Accroche Note, l’ensemble
          Linéa ainsi que le KlangForum Heidelberg. Récemment, il se produit à
          l’opéra du Rhin de Strasbourg avec l’Orchestre Philharmonique de
          Strasbourg, au Badisches Staatstheater Karlsruhe, à la Filature à
          Mulhouse au Palais des Fêtes de Strasbourg et en compagnie de la
          Philarmonie de Poche pour une série de concerts.
          <br />
          Il intègre en 2023 l’ensemble à géométrie variable Nebensonnen ainsi
          que la compagnie la Chambre à air, deux ensembles centrés sur le chant
          et l’opéra. Il s’est également produit plusieurs fois au festival
          Musica de Strasbourg, au festival Berlioz de la Côte Saint Andrée, au
          festival Donaueschinger Musiktage, au festival l’Opéra Voyageur, au
          festival Musikfestspiel à Sarrebruck.
          <br />
          Depuis 2017, il enseigne l’accordéon au conservatoire de Strasbourg.
        </p>
      </article>
    </section>
  );
}

export default BiographyPage;
