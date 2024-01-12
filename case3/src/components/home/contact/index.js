import Image from "next/image";
import styles from "./styles.module.css";
export default function Contact() {
  return (
    <div className={`container ${styles.flex}`}>
      <div className={styles.w50}>
        <Image
          alt="foto"
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: "100%",
            height: "100%",
          }}
          src={"/asset/home/peta.png"}
        />
      </div>
      <div className={styles.w50}>
        <div className="px-5 ">
          <div className="pb-5">
            <p className="title is-2" style={{ margin: "0px" }}>
              Hubungi Kami
            </p>
            <p>Anda dapat menghubungi kami melalui kontak di bawah ini :</p>
          </div>
          <p className="py-2 w-75">
            <span className="title is-6">Alamat :</span>
            <br></br>Jl. DI Panjaitan No.128, Karangreja, Purwokerto Kidul, Kec.
            Purwokerto Selatan Kabupaten Banyumas, Jawa Tengah 5314
          </p>
          <p className="py-2">
            <span className="title is-6">E-Mail :</span>
            <br></br>officialpencintanaman.co.id
          </p>
          <p className="py-2">
            <span className="title is-6">Telepon :</span>
            <br></br>
            0856-4161-9643
          </p>
          <p className="py-2">
            <span className="title is-6">Website :</span>
            <br></br> arishop.id
          </p>
        </div>
      </div>
    </div>
  );
}
