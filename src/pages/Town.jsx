import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Import your town image
import pokemonTownMap from "/assets/town.png";

function Town() {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={6} className="text-center">
          <h1>My Town</h1>
          <img src={pokemonTownMap} alt="My Town Map" />
        </Col>
      </Row>
    </Container>
  );
}

export default Town;
