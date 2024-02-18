import { Container } from "react-bootstrap";

export default function Shop() {
  const shopImage = "/assets/shop-image.jpeg";

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
