import React from "react";
import styles from "./Step4View.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Step4View = () => (
  <div className={cx("step-4")}>
    <div className={cx('profile-box')}>
      <span className={cx('user-fetch-img')}>picture</span>
      <span className={cx('user-state1')}>
        <div>
          <span className={cx('age-sex')}>30대 남자</span>
          <span className={cx('date')}>2018.03.11 등록</span>
        </div>
        <div className={cx('user-state2')}>
          현재 거주중 · 전세 또는 월세 · 기혼
        </div>
      </span>
    </div>

    <div className={cx('user-review')}>
      <div>
        <span className={cx('item-title')}>교통여건</span>
        <span className={cx('item-rating-state')}>3.0 별별별별별</span>
      </div>
      <div className={cx('review-state-text')}>
        단지가 커서 버스타느 곳까지 거리가 오래 걸림 단, 9호선이 개통하면 지하철 여건은 개선 예정
      </div>
    </div>
    <div className={cx('user-review')}>
      <div>
        <span className={cx('item-title')}>주변환경</span>
        <span className={cx('item-rating-state')}>4.0 별별별별별</span>
      </div>
      <div className={cx('review-state-text')}>
        올림픽공원,탄천의 접근성은 좋지만, 상가가 올림픽상가 밖에 없어서(단지 내 조금한 상가는 있음) 식사를 할 곳이 별로 없음(햄버거 등)
      </div>
    </div>
    <div className={cx('mygit')}>
      <a href="https://github.com/Moo25/zigbang-recru">'깃헙 링크를 클릭해주세요!'</a>
    </div>
  </div>
);
export default Step4View;
