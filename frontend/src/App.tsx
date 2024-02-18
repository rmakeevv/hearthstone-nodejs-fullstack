import axios from "axios";
import React, { useEffect, useState } from "react";
import "./index.css";
import Header from "./components/Header";

export type ICard = {
  card_id: string;
  name: string;
  img: string;
};

const listStyle: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: "12px",
  padding: "12px",
};

const listItem: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  width: "200px",
  padding: "12px",
  border: "1px solid #778899",
  borderRadius: "2px",
  background: "#F8F8FF",
  alignItems: "stretch",
};

function App() {
  const [data, setData] = useState<ICard[] | undefined>();
  useEffect(() => {
    axios
      .get<ICard[]>("http://localhost:5000/cards")
      .then((data) => setData(data.data));
  }, []);

  return (
    <div style={{ marginTop: "80px" }}>
      <Header />
      <div style={listStyle}>
        {data?.map((card) => (
          <div key={card.card_id} style={listItem}>
            {card.name}
            <img src={card.img} alt={card.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
