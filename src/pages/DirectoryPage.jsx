import { useState } from "react";
import DirectoryCard from "../components/DirectoryCard";
import directorydata from "../directorydata";
import directoryImg from "../assets/directory_page/directory_img.png";

function DirectoryPage() {
  const directoryList = directorydata;
  const [query, setQuery] = useState("");

  const directory = directoryList || [];

  // filtre recherche
  const filteredDirectory =
    query !== ""
      ? directory.filter(
          (el) =>
            el.title.toLowerCase().includes(query.toLowerCase()) ||
            el.composer.toLowerCase().includes(query.toLowerCase())
        )
      : directory;

  return (
    <main className="directory-page-container">
      <hgroup className="directory-page-title">
        <h1>Repertoire :</h1>
        <div className="line" />
      </hgroup>

      <figure className="directory-img-container">
        <img className="directory-img" src={directoryImg} alt="" />
      </figure>

      <section className="directory-page-section">
        <input
          id="search-bar"
          type="text"
          placeholder=" Recherchez un morceau ou un compositeur"
          alt="barre de recherche"
          onChange={(event) => {
            setQuery(event.target.value);
          }}
          value={query}
        />
        <ul className="directory-content-list">
          {filteredDirectory.length > 0 ? (
            filteredDirectory.map((el) => (
              <DirectoryCard
                key={el.id}
                id={el.id}
                title={el.title}
                composer={el.composer}
                category={el.category}
                inst={el.instrumentation}
              />
            ))
          ) : (
            <li>
              Aucun morceau ou compositeur ne correspond à votre recherche.
            </li>
          )}
        </ul>
      </section>
    </main>
  );
}

export default DirectoryPage;
