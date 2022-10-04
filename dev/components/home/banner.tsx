import { NextPage } from "next";
import Image from "next/image";
import cls from "classnames";

import styles from "@styles/home/banner.module.scss";
import Button from "components/common/button";

const Banner: NextPage = () => {
  function handleClick() {
    console.log("Lieen hej");
  }

  return (
    <div className={styles.banner}>
      <div className={cls("ctn", styles.banner__title)}>
        <h1>SPEACKERCITY</h1>
        <p className="subtitle">WE ARE HERE TO SERVE YOU</p>
        <Button
          content="Liên hệ ngay"
          handleClick={handleClick}
        />
      </div>
      <div className={styles.banner__image}>
        <Image
          alt="banner"
          layout="fill"
          src="/images/banner.png"
          priority
        />
      </div>
    </div>
  );
};

export default Banner;
