import React from "react";
import { Navbar as Navbars, Container, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
function Navbar(children: any) {
  return (
    <Navbars sticky="top" className="bg-green shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            about
          </Nav.Link>

        </Nav>
        
        <Button style={{position:"relative",width:"3rem",height:"3rem"}} variant="outline-primary" className="rounded-circle" >
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M13.5 21c-.276 0-.5-.224-.5-.5s.224-.5.5-.5.5.224.5.5-.224.5-.5.5m0-2c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5m-6 2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5.5.224.5.5-.224.5-.5.5m0-2c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5m16.5-16h-2.964l-3.642 15h-13.321l-4.073-13.003h19.522l.728-2.997h3.75v1zm-22.581 2.997l3.393 11.003h11.794l2.674-11.003h-17.861z"/></svg>      
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          right: "0px",
          bottom: "0px",
          height: "1.5rem",
          color: "white",
          width: "1.5rem",
          transform:"translate(25%,-25%)"
        }} className="rounded-circle bg-danger">3</div>  </Button>
      </Container>
    </Navbars>
  );
}

export default Navbar;
