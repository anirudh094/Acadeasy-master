import React, { useState } from "react";
import { auth, provider } from "../firebaseconfig";
import { signInWithPopup } from "firebase/auth";
import "../LoginPage/loginpage.css";
import { useNavigate } from "react-router-dom";

function SignINwithGoogle() {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
      navigate("/");
    });
  };

  return (
    <>
      {value ? (
        <p></p>
      ) : (
        <button onClick={handleClick} className="googlelogin">
          <img src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg" alt="google-logo"></img>
          Sign in with Google
        </button>
      )}
    </>
  );
}

export default SignINwithGoogle;
