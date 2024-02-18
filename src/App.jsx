import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Budgeting from "./pages/Budgeting";
import Profile from "./pages/Profile";
import Town from "./pages/Town";
import Forum from "./pages/Forum";
import Shop from "./pages/Shop";
import { AuthProvider } from "./components/AuthContext";
import RequireAuth from "./components/RequireAuth";
import { ThemeProvider } from "./styles/ThemeContext";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ThemeProvider>
          <NavigationBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/budgeting"
              element={
                <RequireAuth>
                  <Budgeting />
                </RequireAuth>
              }
            />
            <Route
              path="/profile"
              element={
                <RequireAuth>
                  <Profile />
                </RequireAuth>
              }
            />
            <Route
              path="/town"
              element={
                <RequireAuth>
                  <Town />
                </RequireAuth>
              }
            />
            <Route
              path="/shop"
              element={
                <RequireAuth>
                  <Shop />
                </RequireAuth>
              }
            />
            <Route
              path="/forum"
              element={
                <RequireAuth>
                  <Forum />
                </RequireAuth>
              }
            />
          </Routes>
          <Footer />
        </ThemeProvider>
      </BrowserRouter>
    </AuthProvider>
  );
}
