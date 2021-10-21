import "./AccountPage.css";
import Form from "../Form/Form";

const AccountPage = () => {
  return (
    <div className="main-box">
      <div className="form-box">
        <h3>Sign up</h3>
        <Form signupForm={true} />
      </div>
      <div className="form-box">
        <h3>Login</h3>
        <Form loginForm={true} />
      </div>
    </div>
  );
};

export default AccountPage;
