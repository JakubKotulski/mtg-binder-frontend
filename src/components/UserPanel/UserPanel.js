import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const UserPanel = () => {
  const history = useHistory();

  const getUser = () => {
    axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:4000/user",
    }).then((res) => {
      if (res.data.username === null) {
        history.push("/");
        console.log(res);
      }
    });
  };

  getUser();

  return <h1>User Panel</h1>;
};

export default UserPanel;
