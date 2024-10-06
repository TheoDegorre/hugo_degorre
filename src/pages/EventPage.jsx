import { Suspense } from "react";
import EventCard from "../components/EventCard";
import eventdata from "../eventdata";

function EventPage() {

  return (
    <main className="event-page-container">
      <h1>Les derniers évènements :</h1>
      <section className="event-list-container">
        <Suspense fallback={<Loading />}>
        {eventdata
            .map((el) => (
              <EventCard
                className="event-card"
                key={el.date}
                id={el.id}
                date={el.date}
                title={el.title}
                city={el.city}
              />
            ))}
        </Suspense>
      </section>
    </main>
  );
}

function Loading() {
  return <h2>🌀 Loading...</h2>;
}

export default EventPage;
