import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import axios from "axios";
import "../css/MarketCard.css";

const MarketCard = ({ id, marketName}) => {
  const [marketAddress, setMarketAddress] = useState("");
  const [marketLink, setMarketLink] = useState("");
  const [marketProducts, setMarketProducts] = useState("");
  const [marketSchedule, setMarketSchedule] = useState("");
  const link =  "https://search.ams.usda.gov/farmersmarkets/v1/data.svc/mktDetail?id=" + id

  useEffect(() => {
    axios
      .get(
        link
      )
      .then((response) => {
       //console.log(response.data.marketdetails.Address);
        setMarketAddress(response.data.marketdetails.Address);
        setMarketLink(response.data.marketdetails.GoogleLink);
        setMarketProducts(response.data.marketdetails.Products);
        setMarketSchedule(response.data.marketdetails.Schedule);
        console.log(response.data.marketdetails.Schedule);
      });
  }, [link]);

  return (
    <Card style={{margin:"3%"}} className="marketCard">
      <Card.Body>
        <div className="marketCard__a">
            <a href={marketLink} target="_blank" rel="noreferrer" className="marketCard__link">
              Map It!
            </a>
        </div>
        <Card.Title>{marketName}
        </Card.Title>
        <Card.Text>
          <div>{marketAddress}</div>
          <div>{marketProducts}</div>
          <div>{marketSchedule}</div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MarketCard;