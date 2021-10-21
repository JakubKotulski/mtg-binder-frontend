import "./AccountPage.css";
import LoginForm from "../LoginForm/LoginForm";
import SignupForm from "../SignupForm/SignupForm";

const AccountPage = () => {
  return (
    <div className="main-box">
      <div className="form-box">
        <h3>Sign up</h3>
        <SignupForm />
      </div>
      <div className="form-box">
        <h3>Login</h3>
        <LoginForm />
      </div>
    </div>
  );
};

export default AccountPage;
