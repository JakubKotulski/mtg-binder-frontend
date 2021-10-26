import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const TemporaryAuthorization = () => {
  const [linkText, setLinkText] = useState("Account");
  const [linkPath, setLinkPath] = useState("/account");
  const [username, setUsername] = useState("");

  const getUser = useCallback(() => {
    axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:4000/users/me",
    }).then((res) => {
      if (res.data.username) {
        setLinkText("Your account");
        setLinkPath("/user-panel");
        setUsername(res.data.username);
      }
    });
  },[]);

  useEffect(() => {
    getUser();
  }, [getUser]);

  return (
    <ul>
      <Link to={linkPath}>
        <li>{linkText}</li>
      </Link>
      <Link to="/">
        <li>Home</li>
      </Link>
      <li>username: {username}</li>
    </ul>
  );
};

export default TemporaryAuthorization;
