import React, { useEffect, useState } from "react";
import axios from "axios";
import MarketCard from "./MarketCard";
import "../css/farmersMarket.css";

const FarmersMarket = () => {
  const [markets, setMarkets] = useState([]);
  const [zipcode, setZipcode] = useState("");

  useEffect(() => {
    setZipcode(sessionStorage.getItem("userZipCode"));
  }, []);

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
            defaultValue={sessionStorage.getItem("userZipCode")}
            placeholder={
              sessionStorage.getItem("userZipCode")
                ? sessionStorage.getItem("userZipCode")
                : "enter your zip code"
            }
            onChange={handleChange}
            style={{
              // padding: "5%",
              width: "45%",
              borderRadius: "10px",
              fontSize: "125%",
              textDecoration: "none",
              outline: "none",
              textIndent: "5px",
              backgroundColor: "#fff8fa",
              color: "#251E23"
            }}
          />
          
          {/* <div> */}
          <input
            type="submit"
            className="farmers__button"
            value="Find your market"
          />
            {/* {" "}
            find farm */}
          {/* </button> */}
          {/* <div className="farmersMarket__extraSpace"></div> */}
          {/* </div> */}
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
