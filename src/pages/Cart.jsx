import React from "react";
import CommonSection from "../components/UI/common-section/CommonSection";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import { cartActions } from "../store/shopping-cart/cartSlice";
import { Link } from "react-router-dom";
import TitleTab from "../components/titleTab/TitleTab";

import "../styles/cart-page.css";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <TitleTab title="Cart">
      <CommonSection title="Your Cart" />
      <section>
        <Container>
          <Row>
            <Col lg="12">
              {cartItems.length === 0 ? (
                <h5 className="text-center">Your cart is empty</h5>
              ) : (
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th className="text-center">Image</th>
                      <th className="text-center">Product Title</th>
                      <th className="text-center">Price</th>
                      <th className="text-center">Quantity</th>
                      <th className="text-center">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <Tr item={item} key={item.id} />
                    ))}
                  </tbody>
                </table>
              )}

              <div className="mt-4">
                <h6>
                  Subtotal: $
                  <span className="cart__subtotal">{totalAmount}</span>
                </h6>
                <p>Taxes and shipping will calculate at checkout</p>

                <div className="cart__page-btn ">
                  <Link
                    to="/foods"
                    className="btn btn-outline-danger me-4 cart-bottom "
                  >
                    Continue Shopping
                  </Link>
                  {cartItems.length === 0 ? (
                    <Link
                      to="/checkout"
                      className="btn btn-outline-danger d-none "
                    >
                      Proceed to checkout
                    </Link>
                  ) : (
                    <Link to="/checkout" className="btn btn-outline-danger ">
                      Proceed to checkout
                    </Link>
                  )}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </TitleTab>
  );
};

const Tr = (props) => {
  const { id, image01, title, price, quantity } = props.item;

  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };
  return (
    <tr>
      <td className="text-center cart__img-box">
        <img src={image01} alt="" />
      </td>
      <td className="text-center">{title}</td>
      <td className="text-center">{price}</td>
      <td className="text-center">{quantity}</td>
      <td className="text-center cart__item-del " onClick={deleteItem}>
        <i class="ri-delete-bin-6-line fs-3"></i>
      </td>
    </tr>
  );
};

export default Cart;
