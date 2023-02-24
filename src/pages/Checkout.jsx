import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import TitleTab from "../components/titleTab/TitleTab";
import CommonSection from "../components/UI/common-section/CommonSection";
import { cartActions } from "../store/shopping-cart/cartSlice";

import "../styles/checkout.css";

const Checkout = () => {
  const [enterName, setEnterName] = useState("");
  const [enterEmail, setEnterEmail] = useState("");
  const [enterNumber, setEnterNumber] = useState("");
  const [enterCountry, setEnterCountry] = useState("");
  const [enterCity, setEnterCity] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  // return cart to default value
  const handelCheckout = () => {
    dispatch(cartActions.checkoutCart());
    alert("Purchased successfully ..");
    navigate("/");
  };

  const shippingInfo = [];
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const shippingCost = 30;

  const totalAmount = cartTotalAmount + Number(shippingCost);

  const submitHandler = (e) => {
    e.preventDefault();
    const userShippingAddress = {
      name: enterName,
      email: enterEmail,
      phone: enterNumber,
      country: enterCountry,
      city: enterCity,
      postalCode: postalCode,
    };

    shippingInfo.push(userShippingAddress);
  };

  return (
    <TitleTab title="Checkout">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col lg="8" md="6">
              <h6 className="mb-4">Shipping Address</h6>

              <form onSubmit={submitHandler}>
                <div className="form-outline mb-4">
                  <label className="form-label" for="form1Example13">
                    User Name
                  </label>
                  <input
                    type="text"
                    id="form1Example13"
                    className="form-control form-control-lg"
                    required
                    onChange={(e) => setEnterName(e.target.value)}
                  />
                </div>
                <div className="form-outline mb-4">
                  <label className="form-label" for="form1Example13">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="form1Example13"
                    className="form-control form-control-lg"
                    required
                    onChange={(e) => setEnterEmail(e.target.value)}
                  />
                </div>
                <div className="form-outline mb-4">
                  <label className="form-label" for="form1Example13">
                    Phone Number
                  </label>
                  <input
                    type="number"
                    id="form1Example13"
                    className="form-control form-control-lg"
                    required
                    onChange={(e) => setEnterNumber(e.target.value)}
                  />
                </div>
                <div className="form-outline mb-4">
                  <label className="form-label" for="form1Example13">
                    Country Name
                  </label>
                  <input
                    type="text"
                    id="form1Example13"
                    className="form-control form-control-lg"
                    required
                    onChange={(e) => setEnterCountry(e.target.value)}
                  />
                </div>
                <div className="form-outline mb-4">
                  <label className="form-label" for="form1Example13">
                    City Name
                  </label>
                  <input
                    type="text"
                    id="form1Example13"
                    className="form-control form-control-lg"
                    required
                    onChange={(e) => setEnterCity(e.target.value)}
                  />
                </div>

                <div className="form-outline mb-4">
                  <label className="form-label" for="form1Example23">
                    Postal Code
                  </label>
                  <input
                    type="number"
                    id="form1Example23"
                    className="form-control form-control-lg"
                    required
                    onChange={(e) => setPostalCode(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  className="btn  btn-outline-danger btn-lg"
                  onClick={handelCheckout}
                >
                  Payment
                </button>
              </form>
            </Col>

            <Col lg="4" md="6">
              <div className="checkout__bill">
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Subtotal: <span>${cartTotalAmount}</span>
                </h6>
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Shipping: <span>${shippingCost}</span>
                </h6>
                <div className="checkout__total">
                  <h5 className="d-flex align-items-center justify-content-between">
                    Total: <span>${totalAmount}</span>
                  </h5>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </TitleTab>
  );
};

export default Checkout;
