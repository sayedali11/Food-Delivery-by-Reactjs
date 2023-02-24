/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import TitleTab from "../components/titleTab/TitleTab";
import { toast } from "react-toastify";
import Loading from "../components/loading/Loading";

//firebase
import { auth } from "../firebase/config";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  // login with normal email
  const loginUser = (e) => {
    e.preventDefault();
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setIsLoading(false);
        toast.success("Login Successful...");
        navigate("/");
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error(error.message);
      });
  };

  // Login With Google
  const provider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        toast.success("Login Successfully");
        navigate("/");
      })
      .catch((error) => {
        // Handle Errors here.
        toast.error(error.message);
      });
  };

  return (
    <>
      {isLoading && <Loading />}
      <TitleTab title="Login">
        <CommonSection title="Login" />

        <section className="vh-100">
          <Container>
            <div className="row d-flex align-items-center justify-content-center h-100">
              <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                <form onSubmit={loginUser}>
                  <div className="form-outline mb-4">
                    <label className="form-label" for="form1Example13">
                      Email address
                    </label>
                    <input
                      type="email"
                      id="form1Example13"
                      className="form-control form-control-lg"
                      value={email}
                      autoFocus
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label" for="form1Example23">
                      Password
                    </label>
                    <input
                      type="password"
                      id="form1Example23"
                      className="form-control form-control-lg"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn  btn-outline-danger btn-lg"
                  >
                    Sign in
                  </button>

                  <div className="divider d-flex align-items-center my-4">
                    <p className="text-center fw-bold mx-3 mb-0 text-muted">
                      OR
                    </p>
                  </div>

                  <a
                    className="btn  btn-outline-danger btn-lg "
                    // style={{ backgroundColor: "#3b5998" }}
                    href="#!"
                    role="button"
                    onClick={signInWithGoogle}
                  >
                    <FaGoogle color="#fff" /> &nbsp; Continue with Google
                  </a>
                  <div className="me-0 d-flex align-items-center  pb-4 mt-3">
                    <p className="mb-0 me-2">Don't have an account?</p>
                    <Link to="/register" className="btn btn-outline-danger">
                      Register Now
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </Container>
        </section>
      </TitleTab>
    </>
  );
};

export default Login;
