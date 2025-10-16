import "./Events.css";

const Events = () => {
  const events = [
    { title: "Independence Day Celebration", date: "August 15, 2025", description: "Flag hoisting, cultural programs and patriotic songs." },
    { title: "Science Exhibition", date: "October 20, 2025", description: "Students showcase innovative projects and models." },
    { title: "Annual Sports Meet", date: "December 10, 2025", description: "Track events, team games, and award ceremony." },
  ];

  return (
    <section className="events-section">
      <h1>🎉 School Events</h1>
      <div className="event-list">
        {events.map((event, index) => (
          <div key={index} className="event-card">
            <h2>{event.title}</h2>
            <p><strong>{event.date}</strong></p>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;
