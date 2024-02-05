import { useState } from "react";
import Container from "react-bootstrap/Container";
import askfinnyone from "/assets/askfinny/askfinnyone.jpg";
import askfinnytwo from "/assets/askfinny/askfinnytwo.jpg";

export default function AskFinnyCard() {
  const [currentImage, setCurrentImage] = useState(askfinnyone);

  const toggleImage = () => {
    setCurrentImage(currentImage === askfinnyone ? askfinnytwo : askfinnyone);
  };

  return (
    <Container>
      <h1>Ask Finny Page</h1>
      <a onClick={toggleImage}>
        <img src={currentImage} alt="Ask Finny Image" />
      </a>
    </Container>
  );
}
