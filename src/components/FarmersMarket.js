import React, { useEffect, useState } from "react";
import axios from "axios";
import MarketCard from "./MarketCard";
import "../css/farmersMarket.css";

const FarmersMarket = () => {
  const [markets, setMarkets] = useState([]);
  const [zipcode, setZipcode] = useState("");
  const zipCodeFromSession = sessionStorage.getItem("userZipCode")

  useEffect(() => {
    setZipcode(zipCodeFromSession);
  }, [zipCodeFromSession]);

  const handleChange = (e) => {
    setZipcode(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(zipcode);
    axios
      .get(
        "https://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=" +
        zipcode
      )
      .then((res) => {
        setMarkets(res.data.results);
      });
  };

  return (
    <>
      <div className="farmersMarket__div">
        <form className="fmForm" onSubmit={handleSubmit}>
          <input
            type="text"
            value={zipcode}
            // placeholder={
            //   "enter your zip code"
            // }
            //defaultValue={}
            onChange={handleChange}
            style={{
              width: "45%",
              borderRadius: "10px",
              fontSize: "1.5vw",
              textDecoration: "none",
              outline: "none",
              textIndent: "5px",
              backgroundColor: "#fff8fa",
              color: "#251E23"
            }}
          />
          <input
            type="submit"
            className="farmers__button"
            value="Find your market"
          />
        </form>
        {markets
          ? markets.map((market) => (
            <MarketCard
              key={market.id}
              id={market.id}
              marketName={market.marketname}
            />
          ))
          : "No Markets, Womp-Womp"}
      </div>
    </>
  );
};

export default FarmersMarket;
