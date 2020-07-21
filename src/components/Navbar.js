import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo2.png";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link to="/" className="nav-link p-0">
          <img src={logo} alt="store" className="navbar-brand m-0 p-0" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              Produkty
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus"></i>
            </span>
            koszyk
          </ButtonContainer>
        </Link>
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
