import PropTypes from "prop-types";

function EventCard({ title, date, city }) {
  
  return (
    <section>
      <h2 id="project-card-title">{title}</h2>
      <div className="event-card-detail">
          <h4 id="project-card-date">le {date}</h4>
        <h4 id="project-card-title">{city}</h4>
      </div>
    </section>
  );
}

EventCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
};

export default EventCard;
