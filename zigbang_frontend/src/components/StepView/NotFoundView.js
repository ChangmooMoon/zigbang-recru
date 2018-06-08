import React from "react";
import styles from "./NotFoundView.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const NotFoundView = () => (
  <div className={cx("notfound")}>
    Not Found 404 에요 돌아가세요
  </div>
);
export default NotFoundView;
