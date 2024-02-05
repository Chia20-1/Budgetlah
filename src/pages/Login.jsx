import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/login.css";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../styles/ThemeContext";
import { AuthContext } from "../components/AuthContext";

export default function Login() {
  const { theme } = useContext(ThemeContext);
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    const isCorrectUsername = username === "guest@gmail.com";
    const isCorrectPassword = password === "123";
    if (isCorrectUsername && isCorrectPassword) {
      login("1234"); // Set token in local storage
      navigate("/budgeting");
    } else {
      alert("Wrong details!");
    }
  }

  return (
    <div
      className="login-wrapper d-flex justify-content-center align-items-center"
      style={{ backgroundColor: theme.background }}
    >
      <Container>
        <Row className="justify-content-md-center">
          <Col
            md={6}
            className="rounded-2 shadow"
            style={{
              backgroundColor: theme.background,
              color: theme.primary,
              border: `3px solid ${theme.primary}`,
            }}
          >
            <div className="rounded p-4">
              <h1 style={{ color: theme.secondary }}>Welcome!</h1>
              <p style={{ color: theme.secondary }}>
                Become a member to access our features!
              </p>
              <Form id="login-form">
                <Form.Group controlId="formBasicEmail">
                  <Form.Label className="mt-3">Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    required
                    style={{ borderColor: theme.tertiary }}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label className="mt-3">Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    required
                    style={{ borderColor: theme.tertiary }}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>

                <div className="forgot-password mt-3">
                  <p style={{ color: theme.primary }}>
                    Forgot password?{" "}
                    <a href="#" style={{ color: theme.secondary }}>
                      {" "}
                      Click here
                    </a>
                  </p>
                </div>

                <div className="login-container">
                  <Button
                    variant="primary"
                    type="button"
                    style={{
                      backgroundColor: theme.primary,
                      borderColor: theme.primary,
                    }}
                    onClick={handleLogin}
                  >
                    Login
                  </Button>
                </div>
              </Form>

              <div className="no-account mt-3">
                <p style={{ color: theme.primary }}>
                  Doesn&apos;t have an account yet?{" "}
                  <Link to="/signup" style={{ color: theme.secondary }}>
                    Sign up now
                  </Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
