import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import "../css/tab.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import FarmersMarket from "./FarmersMarket";
import MonthsModals from "./MonthsModals";
import StateModals from "./StateModals";
import Geolocation from "./Geolocation";
import Cards from "./Cards";
// import DisplaySelection from "./DisplaySelection";

const AppTab = () => {
  const [statessModalShow, setStatessModalShow] = useState(false);
  const [monthsModalShow, setMonthsModalShow] = useState(false);
  const [reloadGeolocation, setReloadGeolocation] = useState(false);
  const [displayCards, setDisplayCards] = useState(true);

  const monthLookup = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const stateIds = {
    Alabama: 1,
    Alaska: 2,
    Arizona: 3,
    Arkansas: 4,
    California: 5,
    Colorado: 6,
    Connecticut: 7,
    Delaware: 8,
    Florida: 9,
    Georgia: 10,
    Hawaii: 11,
    Idaho: 12,
    Illinois: 13,
    Indiana: 14,
    Iowa: 15,
    Kansas: 16,
    Kentucky: 17,
    Louisiana: 18,
    Maine: 19,
    Maryland: 20,
    Massachusetts: 21,
    Michigan: 22,
    Minnesota: 23,
    Mississippi: 24,
    Missouri: 25,
    Montana: 26,
    Nebraska: 27,
    Nevada: 28,
    "New Hampshire": 29,
    "New Jersey": 30,
    "New Mexico": 31,
    "New York": 32,
    "North Carolina": 33,
    "North Dakota": 34,
    Ohio: 35,
    Oklahoma: 36,
    Oregon: 37,
    Pennsylvania: 38,
    "Rhode Island": 39,
    "South Carolina": 40,
    "South Dakota": 41,
    Tennessee: 42,
    Texas: 43,
    Utah: 44,
    Vermont: 45,
    Virginia: 46,
    Washington: 47,
    "West Virginia": 48,
    Wisconsin: 49,
    Wyoming: 50,
  };

  const fireAxios = () => {
    setDisplayCards(!displayCards);
  };

  return (
    <div >
      {/* <DisplaySelection /> */}
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3} lg={2} style={{ marginTop: 0 }}>
            <label for="menu-toggle">☰ Menu</label>
            <input type="checkbox" id="menu-toggle" />
            <Nav id="menu" className="flex-column">
              <Nav.Item>
                <Nav.Link
                  className="tab__link"
                  eventKey="first"
                  onClick={() => {
                    reloadGeolocation
                      ? setReloadGeolocation(false)
                      : setReloadGeolocation(true);
                  }}
                >
                  Home
                </Nav.Link>
              </Nav.Item>
              <hr className="tab__hr" />
              <Nav.Item>
                <Nav.Link
                  className="tab__link"
                  eventKey="second"
                  onClick={() => setStatessModalShow(true)}
                >
                  Change State
                </Nav.Link>
              </Nav.Item>
              <hr className="tab__hr" />
              <Nav.Item>
                <Nav.Link
                  className="tab__link"
                  eventKey="third"
                  onClick={() => setMonthsModalShow(true)}
                >
                  Change Month
                </Nav.Link>
              </Nav.Item>
              <hr className="tab__hr" />
              <Nav.Item>
                <Nav.Link className="tab__link" eventKey="fourth">
                  Farmers Market
                </Nav.Link>
              </Nav.Item>
              <hr className="tab__hr" />
            </Nav>
          </Col>

          <Col lg={10}>
            <Tab.Content >
              <Tab.Pane eventKey="first" style={{width:"150px"}}>
                <Geolocation
                  reloadGeolocation={reloadGeolocation}
                  monthLookup={monthLookup}
                  stateIds={stateIds}
                  fire={fireAxios}
                />
                <Cards
                  // statess={statess}
                  // month={month}
                  display={displayCards}
                  stateIds={stateIds}
                  monthLookup={monthLookup}
                />
              </Tab.Pane>
              <Tab.Pane eventKey="second" style={{width:"150px"}} >
                <br />
                <StateModals
                  stateIds={stateIds}
                  statessModalShow={statessModalShow}
                  setStatessModalShow={setStatessModalShow}
                  fire={fireAxios}
                />
                <Cards
                  // statess={statess}
                  // month={month}
                  display={displayCards}
                  stateIds={stateIds}
                  monthLookup={monthLookup}
                />
              </Tab.Pane>
              <Tab.Pane eventKey="third" style={{width:"150px"}} >
                <br />
                <MonthsModals
                  monthsModalShow={monthsModalShow}
                  setMonthsModalShow={setMonthsModalShow}
                  monthLookup={monthLookup}
                  fire={fireAxios}
                />
                <Cards
                  // statess={statess}
                  // month={month}
                  display={displayCards}
                  stateIds={stateIds}
                  monthLookup={monthLookup}
                />
              </Tab.Pane>
              <Tab.Pane eventKey="fourth" >
                <FarmersMarket />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default AppTab;
