import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md="9">
            <div className="media">
              <img
                width={150}
                height={150}
                className="mr-3"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiKztGHvMvOqlh91-rltzuzIbZd07cPz-RpA&usqp=CAU"
              />
              <div className="media-body">
                <h5>Blog post</h5>
                <p>
                  JavaScript — мультипарадигменный язык программирования.
                  Поддерживает объектно-ориентированный, императивный и
                  функциональный стили. Является реализацией спецификации
                  ECMAScript. JavaScript обычно используется как встраиваемый
                  язык для программного доступа к объектам приложений.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
