function App() {
  return (
    <div style={container}>

      {/* HEADER */}
      <h1 style={title}>Tushar Kapil</h1>
      <p style={subtitle}>Full Stack Developer (MERN)</p>

      {/* CONTACT */}
      <p style={contact}>
        📧 your@email.com | 🔗 GitHub | 💼 LinkedIn
      </p>

      {/* SUMMARY */}
      <Section title="Summary">
        Passionate Full Stack Developer with experience in building web applications using MERN stack. 
        Skilled in developing scalable backend systems and responsive frontend interfaces.
      </Section>

      {/* SKILLS */}
      <Section title="Skills">
        <ul>
          <li>Frontend: HTML, CSS, JavaScript, React</li>
          <li>Backend: Node.js, Express.js</li>
          <li>Database: MongoDB, SQL</li>
          <li>Tools: Git, Postman, VS Code</li>
        </ul>
      </Section>

      {/* PROJECTS */}
      <Section title="Projects">

        <div style={card}>
          <h3>🍔 Food Delivery App</h3>
          <p>MERN app with authentication, cart, and search features.</p>
          <a href="#">Live</a> | <a href="#">GitHub</a>
        </div>

        <div style={card}>
          <h3>💼 Job Portal</h3>
          <p>Platform for job seekers and recruiters with role-based access.</p>
          <a href="#">Live</a> | <a href="#">GitHub</a>
        </div>

        <div style={card}>
          <h3>📌 Pinterest Clone</h3>
          <p>Image sharing app with grid layout and user interaction.</p>
          <a href="#">Live</a> | <a href="#">GitHub</a>
        </div>

      </Section>

      {/* CONTACT */}
      <Section title="Contact">
        <p>Email: your@email.com</p>
        <p>GitHub | LinkedIn</p>
      </Section>

    </div>
  );
}

/* Reusable Section Component */
function Section({ title, children }) {
  return (
    <div style={{ marginTop: "30px" }}>
      <h2 style={sectionTitle}>{title}</h2>
      <div style={{ marginTop: "10px" }}>{children}</div>
    </div>
  );
}

/* STYLES */
const container = {
  maxWidth: "900px",
  margin: "auto",
  padding: "20px",
  fontFamily: "Arial",
};

const title = {
  textAlign: "center",
  fontSize: "32px",
};

const subtitle = {
  textAlign: "center",
  color: "gray",
};

const contact = {
  textAlign: "center",
  fontSize: "14px",
  marginBottom: "20px",
};

const sectionTitle = {
  borderBottom: "2px solid black",
  paddingBottom: "5px",
};

const card = {
  marginBottom: "15px",
};

export default App;