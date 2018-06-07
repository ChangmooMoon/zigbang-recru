import React from "react";
import styles from "./Header.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const Header = () => (
  <header className={cx("header")}>
    <div className={cx("header-content")}>
      <div className={cx("title")}>
        <Link to="/">아파트 리뷰 작성하기</Link>
      </div>
      <div className={cx("icon-step")}>스텝123</div>
    </div>
  </header>
);

export default Header;
