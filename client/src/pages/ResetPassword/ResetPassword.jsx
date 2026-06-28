import "./ResetPassword.css";
import { toast } from "react-toastify";

function ResetPassword() {
    const handleResetPassword = (e) => {
  e.preventDefault();

  toast.success("Password Changed Successfully!");
};
  return (
    <section className="reset-password">
      <div className="reset-container">

        <h1>Reset Password</h1>

        <p>
          Create a new password for your account.
        </p>

        <form className="reset-form" onSubmit={handleResetPassword}>

          <div className="form-group">
            <label>New Password</label>

            <input
              type="password"
              placeholder="Enter new password"
            />
          </div>

          <div className="form-group">
            <label>Confirm Password</label>

            <input
              type="password"
              placeholder="Confirm new password"
            />
          </div>

          <button type="submit">
            Reset Password
          </button>

        </form>

      </div>
    </section>
  );
}

export default ResetPassword;