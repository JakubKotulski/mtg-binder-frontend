import { Alert } from "react-bootstrap";
import "./ActionInfo.css";

const ActionInfo = ({ message }) => {
  return (
    <div className="message-box">
      <Alert className="message" variant="success">
        {message}
      </Alert>
    </div>
  );
};

export default ActionInfo;
