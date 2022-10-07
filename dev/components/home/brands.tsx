import styles from "@styles/home/brands.module.scss";
import { urlFor } from "@services";
import client from "@client";

import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";
import cls from "classnames";
import { useRef, useState } from "react";
import Link from "next/link";

export interface Brand {
  name: string;
  slug: { current: string };
  mainImage: string;
}

function Brands({ brands }: { brands: Brand[] }) {
  const rightRef = useRef<null | HTMLDivElement>(null);
  const leftRef = useRef<null | HTMLDivElement>(null);
  const [rightPostion, setPosition] = useState(3);

  function scrollRight() {
    rightRef.current?.scrollIntoView({
      behavior: "smooth",
    });
    setPosition(
      rightPostion === brands.length
        ? rightPostion
        : rightPostion + 1,
    );
  }

  function scrollLeft() {
    leftRef.current?.scrollIntoView({ behavior: "smooth" });
    console.log(rightPostion);
    setPosition(
      rightPostion === 3 ? rightPostion : rightPostion - 1,
    );
  }

  return (
    <div className={cls(styles.brands, "ctn")}>
      <div className={cls(styles.brands__topbar)}>
        <span className={cls(styles.brands__topbar_decor)}>
          <span></span>
          <span></span>
          <span></span>
        </span>
        <h2>Thông tin loa mới</h2>
        <div className={cls(styles.brands__topbar_control)}>
          <span onClick={() => scrollLeft()}></span>
          <span onClick={() => scrollRight()}></span>
        </div>
      </div>
      <div className={cls(styles.brands__sliceWrapper)}>
        <div
          className={cls(styles.brands__slice)}
          style={{ width: `${(brands.length / 3) * 100}%` }}
        >
          {brands.map((brand: Brand, index: number) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const imageProps = useNextSanityImage(
              client,
              brand.mainImage,
            );
            return (
              <div
                className={cls(styles.brands__sliceItem)}
                key={brand.slug.current}
                ref={
                  rightPostion === index
                    ? rightRef
                    : rightPostion - 4 === index
                    ? leftRef
                    : null
                }
              >
                <div
                  className={cls(
                    styles.brands__sliceItem_name,
                    "label",
                  )}
                >
                  <p>{brand.name}</p>
                  <Link href="#">
                    <a>{"Xem thêm >"}</a>
                  </Link>
                </div>
                <div
                  className={styles.brands__sliceItem_image}
                >
                  <Image
                    {...imageProps}
                    alt={brand.name}
                    layout="fill"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Brands;
