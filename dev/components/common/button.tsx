import cls from "classnames";

import styles from "@styles/common/button.module.scss";

function Button(props: {
  content: string;
  handleClick: Function;
  position: string;
}) {
  return (
    <button
      className={cls(styles.button, "label", {
        [styles[props.position]]: props.position,
      })}
      onClick={() => props.handleClick()}
    >
      {props.content}
    </button>
  );
}

export default Button;
