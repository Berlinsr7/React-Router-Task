import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="container">
      <div className="row">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to={"/"}>
                    All
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to={'/fsd'}>
                    FSD
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to={"/datascience"}>
                    Data Science
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to={"/cyber"} >Cyber Security</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to={"/career"} >Career</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
