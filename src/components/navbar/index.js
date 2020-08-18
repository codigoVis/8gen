import React, { Component } from "react";
import "./NavBar.css";
class Lista extends Component {
  render() {
    return (
      <div className="navMedium ">
        <svg
          id="toLeft"
          class="bi bi-chevron-left"
          width="2rem"
          height="4rem"
          viewBox="0 0 16 16"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          data-scroll-direction="left"
        >
          &LeftAngleBracket;
          <path
            fill-rule="evenodd"
            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
          />
        </svg>
        <div class="wrapper1  mt-1">
          <div class="wrapper_items">
            <div class="item text-muted">
              <small>HOME</small>
            </div>
            <div class="item text-muted">
              <small>POPULAR</small>
            </div>
            <div class="item text-muted">
              <small>MOMENTUM</small>
            </div>
            <div class="item text-muted">
              <small>CORONAVIRUS</small>
            </div>
            <div class="item text-muted">
              <small>UNEZERO</small>
            </div>
            <div class="item text-muted">
              <small>ELEMENTAL</small>
            </div>
            <div class="item text-muted">
              <small>GEN</small>
            </div>
            <div class="item text-muted">
              <small>ZORA</small>
            </div>
            <div class="item text-muted">
              <small>FORGE</small>
            </div>
            <div class="item text-muted">
              <small>HUMAN</small>
            </div>
            <div class="item text-muted">
              <small> MARKER</small>
            </div>
            <div class="item text-muted">
              <small>LEVEL</small>
            </div>
            <div class="item text-muted">
              <small>HEATED</small>
            </div>
            <div class="item text-muted">
              <small>MORE</small>
            </div>
          </div>
        </div>
        <svg
          id="toRight"
          class="bi bi-chevron-right mr-3"
          width="2rem"
          height="4rem"
          viewBox="0 0 16 16"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          data-scroll-direction="raight"
        >
          &RightAngleBracket;>
          <path
            fill-rule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </div>
    );
  }
}
export default Lista;
