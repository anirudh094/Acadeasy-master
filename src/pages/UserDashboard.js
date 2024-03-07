import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../pages/firebaseconfig";
import "../css/dashboard.css";

function UserDashboard() {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);
  const userSignOut = () => {
    localStorage.clear();
    window.location.reload();
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      {authUser ? (
        <>
          <div className="dashboard-body">
            <Link className="" onClick={userSignOut}>
              Log Out
            </Link>
            <div className="dashboard-right-sidebar">
              <h6>Welcome Back !! </h6>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>

            <div className="dashboard-header">
              <h6>Welcome Back !! </h6>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default UserDashboard;
