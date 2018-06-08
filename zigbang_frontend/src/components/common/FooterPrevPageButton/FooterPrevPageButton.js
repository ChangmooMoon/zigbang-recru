import React from "react";
import styles from "./FooterPrevPageButton.scss";
import classNames from "classnames/bind";

import { IoAndroidArrowBack } from "react-icons/lib/io";

const cx = classNames.bind(styles);

const FooterPrevPageButton = () => (
  <div className={cx("prev-button")}>
    <span className={cx("arrow")}>
      <IoAndroidArrowBack />
    </span>
    이전
  </div>
);

export default FooterPrevPageButton;
