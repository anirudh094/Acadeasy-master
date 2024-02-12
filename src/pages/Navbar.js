import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from 'rsuite';
import MenuIcon from '@rsuite/icons/Menu';
import { Drawer, ButtonToolbar, Button } from 'rsuite';
import { onAuthStateChanged, signOut } from "firebase/auth";
import {auth} from "../pages/firebaseconfig";
import "../App.css";

function NavbarHeader () {
  const MenuUIcon = ({ size }) => <MenuIcon style={{ fontSize: size, marginRight: 10, color: "white" }} />;
  const [size, setSize] = React.useState();
  const [open, setOpen] = React.useState(false);
  const handleOpen = value => {
    setSize(value);
    setOpen(true);
  };

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
    <>

    <Navbar>
    <Navbar.Brand href="#">
        <div className="logo">
            {/* <img src="images/logo_name.png" alt="logo"></img> */}
            <svg width="180.76799926757815" height="59.31557542166448" viewBox="0 0 369.8947368421052 121.37391158906185" class="looka-1j8o68f"><defs id="SvgjsDefs1414"></defs><g id="SvgjsG1415" featurekey="symbolFeature-0" transform="matrix(1.3485990176562428,0,0,1.3485990176562428,-21.3766389441385,-6.742995088281214)" fill="#008080"><path xmlns="http://www.w3.org/2000/svg" d="M80.584,76.594c-3.081-6.411-12.679-6.855-18.345-11.503c-1.116-0.916-1.902-1.703-2.528-2.385c0.007-0.16,0-0.31,0-0.477  c0-0.445-0.071-1.29-0.125-2.052v-0.001c-2.6,3.094-5.944,4.975-9.617,4.975c-3.41,0-6.56-1.622-9.079-4.332  c-0.026,0.462-0.083,1.105-0.083,1.409c0,0.192,0.011,0.389,0.021,0.581c-0.554,0.556-1.22,1.17-2.094,1.887  c-5.666,4.647-15.922,5.952-19.152,12.291c-0.722,1.418-3.16,9.632-3.731,15.588C26.625,94.114,38.777,95,51.73,95  c11.577,0,22.521-0.724,32.418-1.969C83.565,86.885,81.438,78.372,80.584,76.594z"></path><path xmlns="http://www.w3.org/2000/svg" d="M23.686,37.273c-0.465,0.14-0.808,0.541-0.808,1.037c0,0.311,0.116,0.606,0.332,0.808l-0.871,3.047h3.399l-0.891-3.109  c0.187-0.202,0.311-0.456,0.311-0.746c0-0.493-0.343-0.896-0.808-1.037V26.91l9.079,4.747c-0.001,1.944,0,4.033,0,5.928  c0.001,0-0.001,0.052,0,0.062c0.193,2.596,0.834,3.793,1.492,4.415c0,0,0.11-0.3,0.146-0.415c0.003,0-0.004-0.051,0-0.051  c0.037-0.125,0.096-0.286,0.166-0.498c0.272-0.81,0.798-2.231,1.638-3.876c0.096-0.181,0.208-0.404,0.311-0.6  c0.018-0.052,0.044-0.057,0.062-0.083c0.048-0.093,0.095-0.202,0.145-0.29c0.122-0.218,0.26-0.42,0.394-0.644  c1.192-0.439,2.435-0.815,3.731-1.118c0.889,1.347,1.795,2.322,2.694,3.005c0.003,0.002,0.018-0.002,0.021,0  c0.67,0.508,1.33,0.891,1.969,1.14c0.003,0.001,0.017-0.001,0.02,0c0.21,0.083,0.418,0.145,0.622,0.208  c0.049,0,0.097,0.062,0.145,0.062c1.18,0.316,2.25,0.279,3.109,0.291c-0.331-0.321-0.635-0.609-0.912-0.892  c-0.015,0-0.027-0.062-0.041-0.062c-0.277-0.279-0.521-0.54-0.747-0.788c-0.229-0.254-0.441-0.456-0.622-0.663  c-0.179-0.213-0.342-0.389-0.477-0.56c-0.273-0.342-0.461-0.615-0.581-0.789c-0.119-0.17-0.186-0.248-0.186-0.248s0.021,0,0.021,0  c0.019,0,1.155,0.539,2.964,1.347c0.614,0.27,1.304,0.57,2.052,0.892c0.741,0.321,1.525,0.674,2.362,1.016  c0.006,0.001,0.015,0,0.021,0c0.832,0.341,1.719,0.671,2.611,1.015c1.341,0.513,2.748,1.011,4.125,1.472  c0.461,0.155,0.911,0.316,1.368,0.456c0.163,0.088,0.311,0.177,0.455,0.27c0.111,0.073,0.231,0.124,0.332,0.207  c0.021,0,0.021,0.062,0.041,0.062c0.068,0.052,0.146,0.114,0.207,0.166c0.046,0.052,0.104,0.109,0.146,0.145  c0.095,0.093,0.166,0.171,0.249,0.27c0.098,0.114,0.187,0.212,0.27,0.331c0.02,0.057,0.044,0.057,0.062,0.083  c0.198,0.286,0.352,0.598,0.476,0.892c0.005,0,0.018,0,0.021,0.062c0.057,0.135,0.101,0.286,0.146,0.415  c0.047,0.145,0.088,0.274,0.124,0.414c0.145,0.569,0.216,1.099,0.27,1.472c-0.002,0,0.001,0.062,0,0.062  c0.049,0.321,0.087,0.529,0.207,0.54c0.928-3.762,1.418-6.322,1.617-8.416c-0.011-2.149-0.023-4.633-0.042-6.571l17.246-9.058  L50.176,5L16.473,22.743l7.213,3.792V37.273z"></path></g><g id="SvgjsG1416" featurekey="nameFeature-0" transform="matrix(1.0510014986847833,0,0,1.0510014986847833,111.15919709711984,34.246707375166025)" fill="#008080"><path d="M13.72 13.32 l-1.64 -3.68 l4.8 0 l14.36 30.36 l-4.88 0 l-1.96 -4.36 l-9.08 0 q-2.56 0 -4.6 0.48 q-1.8 0.44 -3 1.16 q-1.08 0.64 -1.44 1.32 l-0.76 1.4 l-4.72 0 z M16.92 31.240000000000002 l5.52 0 l-6.52 -12.6 l-6.6 14.28 q0.88 -0.76 2.68 -1.2 q2.04 -0.48 4.92 -0.48 z M67.33 14 l-2.8 3.28 q-1.64 -1.68 -3.92 -2.64 t-4.8 -0.96 q-3.28 0 -5.98 1.48 t-4.22 4.04 q-1.56 2.68 -1.56 5.96 q0 3.12 1.68 5.76 q1.6 2.48 4.3 3.94 t5.82 1.46 q2.88 0 5.36 -1.24 t4.12 -3.44 l2.68 3.64 q-2.28 2.56 -5.46 3.98 t-6.74 1.42 q-4.44 0 -8.16 -2.16 q-3.64 -2.08 -5.72 -5.72 q-2.16 -3.72 -2.16 -8.16 q0 -4.28 2.28 -7.88 q2.16 -3.44 5.86 -5.46 t7.94 -2.02 q3.32 0 6.32 1.28 q2.92 1.2 5.16 3.44 z M88.66 13.32 l-1.64 -3.68 l4.8 0 l14.36 30.36 l-4.88 0 l-1.96 -4.36 l-9.08 0 q-2.56 0 -4.6 0.48 q-1.8 0.44 -3 1.16 q-1.08 0.64 -1.44 1.32 l-0.76 1.4 l-4.72 0 z M91.86 31.240000000000002 l5.52 0 l-6.52 -12.6 l-6.6 14.28 q0.88 -0.76 2.68 -1.2 q2.04 -0.48 4.92 -0.48 z M122.67 14.559999999999999 l0 21.08 l6.76 0 q2.8 0 5.04 -1.44 q2.12 -1.4 3.32 -3.76 t1.2 -5.16 q0 -2.92 -1.14 -5.36 t-3.26 -3.88 q-2.28 -1.48 -5.24 -1.48 l-6.68 0 z M116.03 14.559999999999999 l-1.92 -4.4 l15.2 0 q3.96 0 7.24 2.04 q3.16 1.96 5 5.36 t1.84 7.4 q0 3 -1.18 5.94 t-3.26 5.14 q-2 2.16 -4.28 3.08 q-2.2 0.88 -5.24 0.88 l-11.04 0 l0 -25.44 l-2.36 0 z M159.48 28.04 l0 7.6 l18.4 0 l0 4.36 l-22.76 0 l0 -29.84 l21 0 l0 4.4 l-16.64 0 l0 9.04 q1.24 -0.72 2.76 -0.96 q1.12 -0.2 2.88 -0.2 l6.52 0 l0 4.44 l-6.52 0 q-1.64 0 -2.88 0.2 q-1.52 0.28 -2.76 0.96 z M211.69 40 l-24.28 0 l0 -4.4 l16.8 -21.04 l-15.88 0 l0 -4.4 l21.88 0 l0 4.24 l-17.36 21.24 l18.84 0 l0 4.36 z M232.9 23.28 q2.68 -2.8 4.84 -6.24 t3.44 -6.88 l5 0 q-2.04 4.76 -4.96 9.12 q-2.64 3.96 -6.16 7.8 l0 12.92 l-4.32 0 l0 -12.92 q-3.52 -3.84 -6.16 -7.8 q-2.92 -4.36 -4.96 -9.12 l5 0 q1.28 3.44 3.44 6.88 t4.84 6.24 z"></path></g></svg>
        </div>
    </Navbar.Brand>
    <Nav pullRight className='menu-top-bar'>
      <Nav.Item><Link className="nav-links nav-links-home" to={"/"}>Home</Link></Nav.Item>
      <Nav.Item><Link className="nav-links" to={"/products"}>Internship</Link></Nav.Item>
      <Nav.Item><Link className="nav-links" to={"/aboutus"}>About Us</Link></Nav.Item>
      <Nav.Item><Link className="nav-links" to={"/contactus"}>Contact Us</Link></Nav.Item>
    
      <Nav.Item>
          <div>
            {authUser ? (
              <>
                <Link className="nav-links nav-links-login" onClick={userSignOut}>
                  Log Out
                </Link>
              </>
            ) : (
              <>
                <Link className="nav-links nav-links-login" to={"/signup"}>
                  SignUp
                </Link>
              </>
            )}
          </div>
        
      </Nav.Item>
    </Nav>
    <Nav pullRight className="menu-side-bar">
    <ButtonToolbar>
        <Button onClick={() => handleOpen("300px")}><span><MenuUIcon size="30px" /></span></Button>
      </ButtonToolbar>

      <Drawer size={size} open={open} onClose={() => setOpen(false)}>
        <Drawer.Body>
          <Nav className="nav_side_bar">
            <Nav.Item><Link className="nav-links nav-links-home" to={"/"}>Home</Link></Nav.Item>
            <Nav.Item><Link className="nav-links" to={"/products"}>Internship</Link></Nav.Item>
            <Nav.Item><Link className="nav-links" to={"/aboutus"}>About Us</Link></Nav.Item>
            <Nav.Item><Link className="nav-links" to={"/contactus"}>Contact Us</Link></Nav.Item>
            <Nav.Item>
              <div>
                {authUser ? (
                  <>
                    <Link className="nav-links nav-links-login" onClick={userSignOut}>
                      Log Out
                    </Link>
                  </>
                ) : (
                  <>
                    <Link className="nav-links nav-links-login" to={"/signup"}>
                      SignUp
                    </Link>
                  </>
                )}
              </div>
            </Nav.Item>
          </Nav>
        </Drawer.Body>
      </Drawer>
    </Nav>
  </Navbar>
  </>
  );
}

export default NavbarHeader;