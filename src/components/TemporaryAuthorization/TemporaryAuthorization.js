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
              <Navbar.Brand>
                {" "}
                <img
                  src="https://www.logomaker.com/api/main/images/1j+ojFVDOMkX9Wytexe43D6khvOEqBROmR...NwXs1M3EMoAJtliMogvJo9...U8"
                  alt="logo"
                ></img>{" "}
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Link to="/user-panel">
                  <li>Your account</li>
                </Link>
                <li onClick={logout}>Log out</li>
                <Link to="/">
                  <li>Home</li>
                </Link>
                <li className="responsive-show">
                  <b>User:</b> {user.username}
                </li>
                <Link to="/user-change-data">
                  <li className="responsive-show"> Change your data</li>
                </Link>
              </Navbar.Collapse>
              <li className="responsive-hidden">
                <b>User:</b> {user.username}
              </li>
              <Link to="/user-change-data">
                <li className="responsive-hidden"> Change your data</li>
              </Link>
            </Container>
          </Navbar>
        </>
      ) : (
        <>
          <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand>
                {" "}
                <img
                  src="https://www.logomaker.com/api/main/images/1j+ojFVDOMkX9Wytexe43D6khvOEqBROmR...NwXs1M3EMoAJtliMogvJo9...U8"
                  alt="logo"
                ></img>
              </Navbar.Brand>
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
