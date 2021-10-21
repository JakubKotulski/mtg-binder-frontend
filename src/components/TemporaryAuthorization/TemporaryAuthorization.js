import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const TemporaryAuthorization = () => {
  const [linkText, setLinkText] = useState("Account");
  const [linkPath, setLinkPath] = useState("/account");

  const getUser = () => {
    axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:4000/user",
    }).then((res) => {
      if (res.data.username === null) {
        return 0;
      } else {
        setLinkText("Your account");
        setLinkPath("/user-panel")
      }
    });
  };

  getUser();

  return <Link to={linkPath}>{linkText}</Link>;
};

export default TemporaryAuthorization;
