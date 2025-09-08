import "./About.css";
import t1 from "../assets/team/t1.jpg";
import t2 from "../assets/team/t2.jpeg";
import t3 from "../assets/team/t3.jpeg";
import t4 from "../assets/team/t4.jpeg";
import t5 from "../assets/team/t5.jpg";
import t6 from "../assets/team/t6.jpeg";
import t7 from "../assets/team/t7.jpeg";

const team = [
  { name: "Aaditya Khopade", role: "PRESIDENT", img: t1 },
  { name: "Samaira Malik", role: "VICE PRESIDENT", img: t2 },
  { name: "Riddhi Pragadeeswaran", role: "GENERAL SECRETARY", img: t3 },
  { name: "Shreya Rastogi", role: "TREASURER", img: t4 },
  { name: "Adithi Jahnavi", role: "TECHNICAL HEAD", img: t5 },
  { name: "Swaraj Shewale", role: "GRAPHIC DESIGNER", img: t6 },
  { name: "Shriya Singh", role: "EVENT COORDINATOR", img: t7 },
];

const About = () => {
  return (
    <section className="about-section">
      <h2 className="section-title">MEET THE TEAM</h2>

      {/* Top row: 2 members */}
      <div className="team-row-two">
        {team.slice(0, 2).map((member, index) => (
          <div key={member.name} className="team-card">
            <img src={member.img} alt={member.name} className="team-img" />
            <h3 className="team-name">{member.name}</h3>
            <p className="team-role">{member.role}</p>
          </div>
        ))}
      </div>

      {/* Middle row: 3 members */}
      <div className="team-grid">
        {team.slice(2, 5).map((member) => (
          <div key={member.name} className="team-card">
            <img src={member.img} alt={member.name} className="team-img" />
            <h3 className="team-name">{member.name}</h3>
            <p className="team-role">{member.role}</p>
          </div>
        ))}
      </div>

      {/* Bottom row: 2 members */}
      <div className="team-row-two">
        {team.slice(5, 7).map((member) => (
          <div key={member.name} className="team-card">
            <img src={member.img} alt={member.name} className="team-img" />
            <h3 className="team-name">{member.name}</h3>
            <p className="team-role">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
