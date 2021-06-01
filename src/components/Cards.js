import React, { useEffect, useState } from "react";
import "../css/cards.css";
import axios from "axios";
import ProduceCard from "./ProduceCard";
import DisplaySelection from "./DisplaySelection"


const Cards = (props) => {
  const [produceData, setProduceData] = useState([]);
  const state = sessionStorage.getItem("usersState");
  const month = sessionStorage.getItem("month");
  const stateId = sessionStorage.getItem("userStateId");

  useEffect(() => {
    axios
      .get(
        `https://yumyumfresh-api.herokuapp.com/states/${state}/produces?month=${month}&lookup_id=${stateId}`
      )
      .then((res) => {
        console.log(res);
        setProduceData(res.data);
      });
  }, [state, month, stateId]);

  return (
    <div className="cards__div">
      <DisplaySelection />
      {produceData.map((prod) => {
        return <ProduceCard prod={prod} />;
      })}
    </div>
  );
};

export default Cards;
