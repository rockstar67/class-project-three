import React from "react";

import {
  Card,
  CardImg,
  CardBody,
  CardText,
  Container,
  Row,
  Col,
} from "reactstrap";

const buttonStyle = {
  button: {
    cursor: "pointer",
    border: "none",
    backgroundColor: "transparent",
  },
};

function FoodCard(props) {

  const searchItem = [
    {
      term: "best sushi",
      imageName: "sushi",
      location: "Los Angeles, CA",
      rating: "5",
      limit: 6,
      id: "F1",
    },
    {
      term: "best tacos",
      imageName: "tacos",
      location: "Los Angeles, CA",
      rating: "5",
      limit: 6,
      id: "F",
    },
    {
      term: "best burger",
      imageName: "burger",
      location: "Los Angeles, CA",
      rating: "5",
      limit: 6,
      id: "F3",
    },
    {
      term: "best indian",
      imageName: "indian",
      location: "Los Angeles, CA",
      rating: "5",
      limit: 6,
      id: "F4",
    },
    {
      term: "best pho",
      imageName: "pho",
      location: "Los Angeles, CA",
      rating: "5",
      limit: 6,
      id: "F5",
    },
    {
      term: "best icecream",
      imageName: "icecream",
      location: "Los Angeles, CA",
      rating: "5",
      limit: 6,
      id: "F6",
    },
  ];
  return (
    <>
      <div className="section">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="4">
              {searchItem.slice(0, 2).map((item) => (
                <Card
                  style={{ width: "20rem", marginBottom: "10px" }}
                  key={item.id}
                >
                  <CardImg
                    alt="..."
                    src={require(`../assets/img/${item.imageName}.jpg`)}
                    top
                  ></CardImg>
                  <CardBody>
                    <CardText>
                      <button
                        onClick={() => props.handleSelect(item)}
                        style={buttonStyle.button}
                      >
                        <b>{item.term.toUpperCase()}</b>
                      </button>
                    </CardText>
                  </CardBody>
                </Card>
              ))}
            </Col>
            <hr />
            <Col className="ml-auto mr-auto" md="4">
              {searchItem.slice(2, 4).map((item) => (
                <Card
                  style={{ width: "20rem", marginBottom: "10px" }}
                  key={item.id}
                >
                  <CardImg
                    alt="..."
                    src={require(`../assets/img/${item.imageName}.jpg`)}
                    top
                  ></CardImg>
                  <CardBody>
                    <CardText>
                      <button
                        onClick={() => {
                          /*if (!user) {
                            loginWithRedirect({});
                          } else {
                            props.handleSelect(item);
                          }*/
                          props.handleSelect(item)
                        }}
                        style={buttonStyle.button}
                      >
                        <b>{item.term.toUpperCase()}</b>
                      </button>
                    </CardText>
                  </CardBody>
                </Card>
              ))}
            </Col>
            <hr />
            <Col className="ml-auto mr-auto" md="4">
              {searchItem.slice(4, 6).map((item) => (
                <Card
                  style={{ width: "20rem", marginBottom: "10px" }}
                  key={item.id}
                >
                  <CardImg
                    alt="..."
                    src={require(`../assets/img/${item.imageName}.jpg`)}
                    top
                  ></CardImg>
                  <CardBody>
                    <CardText>
                      <button
                        onClick={() => props.handleSelect(item)}
                        style={buttonStyle.button}
                      >
                        <b>{item.term.toUpperCase()}</b>
                      </button>
                    </CardText>
                  </CardBody>
                </Card>
              ))}
            </Col>
            <hr />
          </Row>
        </Container>
      </div>
    </>
  );
}

export default FoodCard;
