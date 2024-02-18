import { Container, Row, Col, Image, Card } from "react-bootstrap";
import { ThemeContext, ThemeProvider } from "../styles/ThemeContext";
import { useContext } from "react";
import "../styles/profile.css";
import profilePhoto from "/assets/profile.png";

const Profile = () => {
  const username = "Irfan Hakimi";
  const budgetingScore = 50; // Sample score
  const learningScore = 30; // Sample score
  const totalEarned = 1000; // Sample total earned
  const totalSpent = 500;
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider>
      <Container>
        <Card
          className="p-4 border border-3 rounded-3"
          style={{
            backgroundColor: theme.background,
            color: theme.primary,
            border: `2px solid ${theme.primary}`,
          }}
        >
          <Row className="align-items-center">
            <Col xs={12} className="text-center mb-4">
              <Image
                src={profilePhoto}
                roundedCircle
                fluid
                className="profile-image"
              />
            </Col>
            <Col xs={12}>
              <div className="text-center mb-3">
                <Card.Title>{username}</Card.Title>
                <small>Current Points: 500</small>
              </div>
              <Card.Text className="text-center">
                <strong>Budgeting Activity Score (entries per week):</strong>{" "}
                {budgetingScore} <br />
                <small className="text-muted">
                  Each activity grants 10 points.
                </small>
              </Card.Text>
              <Card.Text className="text-center">
                <strong>Learning Activity Score (engagement in forum):</strong>{" "}
                {learningScore} <br />
                <small className="text-muted">
                  Each activity grants 10 points.
                </small>
              </Card.Text>
              <Card.Text className="text-center">
                <strong>Total Scores Earned:</strong> {totalEarned}
              </Card.Text>
              <Card.Text className="text-center">
                <strong>Total Scores Spent:</strong> {totalSpent}
              </Card.Text>
            </Col>
          </Row>
        </Card>
      </Container>
    </ThemeProvider>
  );
};

export default Profile;
