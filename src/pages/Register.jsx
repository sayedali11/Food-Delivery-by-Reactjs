import React, { useState } from "react";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import TitleTab from "../components/titleTab/TitleTab";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import Loading from "../components/loading/Loading";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  // create new a user
  const registerUser = (e) => {
    e.preventDefault();

    if (password !== cPassword) {
      toast.error("Password do not match.");
    } else {
      setIsLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // eslint-disable-next-line no-unused-vars
          const user = userCredential.user;
          setIsLoading(false);
          toast.success("Registration Successful...");
          navigate("/login");
        })
        .catch((error) => {
          toast.error(error.message);
          setIsLoading(false);
        });
    }
  };

  return (
    <>
      <ToastContainer />
      {isLoading && <Loading />}
      <TitleTab title="Signup">
        <CommonSection title="Signup" />
        <section>
          <Container>
            <div className="row d-flex align-items-center justify-content-center h-100">
              <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                <form onSubmit={registerUser}>
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
                  <div className="form-outline mb-4">
                    <label className="form-label" for="form1Example23">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      id="form1Example23"
                      className="form-control form-control-lg"
                      value={cPassword}
                      onChange={(e) => setCPassword(e.target.value)}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn  btn-outline-danger btn-lg"
                  >
                    Sign Up
                  </button>

                  <div className="me-0 d-flex align-items-center  pb-4 mt-3">
                    <p className="mb-0 me-2"> Have already an account? </p>
                    <Link to="/login" className="btn btn-outline-danger">
                      Login
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

export default Register;
