function App() {
  return (
    <div style={{
      background: "#0f172a",
      color: "white",
      minHeight: "100vh",
      padding: "40px",
      fontFamily: "Arial"
    }}>
      
      <h1 style={{ fontSize: "40px", textAlign: "center" }}>
        Tushar Kapil 🚀
      </h1>

      <p style={{ textAlign: "center", color: "#94a3b8" }}>
        Full Stack Developer (MERN)
      </p>

      <h2 style={{ marginTop: "50px", textAlign: "center" }}>
        Projects
      </h2>

      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        marginTop: "30px",
        flexWrap: "wrap"
      }}>

        <div style={card}>
          <h3>🍔 Food Delivery</h3>
          <p>MERN app with cart, login & search</p>
        </div>

        <div style={card}>
          <h3>💼 Job Portal</h3>
          <p>Apply & post jobs with authentication</p>
        </div>

        <div style={card}>
          <h3>📌 Pinterest Clone</h3>
          <p>Image sharing with grid layout</p>
        </div>

      </div>
    </div>
  );
}

const card = {
  background: "#1e293b",
  padding: "20px",
  borderRadius: "10px",
  width: "250px"
};

export default App;