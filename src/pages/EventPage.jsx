import EventCard from "../components/EventCard";
import eventdata from "../eventdata";
import background from "../assets/Vector.svg";
function EventPage() {
  return (
    <>
      <main className="event-page-container">
        <div id="event-background-container">
          <img id="background" src={background} alt="" />
        </div>
        <h1>Dates à venir :</h1>
        <div className="line" />
        <section className="event-list-container">
          {eventdata.map((el) => (
            <EventCard
              key={el.date}
              id={el.id}
              date={el.date}
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
