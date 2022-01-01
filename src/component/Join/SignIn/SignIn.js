import React, { lazy, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { logoUrl } from "constant/const_url";
import { getData } from "api/Api";
import { getUsers } from "constant/apiUrl";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import { Tabs } from "antd";
import { dummyProfile } from "constant/const_url";
import { googleIcon } from "constant/antIcons";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import GoogleLogin from "react-google-login";
import authActionCreators from "Redux/Action Creators/authActionCreators";
import alertActionCreator from "Redux/Action Creators/alertActionCreator";
import "../SignUp.css";

const { TabPane } = Tabs;
const Header = lazy(() => import("component/Common/Header/Header"));
const Footer = lazy(() => import("component/Common/Footer/Footer"));

export default function SignIn() {
  const dispatch = useDispatch();
  const [loggedIn, setLoggedIn] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const auth = useSelector((state) => state.authReducer);

  useEffect(() => {
    if (auth.user && auth.user.isLoggedIn) {
      setLoggedIn(true);
    }
  }, [auth]);

  const login = async (googleData) => {
    if (cookies.user) {
      removeCookie("user");
    }

    let data = {
      name: googleData.profileObj.name,
      email: googleData.profileObj.email,
    };

    const response = await getData(getUsers);
    if (response.status === "success") {
      if (response.res.data.length) {
        response.res.data.forEach((res) => {
          if (res.email === data.email) {
            data.id = res._id;
            data.role = res.role;
            data.isLoggedIn = true;
            data.image = dummyProfile;

            removeCookie("user");
            setCookie("user", data);
            authActionCreators.logIn(dispatch, data);
            alertActionCreator.setMessage(dispatch, "Sign in succesfull");
          }
        });
      } else {
        alertActionCreator.setError(dispatch, "Login Failed");
      }
    } else {
      alertActionCreator.setError(dispatch, "User Not Found");
    }
  };

  const dummyLogin = (role) => {
    if (cookies.user) {
      removeCookie("user");
    }

    let user = getUser(role);

    removeCookie("user");
    setCookie("user", user);
    authActionCreators.logIn(dispatch, user);
    alertActionCreator.setMessage(dispatch, "Sign in succesfull");
  };

  return (
    <>
      {loggedIn && auth.user ? (
        <Redirect to={`${auth.user.role}/dashboard`} />
      ) : (
        <></>
      )}
      <Header />
      <div className="Join">
        <section id="signUpBox">
          <section id="welcome">
            <h3>Welcome to Mockprep</h3>
            <p>Login with your account, to continue your learning journey</p>
          </section>
          <section id="signUpForm">
            <img src={logoUrl} id="signLogo" alt="profile" />
            <section id="signForm">
              <h4>Sign In</h4>
              <Tabs defaultActiveKey="1">
                <TabPane tab={<span>SSO Login</span>} key="1">
                  <p style={{ color: "green" }}>
                    Continue to login as Interviewer
                  </p>
                  <GoogleLogin
                    clientId={
                      "213326872377-nnd677fts32vl9asl3e3c8hb3iltt393.apps.googleusercontent.com"
                    }
                    render={(renderProps) => (
                      <button
                        onClick={renderProps.onClick}
                        className="google-login-button"
                        disabled={renderProps.disabled}
                      >
                        {googleIcon}Sign In with Google
                      </button>
                    )}
                    onSuccess={(googleData) => login(googleData)}
                    onFailure={() =>
                      alertActionCreator.setError("Error Signing in.")
                    }
                    cookiePolicy={"single_host_origin"}
                  />
                </TabPane>
                <TabPane tab={<span>Dummy Login</span>} key="2">
                  <button
                    onClick={() => {
                      dummyLogin("student");
                    }}
                    className="dummyBtn mt-3"
                  >
                    Sign In as Student
                  </button>
                  <button
                    onClick={() => {
                      dummyLogin("interviewer");
                    }}
                    className="dummyBtn mt-3"
                  >
                    Sign In as Interviewer
                  </button>
                  <button
                    onClick={() => {
                      dummyLogin("admin");
                    }}
                    className="dummyBtn mt-3"
                  >
                    Sign In as Admin
                  </button>
                </TabPane>
              </Tabs>
              <p id="signInLink">
                Already have an account ? <Link to="/join">Sign up</Link>
              </p>
            </section>
          </section>
        </section>
      </div>
      <Footer />
    </>
  );
}

function getUser(role) {
  let user;
  if (role === "interviewer") {
    user = {
      name: "millie taylor",
      email: "millie.taylor@gmail.com",
      role: role,
      id: "61cf719291157f85e37e16ee",
      image: "https://randomuser.me/api/portraits/women/75.jpg",
      isLoggedIn: true,
    };
  } else if (role === "student") {
    user = {
      name: "Baris BayIndir",
      email: "baris.bayindir@gmail.com",
      role: role,
      id: "61cf7fea92c7260d50dee2d9",
      image: "https://randomuser.me/api/portraits/men/78.jpg",
      isLoggedIn: true,
    };
  } else if (role === "admin") {
    user = {
      name: "Mohammed Saif",
      email: "saifmohammed888@gmail.com",
      role: role,
      image:
        "https://lh3.googleusercontent.com/a-/AOh14GhmpreGO6PiwTPnHhF6w-UDq8_ihcgxpAlqV5kBvQ=s96-c",
      id: "61c35cefb7809a9931002a2c",
      isLoggedIn: true,
    };
  }

  return user;
}
