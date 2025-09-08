import "./Events.css";
import aiImage from "../assets/qr.png"; 

const Events = () => {
  return (
    <section className="events-section">
      {/* Main heading */}
      <div className="events-header">
        <h2 className="events-title">Upcoming Events</h2>
      </div>

      {/* AI for Everyone Section */}
      <div className="events-content">
        <div className="events-text">
          <h3 className="events-subtitle">AI for Everyone</h3>
          <p className="events-lede">
            Supervised and unsupervised learning. Key algorithms and applications. Interactive Q&A session — explore the
            future with NEURA AI!
          </p>
          <p className="events-date">26 Sep 2025, @AB4 Auditorium</p>
<p className="events-join">
  Join us now:{" "}
  <a
    href="https://forms.office.com/r/czgen9Dcvs"
    target="_blank"
    rel="noopener noreferrer"
  >
    AI FOR EVERYONE
  </a>
</p>
        </div>
        <div className="events-image-wrapper">
          <h4 className="events-scan-heading">Scan Here</h4>
          <img src={aiImage} alt="AI for Everyone" className="events-image" />
        </div>
      </div>
    </section>
  );
};

export default Events;
