import { useContext } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import CarouselImage from "../components/CarouselImage";
import "../styles/home.css";
import { ThemeContext, ThemeProvider } from "../styles/ThemeContext";
import { LinkContainer } from "react-router-bootstrap";

function HeroSection() {
  const { theme } = useContext(ThemeContext);

  return (
    <Container className="hero-section p-4">
      <Row>
        <Col
          lg={6}
          className="mb-4 d-flex align-items-center justify-content-center"
        >
          <img
            src="../assets/hero-image.jpg" // Replace with your image URL
            alt="BudgetLah"
            className="hero-image w-100"
          />
        </Col>
        <Col
          lg={6}
          className="d-flex align-items-center justify-content-center"
        >
          <div className="hero-content">
            <h1 style={{ color: theme.secondary }}>BudgetLah</h1>
            <p>
              Take control of your finances. Achieve your financial goals with
              personalized guidelines. Get personalized banking, Ai-powered
              financial management, and educational resources, all in{" "}
              <span>BudgetLah</span>.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

function CarouselSection() {
  const { theme } = useContext(ThemeContext);

  const getStartedButton = (
    <LinkContainer to="/login">
      <button className="btn btn-primary btn-lg fs-4 mb-5 py-3 px-5">
        Get Started
      </button>
    </LinkContainer>
  );

  return (
    <Carousel
      style={{ backgroundColor: theme.background, color: theme.primary }}
      className="mb-5"
    >
      <Carousel.Item>
        <CarouselImage
          text="First slide"
          imagePath="../assets/carousel-images/carousel-image-1.jpg"
        />
        <Carousel.Caption>
          {getStartedButton}
          <h3 style={{ color: theme.quaternary }}>Personalized Budgeting</h3>
          <p>
            Your money, managed smarter. Get personalized plans, automated
            trackers, and expert guidance to reach your finanacial goals faster.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage
          text="Second slide"
          imagePath="../assets/carousel-images/carousel-image-2.jpg"
        />
        <Carousel.Caption>
          {getStartedButton}
          <h3 style={{ color: theme.quaternary }}>Learn & Grow</h3>
          <p>
            Level up your financial knowledge in our community curated social
            learning hub. Explore articles and medias elected by the community
            based on intuitive criteria, like easy-to-understand, credibility,
            and helpfulness.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage
          text="Third slide"
          imagePath="../assets/carousel-images/carousel-image-3.jpg"
        />
        <Carousel.Caption>
          {getStartedButton}
          <h3 style={{ color: theme.quaternary }}>Ask Finny</h3>
          <p>
            Don&apos;t navigate the complexities of finance alone. Meet Finny,
            your empathetic AI companion, providing friendly financial insights
            when you&apos;re lost without human guidance, boosting your
            financial confidence.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

function TestimonialSection() {
  const { theme } = useContext(ThemeContext);

  const testimonials = [
    {
      id: 1,
      name: "Irfan Hakimi",
      review:
        "As a uni student, managing finances is tough, but this app makes budgeting simple and effective. Love it!",
      position: "University Student",
    },
    {
      id: 2,
      name: "Samantha Lee",
      review:
        "Starting my career was overwhelming, especially budget-wise. This app helped me keep everything under control.",
      position: "Junior Developer",
    },
    {
      id: 3,
      name: "Liam Chen",
      review:
        "Balancing part-time work and studies is hard. This app helps me track my expenses and save for my goals!",
      position: "Part-time Student & Freelancer",
    },
  ];

  return (
    <Container
      style={{
        backgroundColor: theme.background,
        color: theme.primary,
      }}
      className="my-5 testimonial-section"
    >
      <Row className="justify-content-md-center align-items-center">
        {testimonials.map((testimonial) => (
          <Col key={testimonial.id} md={4} className="mb-3 px-4">
            <Card
              style={{
                backgroundColor: theme.quaternary,
                color: theme.secondary,
                height: "240px",
              }}
              className="testimonial-card"
            >
              <Card.Body>
                <Card.Title>{testimonial.name}</Card.Title>
                <Card.Subtitle
                  style={{ color: theme.tertiary }}
                  className="mb-2 text-muted"
                >
                  {testimonial.position}
                </Card.Subtitle>
                <Card.Text>{testimonial.review}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default function Home() {
  return (
    <ThemeProvider>
      <HeroSection />
      <CarouselSection />
      <TestimonialSection />
    </ThemeProvider>
  );
}
