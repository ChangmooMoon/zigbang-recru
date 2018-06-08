import React from "react";
import styles from "./Step3View.scss";
import classNames from "classnames/bind";

import { IoAndroidArrowForward } from "react-icons/lib/io";

const cx = classNames.bind(styles);

const Step3View = () => (
  <div className={cx("step-3")}>

    <div className={cx('question-box')}>
      <div className={cx('question-text')}>리뷰해주신 아파트의 거주 형태는?</div>
      <div className={cx('buttons')}>
        <button className={cx('button')}>자가거주</button>
        <button className={cx('button')}>전세 또는 월세</button>
      </div>
    </div>

    <div className={cx('question-box')}>
      <div className={cx('question-text')}>아파트에 거주하셨던 시기는?</div>
        <div className={cx('buttons')}>
          <span>
            <button className={cx('button', 'button-option1')}>2013년까지</button>
            <button className={cx('button', 'button-option1')}>2014년까지</button>
            <button className={cx('button', 'button-option1')}>2015년까지</button>
          </span>
          <span>
            <button className={cx('button', 'button-option1')}>2016년까지</button>
            <button className={cx('button', 'button-option1')}>2017년까지</button>
            <button className={cx('button', 'button-option1')}>현재 거주 중</button>
          </span>
        </div>
      </div>

      <div className={cx('question-box')}>
        <div className={cx('question-text')}>작성해주시는 분의 연령대는?</div>
        <div className={cx('buttons')}>
          <button className={cx('button', 'button-option2')}>20대</button>
          <button className={cx('button', 'button-option2')}>30대</button>
          <button className={cx('button', 'button-option2')}>40대</button>
          <button className={cx('button', 'button-option2')}>50대</button>
          <button className={cx('button', 'button-option2','iphone5')}>60대 이상</button>
        </div>
      </div>

      <div className={cx('question-box')}>
        <div className={cx('question-text')}>작성해주시는 분의 연령대는?</div>
        <div className={cx('buttons')}>
          <button className={cx('button')}>남자</button>
          <button className={cx('button')}>여자</button>
        </div>
      </div>

      <div className={cx('question-box','exception')}>
        <div className={cx('question-text')}>결혼여부를 알려주세요</div>
        <div className={cx('buttons')}>
          <button className={cx('button')}>기혼</button>
          <button className={cx('button')}>미혼</button>
        </div>
      </div>

    <div className={cx("next-button")}>
      <span>리뷰 제출하기</span>
      <span className={cx("arrow")}>
      <IoAndroidArrowForward />
    </span>
  </div>

    </div>
);
export default Step3View;
