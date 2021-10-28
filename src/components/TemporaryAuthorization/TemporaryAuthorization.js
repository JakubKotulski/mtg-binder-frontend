import { Link, useHistory } from "react-router-dom";
import { Container, Navbar } from "react-bootstrap";
import axios from "axios";

const TemporaryAuthorization = () => {
  const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;
  const history = useHistory();

  const logout = () => {
    axios({
      method: "POST",
      withCredentials: true,
      url: "http://localhost:4000/logout",
    }).then((res) => {
      localStorage.clear();
      history.push("/");
      window.location.reload();
    });
  };

  return (
    <>
      {user ? (
        <>
          <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Link to="/user-panel">
                  <li>Your account</li>
                </Link>
                <li onClick={logout}>Log out</li>
                <Link to="/">
                  <li>Home</li>
                </Link>
              </Navbar.Collapse>
              <li>user: {user.username}</li>
            </Container>
          </Navbar>
        </>
      ) : (
        <>
          <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Link to="/account">
                  <li>Account</li>
                </Link>
                <Link to="/">
                  <li>Home</li>
                </Link>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </>
      )}
    </>
  );
};

export default TemporaryAuthorization;
