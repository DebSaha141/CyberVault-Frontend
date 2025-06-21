import React, { useState } from "react";
import styles from "../styles/SignUp.module.scss";
import { useForm } from "react-hook-form";
import robotImage from "../../assets/images/robotNew.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import api from "../../services/api";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");
  const navigate = useNavigate();

  const [passwordMatchError, setPasswordMatchError] = useState("");
  const [serverError, setServerError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const validateConfirmPassword = (value) => {
    if (value !== password) {
      setPasswordMatchError("Passwords do not match");
      return false;
    } else {
      setPasswordMatchError("");
      return true;
    }
  };

  const onSubmit = async ({ confirmPassword, ...rest }) => {
    const email = rest.email;
    const roll = email.split("@")[0];

    const userPayload = {
      ...rest,
      roll,
      userId: `${Date.now()}_${roll}`,
      branch: "",
      batch: "",
      year: "",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      socialLinks: {},
      optional: {},
    };

    setServerError("User registered successfully!");
    setSuccessMessage("");

    try {
      const res = await api.post("/api/auth/register", userPayload);

      // Optional: store token/user if returned by API
      if (res.data.token) {
        localStorage.setItem("userData", JSON.stringify(res.data.data));
        localStorage.setItem("token", res.data.token);
      }

      setSuccessMessage("User registered successfully! Redirecting to login...");
      setTimeout(() => navigate("/"), 1500);
    } catch (error) {
      setServerError(
        error.response?.data?.message || "Registration failed. Please try again."
      );
    }
  };

  const handleLogin = () => navigate("/");

  return (
    <div className={styles.signupContainer}>
      <div className={styles.signinImage}>
        <img src={robotImage} alt="CyberVault Robot" width={550} />
      </div>

      <div className={styles.signinFormContainer}>
        <h2 className={styles.cyberTitle}>GET STARTED</h2>

        <form onSubmit={handleSubmit(onSubmit)} className={styles.cyberForm}>
          {/* Full Name */}
          <div className={styles.cyberFormGroup}>
            <label htmlFor="nameField" className="cyber-label">FULL NAME</label>
            <input
              type="text"
              id="nameField"
              className={styles.cyberInput}
              placeholder="Enter your full name"
              {...register("name", {
                required: "Name is required",
                minLength: { value: 3, message: "Minimum 3 characters" },
              })}
            />
            {errors.name && <p className={styles.cyberError}>{errors.name.message}</p>}
          </div>

          {/* Email */}
          <div className={styles.cyberFormGroup}>
            <label htmlFor="emailField" className="cyber-label">EMAIL</label>
            <input
              type="email"
              id="emailField"
              className={styles.cyberInput}
              placeholder="Enter your KIIT email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@(kiit\.ac\.in|gmail\.com)$/,
                  message: "Only KIIT or Gmail emails allowed",
                },
              })}
            />
            {errors.email && <p className={styles.cyberError}>{errors.email.message}</p>}
          </div>

          {/* Phone Number */}
          <div className={styles.cyberFormGroup}>
            <label htmlFor="phoneField" className="cyber-label">PHONE NUMBER</label>
            <input
              type="tel"
              id="phoneField"
              className={styles.cyberInput}
              placeholder="Enter your phone number"
              {...register("phoneNumber", {
                required: "Phone number is required",
                pattern: {
                  value: /^[6-9]\d{9}$/,
                  message: "Enter a valid 10-digit phone number",
                },
              })}
            />
            {errors.phoneNumber && (
              <p className={styles.cyberError}>{errors.phoneNumber.message}</p>
            )}
          </div>

          {/* Password */}
          <div className={styles.cyberFormGroup}>
            <label htmlFor="passwordField" className="cyber-label">CREATE PASSWORD</label>
            <input
              type="password"
              id="passwordField"
              className={styles.cyberInput}
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Minimum 6 characters" },
                maxLength: { value: 15, message: "Max 15 characters" },
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,15}$/,
                  message: "Include letter, number & special character",
                },
              })}
            />
            {errors.password && (
              <p className={styles.cyberError}>{errors.password.message}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div className={styles.cyberFormGroup}>
            <label htmlFor="confirmPasswordField" className="cyber-label">CONFIRM PASSWORD</label>
            <input
              type="password"
              id="confirmPasswordField"
              className={styles.cyberInput}
              placeholder="Confirm your password"
              {...register("confirmPassword", {
                required: "Confirm your password",
                validate: validateConfirmPassword,
              })}
            />
            {passwordMatchError && <p className={styles.cyberError}>{passwordMatchError}</p>}
          </div>

          {/* Feedback Messages */}
          {serverError && <p className={styles.cyberError}>{serverError}</p>}
          {successMessage && <p className={styles.cyberSuccess}>{successMessage}</p>}

          {/* Buttons */}
          <div className={styles.buttonContainer}>
            <button type="submit" className={styles.cyberSubmitButton}>SIGN UP</button>
            <button type="button" className={styles.cyberSignupButton} onClick={handleLogin}>LOGIN</button>
          </div>
        </form>

        <p className={styles.registerText}>Already registered?</p>
        <Link className={styles.registerLink} to="/signup">Join us!</Link>
      </div>
    </div>
  );
};

export default SignUp;
