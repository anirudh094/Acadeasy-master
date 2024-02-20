import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./firebaseconfig";
import { useNavigate } from "react-router-dom";
import GoogleLogin from "../pages/LoginPage/loginwithgoogle";
import "../css/signUp.css";

const SignUp = () => {
  const navigate = useNavigate();

  const [emailSignUp, setEmailSignUp] = useState("");
  const [passwordSignUp, setPasswordSignUp] = useState("");

  const [emailSignIn, setEmailSignIn] = useState("");
  const [passwordSignIn, setPasswordSignIn] = useState("");

  const [errorMsg, setErrorMsg] = useState("");

  const [activeTab, setActiveTab] = useState("signIn");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, emailSignUp, passwordSignUp)
      .then((userCredential) => {
        console.log(userCredential);
        localStorage.setItem("email", userCredential.user.email);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setErrorMsg("INVALID");
      });
  };

  const signIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, emailSignIn, passwordSignIn)
      .then((userCredential) => {
        console.log(userCredential);
        localStorage.setItem("email", userCredential.user.email);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setErrorMsg("INVALID");
      });
  };

  return (
    <>
      <div className="login-wrap">
        <div className="login-html">
          <input
            id="tab-1"
            type="radio"
            name="tab"
            className="sign-in"
            checked={activeTab === "signIn"}
            onChange={() => handleTabChange("signIn")}
          />
          <label htmlFor="tab-1" className="tab">
            Sign In
          </label>
          <input
            id="tab-2"
            type="radio"
            name="tab"
            className="sign-up"
            checked={activeTab === "signUp"}
            onChange={() => handleTabChange("signUp")}
          />
          <label htmlFor="tab-2" className="tab">
            Sign Up
          </label>
          <div className="login-form">
            <form
              className="sign-in-htm"
              onSubmit={signIn}
              style={{ display: activeTab === "signIn" ? "block" : "none" }}
            >
              <div className="group">
                <label htmlFor="emailSignIn" className="label">
                  Email
                </label>
                <input
                  id="emailSignIn"
                  type="email"
                  className="input"
                  value={emailSignIn}
                  onChange={(e) => setEmailSignIn(e.target.value)}
                />
              </div>
              <div className="group">
                <label htmlFor="passSignIn" className="label">
                  Password
                </label>
                <input
                  id="passSignIn"
                  type="password"
                  className="input"
                  data-type="password"
                  value={passwordSignIn}
                  onChange={(e) => setPasswordSignIn(e.target.value)}
                />
              </div>
              <div className="group">
                <input type="submit" className="button" value="Sign In" />
              </div>
              <p className="login-error-message">
                {errorMsg}
              </p>
              <div className="hr"></div>
              <div className="group">
                <div className="button google-button">
                  <GoogleLogin />
                </div>
              </div>
            </form>
            <form
              className="sign-up-htm"
              onSubmit={signUp}
              style={{ display: activeTab === "signUp" ? "block" : "none" }}
            >
              <div className="group">
                <label htmlFor="userSignUp" className="label">
                  Username
                </label>
                <input id="userSignUp" type="text" className="input" />
              </div>
              <div className="group">
                <label htmlFor="emailSignUp" className="label">
                  Email Address
                </label>
                <input
                  id="emailSignUp"
                  type="text"
                  className="input"
                  value={emailSignUp}
                  onChange={(e) => setEmailSignUp(e.target.value)}
                />
              </div>
              <div className="group">
                <label htmlFor="passSignUp" className="label">
                  Password
                </label>
                <input
                  id="passSignUp"
                  type="password"
                  className="input"
                  data-type="password"
                  value={passwordSignUp}
                  onChange={(e) => setPasswordSignUp(e.target.value)}
                />
              </div>
              <div className="group">
                <input type="submit" className="button" value="Sign Up" />
              </div>
              <p className="login-error-message">
                {errorMsg}
              </p>
              <div className="hr"></div>
              <div className="group">
                <div className="button google-button">
                  <GoogleLogin />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
