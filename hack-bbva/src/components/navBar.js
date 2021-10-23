import './navBar.css';
import React, { useState } from "react";
import { Navbar, Container, Col, Row } from "react-bootstrap";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { Icon } from "semantic-ui-react";
// import { CustomDrawer } from "./CustomComponent";

export const NavBar = ({ nombreUsuario }, props) => {
  const [open, setOpen] = useState(false)
  const showDrawer = () => setOpen(!open)
  return (
    <div>
      <Navbar className="mainNav">
        <Container
          style={{ marginTop: "0", marginBottom: "0", color: "white" }}
          fluid
        >

          <Navbar.Brand
            className="justify-content-center"
            style={{ color: "white", marginLeft: "2%" }}
          >
            <AiOutlineMenu style={{ cursor: "pointer"}} size={22} onClick={showDrawer} />
            {" "}
            Menú
          </Navbar.Brand>
          <Navbar.Brand
            className="justify-content-center"
            style={{ color: "white", marginLeft: "38%" }}
          ><h2>BBVA</h2>
            
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Brand style={{ color: "white" }}><AiOutlineSearch /></Navbar.Brand>
            <Navbar.Brand href="#home" style={{ color: "white" }}>Registrate</Navbar.Brand>
            <Navbar.Brand href="#home" style={{ color: "white" }}>Acceso</Navbar.Brand>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
        <div className={open ? "container-drawer active" : "container-drawer"}>
          <Row>
            <Col xs={10} md={9} lg={4} /*className="content"*/>
              {props.children}
            </Col>
          </Row>
        </div>
        <style type="text/css">
          {`
            .content {
              width: 180vh;
            }
            @media (max-width: 769px) {
              .content {
                width: 100vh;
              }
            }
          `}
        </style>
    </div>
  );
};
