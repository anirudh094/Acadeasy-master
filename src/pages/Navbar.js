import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from 'rsuite';
import MenuIcon from '@rsuite/icons/Menu';
import { Drawer, ButtonToolbar, Button } from 'rsuite';
import { onAuthStateChanged, signOut } from "firebase/auth";
import {auth} from "../pages/firebaseconfig";
import "../App.css";

function NavbarHeader () {
  const MenuUIcon = ({ size }) => <MenuIcon style={{ fontSize: size, marginRight: 10, color: "#008080" }} />;
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
            <svg width="413.2000122070312" height="138.31126270575498" viewBox="0 0 369.66666666666663 123.73925928462026" class="looka-1j8o68f"><defs id="SvgjsDefs2546"></defs><g id="SvgjsG2547" featurekey="QMusi1-0" transform="matrix(1.374865274279916,0,0,1.374865274279916,-27.07659704732913,-6.8729516057745)" fill="#008080"><g xmlns="http://www.w3.org/2000/svg"><g><path d="M76.059,56.865c-1.349-7.308-7.265-13.014-14.68-14.046c-0.029-0.004-0.061-0.005-0.091-0.011    c-0.243-0.031-0.485-0.059-0.73-0.082c-0.001,0.024-0.009,0.049-0.009,0.073c-0.004,0.072-0.016,0.142-0.024,0.215    c-0.046,0.407-0.167,0.802-0.356,1.183c-1.264,3.178-5.313,9.163-7.757,12.645h23.191C75.757,56.842,75.908,56.851,76.059,56.865z    "></path><path d="M51.819,49.781c0.71-0.364,1.322-0.968,1.714-1.668c0.282-0.503,0.455-1.053,0.455-1.614c0,0-1.816,0.805-3.67,0.805    c-0.105,0-0.211-0.001-0.317-0.007c-0.105,0.006-0.211,0.007-0.317,0.007c-1.854,0-3.669-0.805-3.669-0.805    c0,0.561,0.172,1.111,0.455,1.614c0.392,0.7,1.003,1.303,1.714,1.668l-0.493,7.061h4.622L51.819,49.781z"></path><path d="M47.59,56.842c-2.446-3.481-6.495-9.466-7.757-12.645c-0.19-0.381-0.312-0.776-0.357-1.183    c-0.009-0.073-0.02-0.143-0.024-0.215c-0.001-0.024-0.009-0.049-0.009-0.073c-0.246,0.023-0.489,0.051-0.732,0.082    c-0.03,0.006-0.062,0.007-0.09,0.011c-7.414,1.032-13.33,6.738-14.679,14.046c0.15-0.015,0.302-0.023,0.455-0.023H47.59z"></path><path d="M31.801,14.098l1.228,0.532l-0.103,0.825c-0.471,0.08-0.83,0.489-0.83,0.982c0,0.444,0.289,0.82,0.691,0.948    l-0.746,10.442c-0.03,0.435,0.057,1.131,0.195,1.545l0.604,1.814c0.139,0.416,0.363,0.416,0.501,0l0.606-1.814    c0.139-0.415,0.226-1.11,0.194-1.545l-0.745-10.442c0.399-0.129,0.69-0.504,0.69-0.948c0-0.494-0.358-0.902-0.83-0.982    l-0.096-0.767l2.834,1.228l1.389,0.601v5.06c-0.158,0.573-0.293,1.155-0.38,1.756c-0.1,0.684-0.15,1.387-0.15,2.099    c0,0.29,0.013,0.578,0.028,0.863c0.022,0.418,0.063,0.83,0.122,1.236c0.01,0.125,0.02,0.248,0.032,0.372    C37.867,37.279,43.354,44.525,50,44.525S62.135,37.279,62.963,27.9c0.012-0.124,0.023-0.247,0.032-0.372    c0.059-0.407,0.098-0.818,0.122-1.236c0.017-0.285,0.027-0.573,0.027-0.863c0-0.711-0.05-1.415-0.149-2.099    c-0.087-0.6-0.223-1.182-0.38-1.754v-5.063l1.389-0.6l4.195-1.817c1.098-0.475,1.098-1.251,0-1.727L51.995,5.356    c-1.097-0.476-2.891-0.476-3.989,0l-16.205,7.015C30.705,12.847,30.705,13.623,31.801,14.098z M40.259,23.118l1.715,0.742    l6.032,2.612c1.098,0.476,2.893,0.476,3.989,0l6.033-2.612l1.714-0.743c0.343,2.563-0.191,5.742-0.191,5.742    c0.685-0.478,1.312-0.725,1.823-0.853C60.621,36.198,55.816,42.514,50,42.514c-5.815,0-10.62-6.316-11.375-14.508    c0.511,0.128,1.14,0.375,1.824,0.853C40.45,28.859,39.916,25.68,40.259,23.118z"></path></g><path d="M73.212,93.065H26.787c-0.534,0-0.967,0.434-0.967,0.967c0,0.534,0.433,0.968,0.967,0.968h46.425   c0.534,0,0.968-0.434,0.968-0.968C74.18,93.499,73.746,93.065,73.212,93.065z"></path><path d="M76.059,58.155c-0.15-0.015-0.302-0.023-0.456-0.023H52.411h-0.1h-4.622H47.59H24.397c-0.153,0-0.305,0.009-0.455,0.023   c-2.38,0.229-4.248,2.239-4.248,4.679v0.11l0.019,0.109l4.25,24.649c0.063,2.538,2.148,4.584,4.702,4.584h42.671   c2.553,0,4.638-2.046,4.701-4.584l4.249-24.649l0.02-0.109v-0.11C80.306,60.396,78.438,58.386,76.059,58.155z M71.336,90.997   H28.665c-1.885,0-3.414-1.528-3.414-3.413l-4.268-24.75c0-1.885,1.529-3.413,3.414-3.413h51.205c1.885,0,3.413,1.528,3.413,3.413   l-4.267,24.75C74.749,89.469,73.221,90.997,71.336,90.997z"></path><circle cx="50" cy="74.783" r="2.023"></circle></g></g><g id="SvgjsG2548" featurekey="UyNsn2-0" transform="matrix(2.716099672415755,0,0,2.716099672415755,102.07652440179747,27.06144921143885)" fill="#008080"><path d="M4.1 8.2 l-1.42 0 l1.3 -2.48 l4.4 0 l4.48 14.28 l-3.44 0 l-0.8 -2.86 l-0.78 0.06 l-2.78 0 l-0.68 -0.06 l-0.82 2.86 l-3.22 0 z M7.84 14.42 l-1.32 -4.76 l-1.4 4.76 l2.72 0 z M23.560000000000002 19.66 c-0.56 0.22666 -1.0966 0.37664 -1.61 0.44998 s-1.0833 0.11 -1.71 0.11 c-1.1333 0 -2.1266 -0.18 -2.98 -0.54 s-1.5633 -0.86334 -2.13 -1.51 s-0.99332 -1.4167 -1.28 -2.31 s-0.43 -1.8733 -0.43 -2.94 s0.14666 -2.0534 0.44 -2.96 s0.72334 -1.6867 1.29 -2.34 s1.27 -1.1633 2.11 -1.53 s1.8 -0.55 2.88 -0.55 c0.62666 0 1.1933 0.06 1.7 0.18 s1 0.28666 1.48 0.5 l-0.82 2.66 c-0.26666 -0.12 -0.56332 -0.22666 -0.88998 -0.32 s-0.71666 -0.14 -1.17 -0.14 c-2.3734 0 -3.56 1.5 -3.56 4.5 c0 1.5067 0.30666 2.62 0.92 3.34 s1.56 1.08 2.84 1.08 c0.42666 0 0.80332 -0.03 1.13 -0.09 s0.65 -0.15 0.97 -0.27 z M28.32 8.2 l-1.42 0 l1.3 -2.48 l4.4 0 l4.48 14.28 l-3.44 0 l-0.8 -2.86 l-0.78 0.06 l-2.78 0 l-0.68 -0.06 l-0.82 2.86 l-3.22 0 z M32.06 14.42 l-1.32 -4.76 l-1.4 4.76 l2.72 0 z M38.76 5.82 c0.62666 -0.08 1.2534 -0.14334 1.88 -0.19 s1.3 -0.07 2.02 -0.07 c2.5066 0 4.4134 0.61 5.72 1.83 s1.96 3.09 1.96 5.61 c0 2.5066 -0.66666 4.3366 -2 5.49 s-3.3066 1.73 -5.92 1.73 c-0.64 0 -1.2533 -0.02 -1.84 -0.06 s-1.1933 -0.1 -1.82 -0.18 l0 -14.16 z M42.04 17.3 c0.65334 0.06666 1.2734 0.06664 1.86 -0.000019531 s1.1033 -0.25332 1.55 -0.55998 s0.8 -0.76332 1.06 -1.37 s0.39 -1.4167 0.39 -2.43 c0 -0.89334 -0.10334 -1.6267 -0.31 -2.2 s-0.48666 -1.03 -0.84 -1.37 s-0.76 -0.57666 -1.22 -0.71 s-0.94334 -0.2 -1.45 -0.2 l-0.49 0 l-0.55 0.04 l0 8.8 z M52.76 5.699999999999999 l8.42 0 c-0.13334 0.50666 -0.26668 0.98666 -0.40002 1.44 s-0.26668 0.92 -0.40002 1.4 l-4.4 0 c0 0.05334 0.0066602 0.13 0.02 0.23 s0.02 0.17666 0.02 0.23 l0 2.1 l4.04 0 l0 2.86 l-4.04 0 l0 2.74 l-0.04 0.46 l5.28 0 l0 2.84 l-8.5 0 l0 -14.3 z M66.14 8.2 l-1.42 0 l1.3 -2.48 l4.4 0 l4.48 14.28 l-3.44 0 l-0.8 -2.86 l-0.78 0.06 l-2.78 0 l-0.68 -0.06 l-0.82 2.86 l-3.22 0 z M69.88 14.42 l-1.32 -4.76 l-1.4 4.76 l2.72 0 z M79.16 13.620000000000001 c-0.42666 -0.17334 -0.82332 -0.36666 -1.19 -0.58 s-0.68332 -0.47 -0.94998 -0.77 s-0.47332 -0.65334 -0.61998 -1.06 s-0.22 -0.89 -0.22 -1.45 c0 -0.69334 0.12 -1.3033 0.36 -1.83 s0.57666 -0.97 1.01 -1.33 s0.95668 -0.63334 1.57 -0.82 s1.2933 -0.28 2.04 -0.28 c0.61334 0 1.24 0.06334 1.88 0.19 s1.4067 0.34332 2.3 0.64998 l-1.36 2.44 c-0.86666 -0.41334 -1.78 -0.62 -2.74 -0.62 c-0.18666 0 -0.38 0.02 -0.58 0.06 s-0.38 0.11 -0.54 0.21 s-0.29334 0.23666 -0.4 0.41 s-0.16 0.4 -0.16 0.68 c0 0.22666 0.04334 0.41332 0.13 0.55998 s0.19666 0.27332 0.33 0.37998 s0.28668 0.19666 0.46002 0.27 s0.34668 0.14334 0.52002 0.21 l1.18 0.46 c0.50666 0.2 0.97 0.41 1.39 0.63 s0.77666 0.48666 1.07 0.8 s0.52 0.69668 0.68 1.15 s0.24 1.02 0.24 1.7 s-0.12334 1.3 -0.37 1.86 s-0.60666 1.0367 -1.08 1.43 s-1.0567 0.7 -1.75 0.92 s-1.4867 0.33 -2.38 0.33 c-0.41334 0 -0.79334 -0.01334 -1.14 -0.04 s-0.68332 -0.07332 -1.01 -0.13998 s-0.65332 -0.14666 -0.97998 -0.24 s-0.67666 -0.21334 -1.05 -0.36 l0.68 -2.8 c0.54666 0.14666 1.0833 0.27666 1.61 0.39 s1.0633 0.17 1.61 0.17 c0.73334 0 1.2933 -0.09666 1.68 -0.29 s0.61332 -0.56334 0.67998 -1.11 c0.02666 -0.28 -0.0066796 -0.51334 -0.10002 -0.7 s-0.22668 -0.34332 -0.40002 -0.46998 s-0.36668 -0.23 -0.58002 -0.31 l-0.64 -0.24 z M90.76 14.84 l-0.19 -0.38 l-0.51 -1.03 l-0.72 -1.47 l-0.82 -1.68 c-0.65334 -1.3333 -1.4 -2.86 -2.24 -4.58 l3.6 0 l2.58 5.88 c0.48 -1.0933 0.90666 -2.0734 1.28 -2.94 c0.16 -0.36 0.31666 -0.71666 0.47 -1.07 s0.29 -0.67 0.41 -0.95 s0.21666 -0.50334 0.29 -0.67 l0.11 -0.25 l3.5 0 l-4.48 9.16 l0 5.16 l-3.28 0 l0 -5.18 z"></path></g></svg>
        </div>
    </Navbar.Brand>
    <Nav pullRight className='menu-top-bar'>
      <Nav.Item><Link className="nav-links nav-links-home" to={"/"}>Home</Link></Nav.Item>
      <Nav.Item><Link className="nav-links" to={"/products"}>Training</Link></Nav.Item>
      <Nav.Item><Link className="nav-links" to={"/aboutus"}>About Us</Link></Nav.Item>
      <Nav.Item><Link className="nav-links" to={"/contactus"}>Contact Us</Link></Nav.Item>
    
      <Nav.Item>
          <div>
            {authUser ? (
              <>
                <Link className="nav-links nav-links-login" to={"/dashboard"}>
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
            <Nav.Item><Link className="nav-links" to={"/products"}>Training</Link></Nav.Item>
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