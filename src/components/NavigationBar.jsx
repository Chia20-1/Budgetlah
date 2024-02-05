import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import LogoutComponent from "./Logout";

export default function NavigationBar() {
  const { token } = useContext(AuthContext);

  return (
    <Navbar bg="light" expand="lg" className="px-3">
      <LinkContainer to="/">
        <Navbar.Brand className="ml-2">BudgetLah</Navbar.Brand>
      </LinkContainer>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto me-3">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          {!token ? (
            <LinkContainer to="/login">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
          ) : (
            <LogoutComponent />
          )}
          {token && (
            <LinkContainer to="/budgeting">
              <Nav.Link>Budgeting</Nav.Link>
            </LinkContainer>
          )}
          {token && (
            <>
              <NavDropdown title="The Lah Hub" id="features-dropdown">
                <LinkContainer to="/profile">
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/town">
                  <NavDropdown.Item>Town</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/shop">
                  <NavDropdown.Item>Shop</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/forum">
                  <NavDropdown.Item>Forum</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
