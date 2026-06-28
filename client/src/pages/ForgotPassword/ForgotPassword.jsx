import "./ForgotPassword.css";
import { toast } from "react-toastify";

function ForgotPassword() {
   const handleForgotPassword = (e) => {
  e.preventDefault();

  toast.info("Password Reset Link Sent!");
}; 
  return (
    <section className="forgot-password">
      <div className="forgot-container">

        <h1>Forgot Password</h1>

        <p>
          Enter your registered email address and we'll send you a password reset link.
        </p>

        <form className="forgot-form" onSubmit={handleForgotPassword}>

          <div className="form-group">
            <label>Email Address</label>

            <input
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <button type="submit">
            Send Reset Link
          </button>

        </form>

      </div>
    </section>
  );
}

export default ForgotPassword;
