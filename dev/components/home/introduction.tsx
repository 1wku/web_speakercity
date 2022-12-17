import styles from "@styles/home/introduction.module.scss";
import Button from "components/common/button";
import { PortableText } from "@portabletext/react";
import cls from "classnames";

export interface Intro {
  title: string;
  bio: [];
  link?: string;
}

function Intro({
  data,
  handleClick,
  position,
  className,
}: {
  data: Intro;
  handleClick: Function;
  position?: string;
  className?: String;
}) {
  return (
    <div
      className={cls(styles.intro, styles[position || ""])}
    >
      <p>Chúng tôi luôn sẵn sàng</p>
      <h2>{data.title}</h2>
      <PortableText value={data.bio} />
      <Button
        content="Liên hệ ngay"
        handleClick={() => handleClick()}
        position="center"
      />
    </div>
  );
}

function Introduction({ intros }: { intros: Intro[] }) {
  const handleClick = () => {};
  const [firstIntro, ...newIntros] = intros.reverse();
  return (
    <div className={cls(styles.wrapper, "ctn")}>
      <div className={styles.main}>
        <div className={styles.main__video}>
          <iframe
            height="100%"
            width="100%"
            src="https://www.youtube.com/embed/4haurn3S8z8"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className={cls(styles.main__intro)}>
          <Intro
            data={firstIntro}
            handleClick={handleClick}
            position="center"
          />
        </div>
      </div>
      <div className={styles.sub}>
        {newIntros.map((intro, index) => (
          <Intro
            data={intro}
            key={index}
            handleClick={handleClick}
            className={cls({
              [styles["center"]]:
                index === newIntros.length,
            })}
          />
        ))}
      </div>
    </div>
  );
}

export default Introduction;
