import { Link } from "react-router-dom";
import { Container, Navbar } from "react-bootstrap";

const TemporaryAuthorization = () => {
  const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;
  console.log(user);

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
                <li>Log out</li>
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
