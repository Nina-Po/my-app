import React, { Component } from "react";
import CarouselBox from "../components/CarouselBox";
import {
  Container,
  Card,
  CardGroup,
  CardBody,
  CardText,
  Button,
} from "react-bootstrap";

export default class Home extends Component {
  render() {
    return (
      <>
        <CarouselBox />
        <Container>
          <h2 className="text-center m-4">Our team</h2>
          <CardGroup className="mr-4">
            <Card bg="info">
              <Card.Img
                variant="top"
                src="https://assets.entrepreneur.com/content/3x2/2000/20151215195453-business-leader-group-front-leadership-team-professionals-businesspeople.jpeg"
              />
              <CardBody>
                <Card.Title>Developers</Card.Title>
                <CardText>lorem ipsum ...</CardText>
                <Button variant="primery">About us</Button>
              </CardBody>
            </Card>
            <Card>
              <Card.Img
                variant="top"
                src="https://media.istockphoto.com/id/1346944001/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BA%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9-%D0%BF%D0%BB%D0%B0%D0%BD-%D0%BA%D0%BE%D0%BB%D0%BB%D0%B5%D0%B3-%D1%81%D0%BA%D0%BB%D0%B0%D0%B4%D1%8B%D0%B2%D0%B0%D1%8E%D1%89%D0%B8%D1%85-%D1%80%D1%83%D0%BA%D0%B8-%D0%B2%D0%BC%D0%B5%D1%81%D1%82%D0%B5.jpg?s=612x612&w=0&k=20&c=KL_jQQTIM7y1bjh12L4jkSx8pRa239WG1ddn4iH86c8="
              />
              <CardBody>
                <Card.Title>Developers</Card.Title>
                <CardText>lorem ipsum ...</CardText>
                <Button variant="primery">About us</Button>
              </CardBody>
            </Card>
            <Card>
              <Card.Img
                variant="top"
                src="https://www.atlanticlanguage.com/wp-content/uploads/2022/09/team-building.jpg"
              />
              <CardBody>
                <Card.Title>Developers</Card.Title>
                <CardText>lorem ipsum ...</CardText>
                <Button variant="primery">About us</Button>
              </CardBody>
            </Card>
          </CardGroup>
        </Container>
      </>
    );
  }
}
