import React, { Component } from "react";
import { Container, Tab, Col, Nav, Row } from "react-bootstrap";

export default class About extends Component {
  render() {
    return (
      <Container>
        <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column mt-2">
                <Nav.Item>
                  <Nav.Link eventKey="first"> Design </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second"> Team </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="three"> Programming </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth"> Frameworks </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth"> Libraries </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <img
                    className="d-block w-100"
                    src="https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fimg&psig=AOvVaw250RHn8R_pUcketYmSZBle&ust=1701086458508000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCLiM3IjP4YIDFQAAAAAdAAAAABAD"
                  ></img>
                  <p>
                    If you want to keep all the styling of a particular
                    React-Bootstrap component but switch the component that is
                    finally rendered whether it's a different React-Bootstrap
                    component, a different custom component, or a different HTML
                    tag you can use the as prop to do so.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <img
                    className="d-block w-100"
                    src="https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_863/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/v6bwf3e8qhdfhrgq7lv3/%D0%91%D0%B8%D0%BB%D0%B5%D1%82IMGWorldsofAdventure%D0%B2%D0%94%D1%83%D0%B1%D0%B0%D0%B5.jpg"
                  ></img>
                  <p>
                    If you want to keep all the styling of a particular
                    React-Bootstrap component but switch the component that is
                    finally rendered whether it's a different React-Bootstrap
                    component, a different custom component, or a different HTML
                    tag you can use the as prop to do so.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="three">
                  <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fimg&psig=AOvVaw250RHn8R_pUcketYmSZBle&ust=1701086458508000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCLiM3IjP4YIDFQAAAAAdAAAAABAD"></img>
                  <p>
                    If you want to keep all the styling of a particular
                    React-Bootstrap component but switch the component that is
                    finally rendered whether it's a different React-Bootstrap
                    component, a different custom component, or a different HTML
                    tag you can use the as prop to do so.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fimg&psig=AOvVaw250RHn8R_pUcketYmSZBle&ust=1701086458508000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCLiM3IjP4YIDFQAAAAAdAAAAABAD"></img>
                  <p>
                    If you want to keep all the styling of a particular
                    React-Bootstrap component but switch the component that is
                    finally rendered whether it's a different React-Bootstrap
                    component, a different custom component, or a different HTML
                    tag you can use the as prop to do so.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fimg&psig=AOvVaw250RHn8R_pUcketYmSZBle&ust=1701086458508000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCLiM3IjP4YIDFQAAAAAdAAAAABAD"></img>
                  <p>
                    If you want to keep all the styling of a particular
                    React-Bootstrap component but switch the component that is
                    finally rendered whether it's a different React-Bootstrap
                    component, a different custom component, or a different HTML
                    tag you can use the as prop to do so.
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    );
  }
}
