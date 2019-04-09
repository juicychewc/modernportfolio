import React from "react";
import data from "../../data/jsondata.json"
import Nav from "../../components/Nav";
import Card from "../../components/Card";
import { Col, Row, Container } from "../../components/Grid";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import "./Portfolio.css";

class Portfolio extends React.Component {
  state = {
    data
  };

  render() {
    return (
      <Container fluid>
        <Nav />
        <Row>
          <Typography variant="h4" gutterBottom className="portSmallerFont">
          Some text
          </Typography>
        </Row>
        <Row>
          <Typography variant="h4" gutterBottom>
            Projects
          </Typography>
        </Row>
        <Row>
          <Col size="lg-5 md-5 sm-12 marginBottom">
          <div>
          <Row>
            {this.state.data.map(data => (
              <Col size="lg-6 md-6 sm-12 marginBottom">
                <Card
                  id={data.id}
                  name={data.name}
                  image={data.image}
                  description={data.description}
                  githubURL={data.githubURL}
                  deployedURL={data.deployedURL}
                  alt={data.alt}
                />
              </Col>
            ))}
          </Row>
        </div>

          </Col>
        </Row>
      </Container>
    );
  }
}

export default Portfolio;
