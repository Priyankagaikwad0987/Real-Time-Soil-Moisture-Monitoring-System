import React, { useState, useEffect } from "react";

function App() {
  const [moisture, setMoisture] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomMoisture = Math.floor(Math.random() * 1023);
      setMoisture(randomMoisture);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: 30, fontFamily: "Arial" }}>
      <h1>Soil Moisture Monitoring Dashboard</h1>
      <h2>Moisture Level: {moisture}</h2>
      {moisture < 500 && <p style={{ color: "blue" }}>Soil is dry! Pump ON</p>}
      {moisture >= 500 && <p style={{ color: "green" }}>Soil is moist. Pump OFF</p>}
    </div>
  );
}

export default App;
