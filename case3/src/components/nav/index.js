"use client";
import Link from "next/link";
import styles from "./styles.module.css";
import { useState } from "react";

export default function Nav() {
  const [nav, setNavbar] = useState(false);
  let nums1 = [];
  return (
    <nav className="container navbar navbar-expand-lg fixed-top">
      <div className="container-fluid">
        <Link href={"/"} className="navbar-item">
          <p className={styles.color}>Ari Shop</p>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => (nav ? setNavbar(false) : setNavbar(true))}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="14"
            viewBox="0 0 448 512"
            className="m-1"
          >
            <path
              className="m-auto"
              d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
            />
          </svg>
        </button>
        <div className={`collapse navbar-collapse ${nav ? "d-block" : ""}`}>
          <div className="navbar-start">
            <Link href={"/"} className={`navbar-item  ${styles.item}`}>
              Product
            </Link>
            <Link href={"/"} className={`navbar-item  ${styles.item}`}>
              Tentang Saya
            </Link>
          </div>

          <div className={`navbar-end ${styles.flex}`}>
            <div className="navbar-item has-dropdown is-hoverable">
              <Link href={"/"} className={`navbar-item ${styles.item2} `}>
                <div
                  hidden={1 === 0 ? true : false}
                  className="styled__CartItemCount-sc-16e3jyi-9 kurad "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    width="27"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="#222222"
                      d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
                    />
                  </svg>
                </div>
              </Link>

              <div className={`navbar-dropdown ${styles.block}`}>
                <div>
                  <div className="d-flex">
                    <p className="navbar-item">keranjang({nums1.length})</p>
                    <Link href={"/"} className="navbar-item">
                      Lihat Semua Keranjang
                    </Link>
                  </div>
                  <div className="modal-dialog modal-dialog-scrollable">
                    <div className={`modal-content ${styles.modalcontent1}`}>
                      <div
                        className="modal-body"
                        style={{
                          height: "200px",
                          width: "10px !important",
                          margin: "20px",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Link href={""} className={`navbar-item ${styles.item2}`}>
                <div
                  hidden={1 === 0 ? true : false}
                  className="styled__CartItemCount-sc-16e3jyi-9 kurad"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    width="21"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="#373737"
                      d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"
                    />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
