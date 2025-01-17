import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);
  const [isResetStep, setIsResetStep] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [forgotPasswordData, setForgotPasswordData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const toggleForm = () => {
    setIsSignup(!isSignup);
    setFormData({
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    setErrors({});
  };

  const openForgotPassword = () => {
    setIsForgotPasswordOpen(true);
    setErrors({});
    setForgotPasswordData({
      email: "",
      password: "",
      confirmPassword: "",
    });
    setIsResetStep(false);
  };

  const closeForgotPassword = () => {
    setIsForgotPasswordOpen(false);
    setErrors({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleForgotPasswordChange = (e) => {
    const { name, value } = e.target;
    setForgotPasswordData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (isSignup && !formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.password.trim() || formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    if (isSignup && formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateForgotPasswordForm = () => {
    const newErrors = {};
    if (!forgotPasswordData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(forgotPasswordData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (isResetStep) {
      if (!forgotPasswordData.password.trim() || forgotPasswordData.password.length < 6) {
        newErrors.password = "Password must be at least 6 characters";
      }
      if (forgotPasswordData.password !== forgotPasswordData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleForgotPasswordSubmit = (e) => {
    e.preventDefault();
    if (!validateForgotPasswordForm()) return;

    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!isResetStep) {
      if (storedUser && storedUser.email === forgotPasswordData.email) {
        setIsResetStep(true);
      } else {
        alert("Email not found in the system.");
      }
    } else {
      localStorage.setItem(
        "user",
        JSON.stringify({ ...storedUser, password: forgotPasswordData.password })
      );
      alert("Password reset successfully!");
      closeForgotPassword();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    if (isSignup) {
      localStorage.setItem(
        "user",
        JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          password: formData.password,
        })
      );
      alert("Account created successfully!");
      setFormData({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      setIsSignup(false); // Automatically switch to login page
    } else {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (
        storedUser &&
        storedUser.email === formData.email &&
        storedUser.password === formData.password
      ) {
        alert("Login successful!");
      } else {
        alert("Invalid email or password");
      }
    }
  };

  return (
    <div className="login-container">
      <div className="form-box">
        <h2>{isSignup ? "Sign Up" : "Login"}</h2>
        <form onSubmit={handleSubmit}>
          {isSignup && (
            <div className="input-group">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                required
              />
              {errors.fullName && <p className="error-text">{errors.fullName}</p>}
            </div>
          )}
          <div className="input-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
            {errors.email && <p className="error-text">{errors.email}</p>}
          </div>
          <div className="input-group">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
            />
            {errors.password && <p className="error-text">{errors.password}</p>}
          </div>
          {isSignup && (
            <div className="input-group">
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                required
              />
              {errors.confirmPassword && <p className="error-text">{errors.confirmPassword}</p>}
            </div>
          )}
          <button type="submit" className="form-button">
            {isSignup ? "Sign Up" : "Login"}
          </button>
        </form>
        <div className="footer-links">
          {!isSignup && (
            <button
              type="button"
              className="forgot-password-button"
              onClick={openForgotPassword}
            >
              Forgot Password?
            </button>
          )}
          <p onClick={toggleForm} className="toggle-link">
            {isSignup
              ? "Already have an account? Login"
              : "Don't have an account? Sign Up"}
          </p>
        </div>
      </div>

      {isForgotPasswordOpen && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h2>Forgot Password</h2>
            <form onSubmit={handleForgotPasswordSubmit}>
              {!isResetStep && (
                <div className="input-group">
                  <input
                    type="email"
                    name="email"
                    value={forgotPasswordData.email}
                    onChange={handleForgotPasswordChange}
                    placeholder="Email"
                    required
                  />
                  {errors.email && <p className="error-text">{errors.email}</p>}
                </div>
              )}
              {isResetStep && (
                <>
                  <div className="input-group">
                    <input
                      type="password"
                      name="password"
                      value={forgotPasswordData.password}
                      onChange={handleForgotPasswordChange}
                      placeholder="New Password"
                      required
                    />
                    {errors.password && <p className="error-text">{errors.password}</p>}
                  </div>
                  <div className="input-group">
                    <input
                      type="password"
                      name="confirmPassword"
                      value={forgotPasswordData.confirmPassword}
                      onChange={handleForgotPasswordChange}
                      placeholder="Confirm New Password"
                      required
                    />
                    {errors.confirmPassword && <p className="error-text">{errors.confirmPassword}</p>}
                  </div>
                </>
              )}
              <button type="submit" className="form-button">
                {isResetStep ? "Reset Password" : "Next"}
              </button>
            </form>
            <button
              className="close-modal-button"
              onClick={closeForgotPassword}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
