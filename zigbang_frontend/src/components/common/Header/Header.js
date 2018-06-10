import React from "react";
import styles from "./Header.scss";
import classNames from "classnames/bind";
import { Link, withRouter } from "react-router-dom";
import step_1 from "static/images/step_1.png";
import step_2 from "static/images/step_2.png";
import step_3 from "static/images/step_3.png";

const cx = classNames.bind(styles);

const Header = withRouter(({history}) => (
  <header className={cx("header")}>
    <div className={cx("header-content")}>
      <div className={cx("title")}>
        <Link to="/">아파트 리뷰 작성하기</Link>
      </div>
      <div className={cx("icon-step")}>
      { (() => {
          switch (history.location.pathname) {
            case '/step1' : return <img src={step_1} alt='step1' width='75' height='22'/>
            case '/step2' : return <img src={step_2} alt='step2' width='75' height='22'/>
            case '/step3' : return <img src={step_3} alt='step3' width='75' height='22'/>
            default: return null;
          }
        })() }
      </div>
    </div>
  </header>
));

export default Header;
