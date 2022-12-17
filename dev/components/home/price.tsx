import styles from "@styles/home/price.module.scss";
import cls from "classnames";
import Image from "next/image";
import { MouseEventHandler, useState } from "react";

export interface Price {
  name: string;
  price: string;
  imageUrl: string;
}

function Prices({ prices }: { prices: Price[] }) {
  const [bg, setBg] = useState({
    prev: -1,
    curr: -1,
  });
  return (
    <div className={cls(styles.wrapper, "ctn")}>
      <div className={cls(styles.background)}>
        <Image
          src={
            prices[bg.prev]
              ? prices[bg.prev].imageUrl
              : "https://images.unsplash.com/photo-1609702847389-b8aec1b0b929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1563&q=80"
          }
          alt=""
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div
        key={bg.curr}
        className={cls(styles["background-front"])}
      >
        {prices.length > 0 && (
          <Image
            src={prices[bg.curr]?.imageUrl}
            alt=""
            layout="fill"
            objectFit="cover"
            priority
          />
        )}
      </div>
      <h2 className={styles.title}>Giá cả & Dịch Vụ</h2>
      <table className={styles.prices__wrapper}>
        <tbody>
          {prices?.map((price, index) => (
            <PriceItem
              key={index}
              price={price}
              handleHover={() => {
                setBg(prev => {
                  return {
                    prev: prev.curr,
                    curr: index,
                  };
                });
              }}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function PriceItem({
  price,
  handleHover,
}: {
  price: Price;
  handleHover: MouseEventHandler;
}) {
  return (
    <tr
      className={cls(styles.prices__row)}
      onMouseOver={handleHover}
    >
      <td className={cls(styles["prices__row-name"])}>
        <h4>{price.name}</h4>
      </td>
      <td
        className={cls(
          styles["prices__row-price"],
          "body-1",
        )}
      >
        <p>{price.price}</p>
      </td>
    </tr>
  );
}

export default Prices;
