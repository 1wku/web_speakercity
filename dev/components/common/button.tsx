import cls from "classnames";

import styles from "@styles/common/button.module.scss";

interface Button {
  content: string;
  handleClick: Function;
  position?: string;
}

function Button(props: Button) {
  return (
    <button
      className={cls(
        styles.button,
        "label",
        styles[props.position || ""],
      )}
      onClick={() => props.handleClick()}
    >
      {props.content}
    </button>
  );
}

export default Button;
