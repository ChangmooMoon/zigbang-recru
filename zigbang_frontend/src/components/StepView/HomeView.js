import React from "react";
import { withRouter } from 'react-router-dom'
import styles from "./HomeView.scss";
import classNames from "classnames/bind";

import FooterNextPageButton from 'components/common/FooterNextPageButton'

const cx = classNames.bind(styles);

const HomeView = withRouter(({history}) => (
  <div className={cx('home')}>
    <header>
      안녕하세요. 직방 온라인 과제를 수행한 문창무입니다.
      그럼 Let's go!
    </header>
    <div
      className={cx('next')}
      onClick={()=> {history.push('/step1')}}
      >
      <FooterNextPageButton/>
    </div>
  </div>
));

export default HomeView;
