import cls from "classnames";

import styles from "@styles/common/button.module.scss";

function Button(props: {
  content: string;
  handleClick: Function;
}) {
  return (
    <button
      className={cls(styles.button, "label")}
      onClick={() => props.handleClick()}
    >
      {props.content}
    </button>
  );
}

export default Button;
