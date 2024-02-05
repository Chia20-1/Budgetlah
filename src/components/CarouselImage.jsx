import "../styles/home.css";

const CarouselImage = ({ text, imagePath }) => {
  return (
    <img className="d-block w-100 carousel-image" src={imagePath} alt={text} />
  );
};

export default CarouselImage;
