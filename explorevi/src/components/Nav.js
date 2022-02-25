import React, { useState } from "react";
import house from "../images/house.svg";
import star from "../images/star.svg";
import chairs from "../images/chairs.svg";
import backpack from "../images/backpack.svg";
import bus from "../images/bus.svg";
import compass from "../images/compass.svg";
import forest from "../images/forest.svg";
import kayak from "../images/kayak.svg";
import tent from "../images/tent.svg";
import signs from "../images/signs.svg";
import logo from "../images/logo.svg";

const Nav = () => {
  return (
    <div className="wrap">
      <div className="navbar">
        <div className="navbar__chunk">
          <img id="logo" src={logo} alt="" className="logo" />
        </div>
        <div className="navbar__wrapper">
          <div className="navbar__inner">
            {/* Top Level Menu *** Home / Explore / Favorites */}
            <div className="main__menu">
              <div className="main__menu__title">
                <span>Explore</span>
              </div>
              <a href="/" className="menu__item active">
                <div className="icon">
                  <img id="house" src={house} alt="" />
                </div>
                <div className="link__item">
                  <a href="">Home</a>
                </div>
              </a>
              <a href="/" className="menu__item">
                <div className="icon">
                  <img id="compass" src={compass} alt="" />
                </div>
                <div className="link__item">
                  <a href="">Explore</a>
                </div>
              </a>
              <a href="/" className="menu__item">
                <div className="icon">
                  <img id="house" src={star} alt="" />
                </div>
                <div className="link__item">
                  <a href="">Favorites</a>
                </div>
              </a>
              <div className="line"></div>
            </div>
            {/* Top Level Menu *** END*/}

            {/* Secondary Menu Begin *** Exploration Categories */}
            <div className="main__menu secondary-menu">
              <div className="main__menu__title">
                <span>All Categories</span>
              </div>
              <a href="/" className="menu__item">
                <div className="icon">
                  <img id="compass" src={kayak} alt="" />
                </div>
                <div className="link__item">
                  <a href="">Lakes</a>
                </div>
              </a>
              <a href="/" className="menu__item">
                <div className="icon">
                  <img id="compass" src={tent} alt="" />
                </div>
                <div className="link__item">
                  <a href="">Explore</a>
                </div>
              </a>
              <a href="/" className="menu__item">
                <div className="icon">
                  <img id="compass" src={bus} alt="" />
                </div>
                <div className="link__item">
                  <a href="">Favorites</a>
                </div>
              </a>
              <a href="/" className="menu__item">
                <div className="icon">
                  <img id="compass" src={signs} alt="" />
                </div>
                <div className="link__item">
                  <a href="">Lakes</a>
                </div>
              </a>
              <a href="/" className="menu__item">
                <div className="icon">
                  <img id="compass" src={chairs} alt="" />
                </div>
                <div className="link__item">
                  <a href="">Explore</a>
                </div>
              </a>
              <a href="/" className="menu__item">
                <div className="icon">
                  <img id="compass" src={backpack} alt="" />
                </div>
                <div className="link__item">
                  <a href="">Favorites</a>
                </div>
              </a>
              <a href="/" className="menu__item">
                <div className="icon">
                  <img id="compass" src={forest} alt="" />
                </div>
                <div className="link__item">
                  <a href="">Favorites</a>
                </div>
              </a>
            </div>
            {/* Secondary Menu End *** END*/}
          </div>
        </div>
      </div>
      <div className="hero-nav">
        <span>Locations</span>
      </div>
    </div>
  );
};

export default Nav;
