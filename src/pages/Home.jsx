import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import TitleTab from "../components/titleTab/TitleTab";

import heroImg from "../assets/images/hero.png";
import { Link } from "react-router-dom";
import Category from "../components/UI/category/Category";

import "../styles/hero-section.css";
import "../styles/home.css";

import featureData01 from "../assets/images/service-01.png";
import featureData02 from "../assets/images/service-02.png";
import featureData03 from "../assets/images/service-03.png";

import foodCategoryImg01 from "../assets/images/hamburger.jpg";
import foodCategoryImg02 from "../assets/images/pizza.jpg";
import foodCategoryImg03 from "../assets/images/banner.jpg";

import products from "../assets/fake-data/products";

import ProductCard from "../components/UI/product-card/ProductCard";

import networking from "../assets/images/network.png";

import TestimonialSlider from "../components/UI/slider/TestimonialSlider";
import Slider from "../components/UI/slider/Slider";

const featureData = [
  {
    title: "Quick Delivery",
    imgUrl: featureData01,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, iusto.",
  },
  {
    title: "Super Dine In",
    imgUrl: featureData02,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, iusto.",
  },
  {
    title: "Easy Pick Up",
    imgUrl: featureData03,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, iusto.",
  },
];

const Home = () => {
  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);
  const [hotPizza, setHotPizza] = useState([]);
  useEffect(() => {
    const filteredPizza = products.filter((item) => item.category === "Pizza");
    const slicePizza = filteredPizza.slice(0, 4);
    setHotPizza(slicePizza);
  }, []);

  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }
    if (category === "BURGER") {
      const filteredProducts = products.filter(
        (item) => item.category === "Burger"
      );
      setAllProducts(filteredProducts);
    }
    if (category === "PIZZA") {
      const filteredProducts = products.filter(
        (item) => item.category === "Pizza"
      );
      setAllProducts(filteredProducts);
    }
    if (category === "BREAD") {
      const filteredProducts = products.filter(
        (item) => item.category === "Bread"
      );
      setAllProducts(filteredProducts);
    }
  }, [category]);

  return (
    <TitleTab title="Home">
      <Slider />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <h5 className="mb-3">Easy way to make na order</h5>
                <h1 className="mb-4 hero__title">
                  <span>Hungry?</span> just wait food <br />
                  <span>at your door</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid eligendi consequatur quasi ipsum esse natus.
                </p>
                <div className=" d-flex align-items-center gap-5  mt-4 ">
                  <button type="button" class="btn btn-danger btn-food  ">
                    <Link to="/foods" className="text-light">
                      See All Foods
                    </Link>
                  </button>
                </div>

                <div className="hero__service d-flex align-items-center gap-5 mt-5">
                  <p className="d-flex align-items-center gap-2">
                    <span className="shipping__icon">
                      <i class="ri-car-line"></i>
                    </span>
                    No shipping charge
                  </p>
                  <p className="d-flex align-items-center gap-2">
                    <span className="shipping__icon">
                      <i class="ri-shield-check-line"></i>
                    </span>
                    100% secure checkout
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="hero-img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Category />
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature__subtitle mb-4">What we serve</h5>
              <h2 className="feature__title">just sit bact at home</h2>
              <h2 className="feature__title">
                we will <span>take care</span>
              </h2>
              <p className="mb-1 mt-4 feature__text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
                perspiciatis molestiae cupiditate, provident atque voluptates.
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
                perspiciatis molestiae cupiditate, provident atque voluptates.
              </p>
            </Col>
            {featureData.map((item, index) => (
              <Col lg="4" md="6" sm="6" key={index} className="mt-5">
                <div className="feature__item text-center px-5 py-3">
                  <img
                    src={item.imgUrl}
                    alt="feature-img"
                    className="w-25 mb-3"
                  />
                  <h5 className="fw-bold mb-3">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Popular Foods</h2>
            </Col>
            <Col lg="12">
              <div className="food__category d-flex align-items-center justify-content-center gap-4">
                <button
                  className={`all__btn ${
                    category === "ALL" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("ALL")}
                >
                  All
                </button>
                <button
                  className={`d-flex align-items-center  gap-2 ${
                    category === "BURGER" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("BURGER")}
                >
                  <img src={foodCategoryImg01} alt="" />
                  Burger
                </button>
                <button
                  className={`d-flex align-items-center  gap-2 ${
                    category === "PIZZA" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("PIZZA")}
                >
                  <img src={foodCategoryImg02} alt="" />
                  Pizza
                </button>
                <button
                  className={`d-flex align-items-center  gap-2 ${
                    category === "BREAD" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("BREAD")}
                >
                  <img src={foodCategoryImg03} alt="" />
                  Bread
                </button>
              </div>
            </Col>
            {allProducts.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2>Hot Pizza</h2>
            </Col>
            {hotPizza.map((item) => (
              <Col lg="3" md="4" key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="testimonial mb-5">
                <h5 className="testimonial__subtitle">Testimonial</h5>
                <h2 className="testimonial__title mb-4">
                  What our <span>customers</span>are saying
                </h2>
                <p className="testimonial__desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                  unde corrupti dolorum autem. Temporibus ipsum ducimus
                  voluptatem, non deserunt vitae?
                </p>

                <TestimonialSlider />
              </div>
            </Col>
            <Col lg="6" md="6">
              <img src={networking} alt="testimonial-img" className="w-100" />
            </Col>
          </Row>
        </Container>
      </section>
    </TitleTab>
  );
};

export default Home;
