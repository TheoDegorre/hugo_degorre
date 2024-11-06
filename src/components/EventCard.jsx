import PropTypes from "prop-types";

function EventCard({ date, title, place, adress, city }) {

  let fineDate = date.split(" ");
  console.log(fineDate)
  
  return (
    <section className="event-card-container">

      <div className="event-date-container">
        <h2 id="event-card-day">{fineDate[0]}</h2>
        <h4 id="event-card-date">{fineDate[1]} {fineDate[2]}</h4>
      </div>

      <div className="event-detail-container">
        <h2 id="event-card-title">{title}</h2>
        <h4 id="event-card-subtitle">
          {place} - {adress} - {city}
        </h4>
      </div>

    </section>
  );
}

EventCard.propTypes = {
  id: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  adress: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
};

export default EventCard;
