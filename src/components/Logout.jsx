import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

function LogoutComponent() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // Call the logout function from context
    navigate("/login"); // Redirect user to login page or wherever you wish
  };

  return (
    <Nav.Link onClick={handleLogout} style={{ cursor: "pointer" }}>
      Logout
    </Nav.Link>
  );
}

export default LogoutComponent;
