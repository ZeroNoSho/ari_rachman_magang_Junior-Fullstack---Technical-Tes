"use client";
import Link from "next/link";
import { Contex } from "@/context/store";
import { useContext } from "react";
import styles from "./styles.module.css";
import Image from "next/image";

export default function Viewproduct() {
  const { data } = useContext(Contex);
  return (
    <div className={`box ${styles.box1}`}>
      <h1 className="subtitle is-3 mt-5">Product</h1>
      <div className="columns row d-flex justify-content-center">
        {data &&
          data.map((e, i) => (
            <div
              key={i}
              className={`column col-md-4 ${styles.hover} ${styles.colmd4}`}
            >
              <Link href={`/`}>
                <div className={`card ${styles.border}`}>
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <Image
                        alt="foto"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{
                          width: "100%",
                          height: "100%",
                        }}
                        className={styles.images}
                        src={e.image}
                      />
                    </figure>
                  </div>
                  <div className={`card-content ${styles.hover}`}>
                    <div className="media">
                      <div className={`media-conten ${styles.pTitel}`}>
                        <p className={`title is-6 ${styles.pTitel}`}>
                          {e.title}
                        </p>
                        <p className={`subtitle is-6 ${styles.pTitel}`}>
                          {e.price}$
                          <br />
                          {e.description}
                        </p>
                        <p className="subtitle is-7"> {e.category}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
      </div>

      <button className={`button is-link mt-5 mb-5 ${styles.btn1}`}>
        <Link href={"/"} style={{ color: "white" }}>
          Lihat Seluruh Produk
        </Link>
      </button>
    </div>
  );
}
