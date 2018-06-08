import React from "react";
import styles from "./Step1View.scss";
import classNames from "classnames/bind";
import { FaQuestionCircleO } from "react-icons/lib/fa";
import FooterNextPageButton from 'components/common/FooterNextPageButton'

const cx = classNames.bind(styles);

const Step1View = () => (
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
      <button className={cx('button')}>
        아니오
      </button>
      <button className={cx('button')}>
        네
      </button>
    </div>

    <div className={cx('footer')}>
      <FooterNextPageButton/>
    </div>

  </div>
);
export default Step1View;
