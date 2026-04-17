function App() {
  return (
    <div style={container}>

      {/* HERO */}
      <section style={hero}>
        <h1 style={title}>Tushar Kapil</h1>
        <p style={subtitle}>Full Stack Developer (MERN)</p>

        <div style={{ marginTop: "15px" }}>
          <a href="#" style={btn}>GitHub</a>
          <a href="#" style={btnOutline}>LinkedIn</a>
        </div>
      </section>

      {/* PROJECTS */}
      <section style={{ marginTop: "60px" }}>
        <h2 style={heading}>Projects</h2>

        <div style={grid}>
          <Card
            title="🍔 Food Delivery"
            desc="MERN app with cart, login & search"
          />

          <Card
            title="💼 Job Portal"
            desc="Job portal with authentication and dashboard"
          />

          <Card
            title="📌 Pinterest Clone"
            desc="Image sharing app with grid layout"
          />
        </div>
      </section>

      {/* CONTACT */}
      <section style={{ marginTop: "60px", textAlign: "center" }}>
        <h2 style={heading}>Contact</h2>
        <p>Email: your@email.com</p>
      </section>

    </div>
  );
}

/* CARD COMPONENT */
function Card({ title, desc }) {
  return (
    <div style={card}>
      <h3>{title}</h3>
      <p style={{ color: "#94a3b8" }}>{desc}</p>

      <div style={{ marginTop: "10px" }}>
        <a href="#">Live</a> | <a href="#">GitHub</a>
      </div>
    </div>
  );
}

/* STYLES */
const container = {
  background: "#020617",
  color: "white",
  minHeight: "100vh",
  padding: "40px",
  fontFamily: "Arial",
};

const hero = {
  textAlign: "center",
  marginTop: "50px",
};

const title = {
  fontSize: "42px",
  fontWeight: "bold",
};

const subtitle = {
  color: "#94a3b8",
  marginTop: "10px",
};

const btn = {
  marginRight: "10px",
  padding: "8px 16px",
  background: "white",
  color: "black",
  borderRadius: "6px",
  textDecoration: "none",
};

const btnOutline = {
  padding: "8px 16px",
  border: "1px solid white",
  borderRadius: "6px",
  textDecoration: "none",
  color: "white",
};

const heading = {
  textAlign: "center",
  marginBottom: "20px",
};

const grid = {
  display: "flex",
  justifyContent: "center",
  gap: "20px",
  flexWrap: "wrap",
};

const card = {
  background: "#0f172a",
  padding: "20px",
  borderRadius: "10px",
  width: "250px",
};

export default App;