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
