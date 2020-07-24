import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo2.png";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-light px-sm-5">
        <Link to="/" className="nav-link p-0">
          <img src={logo} alt="store" className="navbar-brand m-0 p-0" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav align-items-start">
            <li className="nav-item ml-5">
              <Link to="/" className="nav-link">
                Produkty
              </Link>
            </li>
            <li className="nav-item ml-5">
              <Link to="/about" className="nav-link">
                Nasz sklep
              </Link>
            </li>
            <li className="nav-item ml-5">
              <Link to="/contact" className="nav-link">
                Kontakt
              </Link>
            </li>
          </ul>
          <Link to="/cart" className="ml-auto">
            <ButtonContainer className="ml-5 mt-3">
              <span className="mr-2">
                <i className="fas fa-cart-plus"></i>
              </span>
              koszyk
            </ButtonContainer>
          </Link>
        </div>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: #f3f3f3;
  .nav-link {
    color: var(--mainDark) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
  .navbar-brand {
    height: 80px;
  }
`;
