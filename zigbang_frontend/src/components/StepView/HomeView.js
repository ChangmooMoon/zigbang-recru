import React from "react";
import styles from "./HomeView.scss";
import classNames from "classnames/bind";

import FooterNextPageButton from 'components/common/FooterNextPageButton'

const cx = classNames.bind(styles);

const HomeView = () => (
  <div className={cx('home')}>
    <header>
      안녕하세요. 직방 온라인 과제를 수행한 문창무입니다.
      그럼 Let's go!
    </header>
    <div className={cx('next')}>
      <FooterNextPageButton/>
    </div>
  </div>
);

export default HomeView;
