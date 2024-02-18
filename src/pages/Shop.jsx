import { Container } from "react-bootstrap";
import shopImage from "/assets/shop.png";

export default function Shop() {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="text-center">
        <h1>Shop Page</h1>
        <img src={shopImage} alt="shop-image" />
      </div>
    </Container>
  );
}
