import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Carrito from "../carrito/Carrito";

function NavBar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="../images/log.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            TIENDA DEPORTIVA FORK
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">INICIO</Nav.Link>
            <Nav.Link href="#features">PRODUCTOS</Nav.Link>
            <Nav.Link href="#pricing">NOSOTROS</Nav.Link>
            <Nav.Link href="#pricing">CONTACTO</Nav.Link>
          </Nav>
          <Carrito />
        </Container>
      </Navbar>
    </div>
  );
}
export default NavBar;
