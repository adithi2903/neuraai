import "./Events.css";

const Events = () => {
  const pastEvents = [
    {
      title: "AI for Everyone",
      description:
        "A beginner-friendly workshop introducing core concepts of Machine Learning — including supervised and unsupervised learning — with hands-on demos and interactive discussions led by NEURA AI mentors.",
      date: "26 Sep 2025",
      location: "AB4 Auditorium",
    },
    {
      title: "Taming the Llama",
      description:
        "A hands-on workshop exploring Ollama and Llama 3 — guiding participants through chatbot creation, local model deployment, and prompt engineering for real-world applications.",
      date: "14 Oct 2025",
      location: "Innovation Lab",
    },
    {
      title: "Roadmap to ML",
      description:
        "A structured mentorship initiative designed to help students navigate their journey into Machine Learning — covering foundational topics, project guidance, and personalized learning paths.",
      date: "26 September - 31 October 2025",
      location: "Online + Campus Sessions",
    },
    {
      title: "Hacktoberfest 2025",
      description:
        "NEURA AI proudly took part in Hacktoberfest, contributing to open-source AI and ML projects. Participants gained real-world collaboration experience through Git and GitHub contributions.",
      date: "Oct 2025",
      location: "Global Open Source Event",
    },
  ];

  return (
    <section className="events-section">
      <div className="events-header">
        <h2 className="events-title">PAST EVENTS</h2>
        <p className="events-subtitle">
          A glimpse of the impactful initiatives and workshops organized by NEURA AI.
        </p>
      </div>

      <div className="events-grid">
        {pastEvents.map((event, index) => (
          <div className="event-card" key={index}>
            <h3 className="event-name">{event.title}</h3>
            <p className="event-description">{event.description}</p>
            <p className="event-details">
              <span>{event.date}</span> • <span>{event.location}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;
