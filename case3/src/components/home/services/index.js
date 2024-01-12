"use client";
import { Contex } from "@/context/store";
import { useContext } from "react";
import styles from "./styles.module.css";
export default function Servis() {
  const { arry } = useContext(Contex);
  return (
    <div className={`container`} style={{ padding: "100px 0px" }}>
      <h3 className={`title is-2 text-center`} style={{ fontSize: "38px" }}>
        6 Alasan Anda harus Memilih Ari Shop
      </h3>
      <p className="text-center">
        Berikut alasan mengapa anda harus membeli produk kami.
      </p>
      <div
        className={`columns row ${styles.mt6} d-flex justify-content-center`}
      >
        {arry &&
          arry.map((e, i) => (
            <div
              key={i}
              className={`card ${styles.box1} ${styles.colmd4} text-center rounded-3 m-5`}
            >
              <div className="my-auto">
                {e.ele}
                <div>
                  <div className="card-content">
                    <h5 className="card-title title is-4">{e.judul}</h5>
                    <div className="content">
                      <p className="is-1"> {e.des}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
