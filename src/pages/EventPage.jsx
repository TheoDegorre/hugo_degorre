import EventCard from "../components/EventCard";
import eventdata from "../eventdata";

function EventPage() {
  function formatDate(dateString) {
    const [day, month, year] = dateString.split("/");
    const date = new Date(`${year}-${month}-${day}`);
    return date;
  }

  function formatDateToString(dateString) {
    const date = formatDate(dateString);
    const formatter = new Intl.DateTimeFormat("fr-FR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });

    return formatter.format(date);
  }

  return (
    <>
      <main className="event-page-container">

        <hgroup className="event-page-title">
          <h1>Dates à venir :</h1>
          <div className="line" />
        </hgroup>

        <section className="event-list-container">
          {eventdata
            .sort((a, b) => formatDate(b.date) - formatDate(a.date))
            .map((el) => (
              <EventCard
                key={el}
                id={el.id}
                date={formatDateToString(el.date)}
                title={el.title}
                place={el.place}
                adress={el.adress}
                city={el.city}
              />
            ))}
        </section>
        
      </main>
    </>
  );
}

export default EventPage;
