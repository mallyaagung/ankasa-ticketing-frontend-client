import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Navbar, NavbarToggler, Collapse, Nav } from "reactstrap";
import User from "../../src/assets/images/user.png";
import { useDispatch, useSelector } from "react-redux";
import { getDetailUser } from "../redux/actions/user";
import { useNavigate } from "react-router-dom";
import PhotoDefault from "../assets/photo_default.jpg";

function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const [photo, setPhoto] = useState("");
  const navigate = useNavigate();
  const detailUser = useSelector((state) => {
    return state.detailUser;
  });
  const [isOpen, setIsOpen] = React.useState(false);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(getDetailUser(localStorage.getItem("id"), navigate));
    }
  }, [dispatch, navigate]);

  useEffect(() => {
    setPhoto(
      detailUser.isLoading === true ? (
        <h1>Loading</h1>
      ) : detailUser.isError === true ? (
        <h1>Error</h1>
      ) : !detailUser.data.photo ? (
        "profile.jpg"
      ) : (
        detailUser.data.photo
      )
    );
  }, [detailUser.data.photo, detailUser.isError, detailUser.isLoading]);
  return (
    <nav
      className="auth navbar navbar-light bg-light"
      style={{
        display: "block",
        width: "100%",
      }}
    >
      <Navbar color="light" light expand="md">
        <Link to="/" className="navbar-brand">
          <div className="form-title">
            <div className="icon"></div>
            <div className="text">Ankasa</div>
          </div>
        </Link>
        <NavbarToggler
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="row mr-auto" navbar>
            <div className="form-search col-2">
              <div className="icon"></div>
              <input
                type="text"
                className="input"
                placeholder="Where you want to go?"
              />
            </div>
            <div className="form-page col-2">
              <Link className="navbar-brand" to="/search">
                <div className="text">Find Ticket</div>
              </Link>
              {token && (
                <Link className="navbar-brand" to="/mybooking">
                  <div className="text">My Booking</div>
                </Link>
              )}
            </div>
          </Nav>
          <div className="form-user">
            {!token ? (
              <Link to="/login" className="navbar-brand">
                Login
              </Link>
            ) : detailUser.isLoading === true ? (
              <h5>Loading</h5>
            ) : detailUser.isError === true ? (
              <h5>Error</h5>
            ) : (
              <>
                <div className="icon-message"></div>
                <div className="icon-notification"></div>
                <Link to="/profile">
                  <div>
                    {/* <img
                    src={`https://drive.google.com/uc?export=view&id=${detailUser.data.photo}`}
                    className="profile"
                    alt="profile"
                  /> */}

                    {!detailUser.data.photo && (
                      <>
                        <img
                          width={"200px"}
                          height={"200px"}
                          className="profile"
                          src={`https://ui-avatars.com/api/${detailUser.data.name}?`}
                          alt="Photo Profile"
                        />
                      </>
                    )}
                    {detailUser.data.photo && (
                      <>
                        <img
                          width={"200px"}
                          height={"200px"}
                          className="profile"
                          // src={`${process.env.REACT_APP_API_URL}/${detailUser.data.photo}`}
                          src={`https://drive.google.com/uc?export=view&id=${detailUser.data.photo}`}
                          // src={`https://ui-avatars.com/api/?name=Rizki+Nasution`}
                          alt="Photo Profile"
                        />
                      </>
                    )}
                  </div>
                </Link>
              </>
            )}
          </div>
        </Collapse>
      </Navbar>
    </nav>
  );
}

export default App;
