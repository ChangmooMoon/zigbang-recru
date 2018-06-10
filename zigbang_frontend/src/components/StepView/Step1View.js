import React from "react";
import { withRouter } from 'react-router-dom'
import styles from "./Step1View.scss";
import classNames from "classnames/bind";
import { FaQuestionCircleO } from "react-icons/lib/fa";
import FooterNextPageButton from 'components/common/FooterNextPageButton'

const cx = classNames.bind(styles);

const Step1View = withRouter(({ history, handleState, handleButtonStyle }) => (
  <div className={cx("step-1")}>
    <div className={cx("question-1")}>
      <div className={cx("question-icon")}>
        <FaQuestionCircleO />
      </div>
      <div className={cx("question-text")}>
        최근 5년 이내 아파트에 거주한 경험이 있나요?
      </div>
    </div>

    <div className={cx("button-group")}>
      <a href="https://s.zigbang.com/mobile/gateway/20170510/apt1.html">
      <button className={cx('button')}>
        아니오
      </button>
      </a>
      <button
        className={handleButtonStyle ? cx('button-selected') : cx('button')}
        onClick={handleState}
        >
        네
      </button>
    </div>

    <div className={cx('footer')}>
      { handleButtonStyle
      ? <div onClick={()=> {history.push('/step2')}}>
          <FooterNextPageButton/>
        </div>
      : <div/>
      }
    </div>
  </div>
));
export default Step1View;
