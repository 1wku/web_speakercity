import styles from "@styles/home/brands.module.scss";
import client from "@client";

import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";
import cls from "classnames";
import Link from "next/link";

export interface Brand {
  name: string;
  slug: { current: string };
  mainImage: string;
}

function Brands({ brands }: { brands: Brand[] }) {
  return (
    <div className={cls(styles.brands, "ctn")}>
      <TopBar />
      <BrandSlider brands={brands} />
    </div>
  );
}

function BrandSlider({ brands }: { brands: Brand[] }) {
  return (
    <div className={cls(styles.slides)}>
      {brands.map((brand: Brand) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const imageProps = useNextSanityImage(
          client,
          brand.mainImage,
        );
        return (
          <BrandCard
            key={brand.name}
            imageProps={imageProps}
            brand={brand}
          />
        );
      })}
    </div>
  );
}

function BrandCard({
  brand,
  imageProps,
}: {
  brand: Brand;
  imageProps: any;
}) {
  return (
    <div
      className={cls(styles.brandCard)}
      key={brand.slug.current}
    >
      <div className={cls(styles.brandCard_name, "label")}>
        <p>{brand.name}</p>
        <Link href="#">
          <a>{"Xem thêm >"}</a>
        </Link>
      </div>
      <div className={styles.brandCard_image}>
        <Image
          {...imageProps}
          alt={brand.name}
          layout="fill"
        />
      </div>
    </div>
  );
}

function LeftDecorator() {
  return (
    <span className={cls(styles.brands__topbar_decor)}>
      <span></span>
      <span></span>
      <span></span>
    </span>
  );
}

function TopBar() {
  return (
    <div className={cls(styles.brands__topbar)}>
      <LeftDecorator />
      <h2>Thông tin loa mới</h2>
      <div className={cls(styles.brands__topbar_control)}>
        <span id="turn-left"></span>
        <span id="turn-right"></span>
      </div>
    </div>
  );
}

export default Brands;
