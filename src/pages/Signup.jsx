import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/login.css";
import { useContext } from "react";
import { ThemeContext } from "../styles/ThemeContext";

function Login() {
  const { theme } = useContext(ThemeContext);

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
              <Form id="login-form">
                <Form.Group controlId="formBasicEmail">
                  <Form.Label className="mt-3">Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    required
                    style={{ borderColor: theme.tertiary }}
                  />
                  <Form.Text className="text-muted">
                    We&apos;ll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label className="mt-3">Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    required
                    style={{ borderColor: theme.tertiary }}
                    className="mb-3"
                  />
                </Form.Group>

                <div className="login-container">
                  <Button
                    variant="primary"
                    type="submit"
                    style={{
                      backgroundColor: theme.primary,
                      borderColor: theme.primary,
                    }}
                    className="mt-3"
                  >
                    Sign Up
                  </Button>
                </div>
              </Form>

              <div className="no-account mt-3">
                <p style={{ color: theme.primary }}>
                  Already have an account?{" "}
                  <Link to="/login" style={{ color: theme.secondary }}>
                    Login now
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

export default Login;
