import React from "react";
import styles from "./FooterNextPageButton.scss";
import classNames from "classnames/bind";

import { IoAndroidArrowForward } from "react-icons/lib/io";

const cx = classNames.bind(styles);

const FooterNextPageButton = () => (
  <div className={cx("next-button")}>
    다음
    <span className={cx("arrow")}>
      <IoAndroidArrowForward />
    </span>
  </div>
);

export default FooterNextPageButton;
