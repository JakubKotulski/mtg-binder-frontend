import { useHistory } from "react-router-dom";
import axios from "axios";
// import { useState } from "react";

const Authorization = () => {
  const history = useHistory();

  const getUser = () => {
    axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:4000/user",
    }).then((res) => {
      if (res.data.username === null) {
        history.push("/");
      } else {
        console.log(res);
      }
    });
  };

  getUser();
};

export default Authorization;
