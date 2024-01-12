import Link from "next/link";
import styles from "./styles.module.css";
import Image from "next/image";

export default function First() {
  return (
    <div className={`container ${styles.cons}`}>
      <div className="columns">
        <div className={`column ${styles.imgs}`}>
          <Image
            alt="foto"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "100%",
              height: "100%",
            }}
            src={"/asset/home/home.png"}
          />
        </div>
        <div className={`column ${styles.imgs}`}>
          <h3 className={`title is-1 ${styles.fontsize}`}>
            Temukan barang yang kamu
            <br></br>inginkan di Ari Shop
          </h3>
          <p>
            Ari Shop adalah e-commerce yang dapat memberikan pengalaman terbaikuntuk jual
            <br></br>beli bagi pengguna
          </p>

          <button className="button is-link mt-5">
            <Link href={"/"} style={{ color: "white" }}>
              Explore produk
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
