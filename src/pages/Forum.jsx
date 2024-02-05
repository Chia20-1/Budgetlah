import { Row, Col, Button, Card, Container, Image } from "react-bootstrap";
import "../styles/forum.css";

export default function Forum() {
  return (
    <Container>
      <Row className="my-2">
        <Col xs={12}>
          <h1>Trending Topics</h1>
        </Col>
      </Row>

      <Row className="mb-2">
        <Col xs={12} className="text-center">
          <div>
            <Button className="m-2" variant="secondary">
              Investing 101
            </Button>
            <Button className="m-2" variant="secondary">
              Budget Guru
            </Button>
            <Button className="m-2" variant="secondary">
              Debt Management
            </Button>
            <Button className="m-2" variant="secondary">
              Lifestyle & Money
            </Button>
            <Button className="m-2" variant="secondary">
              Retirement Planning
            </Button>
          </div>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          {/* Replace the div with Card component */}
          <Card>
            <Card.Title className="text-center">Money Talk Corner</Card.Title>
            <Card.Body>
              <Row>
                <Col xs={2}>
                  <div className="user-image-container">
                    <Image
                      src="assets/forum/man.jpg"
                      alt="User Image"
                      fluid
                      roundedCircle
                    />
                  </div>
                </Col>
                <Col xs={10}>
                  <div className="user-info">
                    <span className="username">Freddy</span>
                  </div>
                  <div className="post-content">
                    <h2>
                      Warren Buffett | How To Invest For Beginners: 3 Simple
                      Rules
                    </h2>
                    <div className="videos">
                      <div className="placeholder-iframe">
                        <img
                          src="https://i.ytimg.com/vi/Uw_QyeHo8f0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAl5HwnIAcM_GsSpZyLFUXXG5rARQ"
                          alt="video-thumbnail"
                        ></img>
                      </div>
                      <div className="emoji">
                        <a>
                          <img src="assets/forum/like.jpg" alt="Like" />
                        </a>
                        <a>
                          <img
                            src="assets/forum/bubblechat.jpg"
                            alt="Comment"
                          />
                        </a>
                        <a>
                          <img src="assets/forum/bookmark.jpg" alt="Bookmark" />
                        </a>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
