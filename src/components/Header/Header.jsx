import React, { useRef, useEffect, useState } from "react";
import { Container } from "reactstrap";
import logo from "../../assets/images/res-logo.png";
import { toast } from "react-toastify";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { cartUiActions } from "../../store/shopping-cart/cartUiSlice";

// firebase
import { auth } from "../../firebase/config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import {
  SET_ACTIVE_USER,
  REMOVE_ACTIVE_USER,
} from "../../store/authSlice/authSlice";
import ShowOnLogin, { ShowOnLogout } from "../hiddenLink/HiddenLink";

import "../../styles/header.css";

// nav links
const nav__links = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "Foods",
    path: "/foods",
  },
];

const Header = () => {
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const [displayName, setdisplayName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };

  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  // fixed header in website
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("header__shrink");
      } else {
        headerRef.current.classList.remove("header__shrink");
      }
    });

    return () => window.removeEventListener("scroll");
  }, []);

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        toast.success("Logout successfully.");
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        toast.error(error.message);
      });
  };

  // Monitor currently sign in user
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        if (user.displayName === null) {
          const userName = user.email.substring(0, user.email.indexOf("@"));

          const userNameWord =
            userName.charAt(0).toUpperCase() + userName.slice(1);
          setdisplayName(userNameWord);
        } else {
          setdisplayName(user.displayName);
        }

        dispatch(
          SET_ACTIVE_USER({
            email: user.email,
            userName: user.displayName ? user.displayName : displayName,
            userID: user.uid,
          })
        );
      } else {
        // User is signed out
        setdisplayName("");
        dispatch(REMOVE_ACTIVE_USER());
      }
    });
  }, [dispatch, displayName]);

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className=" d-flex align-items-center justify-content-between ">
          <div className="logo ">
            <img src={logo} alt="logo" />
            <h5 className="hide">Foods Delivery</h5>
          </div>
          {/*=== menu === */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div className="menu d-flex align-item-center gap-5 ">
              {nav__links.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive ? "active__menu" : ""
                  }
                >
                  {item.display}
                </NavLink>
              ))}
              <ShowOnLogin>
                <NavLink
                  to="/cart"
                  className={(navClass) =>
                    navClass.isActive ? "active__menu" : ""
                  }
                >
                  Cart
                </NavLink>
              </ShowOnLogin>
            </div>
          </div>
          <div className="nav__right d-flex align-item-center gap-4 ">
            <span className="cart__icon" onClick={toggleCart}>
              <i class="ri-shopping-cart-2-line"></i>
              <span className="cart__badge">{totalQuantity}</span>
            </span>
            <span className="user d-flex ">
              <ShowOnLogout>
                <Link to="/login " className="d-flex login__hover ">
                  <i class="ri-login-box-line login__hover"></i> Sign In
                </Link>
              </ShowOnLogout>
              <span className="ms-3 d-flex ">
                <ShowOnLogin>
                  <i class="ri-user-fill d-f"></i>
                  <p>{displayName}</p>
                </ShowOnLogin>
              </span>
            </span>
            <span className="user" onClick={logoutUser}>
              <ShowOnLogin>
                <Link to="/" className="d-flex login__hover">
                  <i class="ri-logout-box-line login__hover"></i> Sign Out
                </Link>
              </ShowOnLogin>
            </span>
            <span className="mobile__menu" onClick={toggleMenu}>
              <i class="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
