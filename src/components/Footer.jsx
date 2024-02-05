import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";

export default function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-3">
      <Container>
        <Row className="g-4">
          <Col md={6} lg={4} className="pe-lg-4">
            <h4 className="pb-2">About Us</h4>
            <p>
              BudgetLah revolutionizes your financial journey with AI-powered
              management and personalized banking, delivering control and
              clarity to your financial goals in one intuitive platform.
            </p>
          </Col>
          <Col md={6} lg={4} className="px-lg-4">
            <h4 className="pb-2">Contact Us</h4>
            <address>
              123 Main Street
              <br />
              City, State 12345
              <br />
              Email: info@example.com
              <br />
              Phone: (123) 456-7890
            </address>
          </Col>
          <Col lg={4} className="ps-lg-4">
            <h4 className="pb-2">Quick Links</h4>
            <Nav defaultActiveKey="/home" className="flex-column">
              <LinkContainer to="/Budgetlah">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Budgetlah/login">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Budgetlah/budgeting">
                <Nav.Link>Budgeting</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Budgetlah/learning">
                <Nav.Link>Social Learning</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Budgetlah/ask-finny">
                <Nav.Link>Ask Finny</Nav.Link>
              </LinkContainer>
            </Nav>
          </Col>
        </Row>
        <div className="pt-4 text-center">
          <p>&copy; {new Date().getFullYear()} BudgetLah</p>
        </div>
      </Container>
    </footer>
  );
}
