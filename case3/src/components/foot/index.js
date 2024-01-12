import Link from "next/link";
import styles from "./styles.module.css";
export default function Foot() {
  return (
    <div className="box" style={{ marginBottom: "0px", paddingTop: "30px" }}>
      <div className="container">
        <div className="columns">
          <div className="column">
            <h1 className={styles.color}>Ari Shop</h1>
            <p className={styles.center}>Copyright © 2022. Ari Rachman</p>
          </div>
          <div className="column">
            <table className={`tables ${styles.center}`}>
              <thead>
                <tr>
                  <th>
                    <h1 className="title is-4 ari1">Ari Shop</h1>
                  </th>
                  <th>
                    <h1 className="title is-4 ari1">Kontak</h1>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="tr">
                    <Link href={"/Product"} className="ari1">
                      Product
                    </Link>
                  </td>
                  <td className="tr ari1">Youtube</td>
                </tr>
                <tr>
                  <td className="tr">
                    <Link href={"/About"} className="ari1">
                      Tentang Kami
                    </Link>
                  </td>
                  <td className="tr ari1">Instagram</td>
                </tr>
                <tr>
                  <td></td>
                  <td className="tr ari1">Tiktok</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
