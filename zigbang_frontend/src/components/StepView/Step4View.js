import React from "react";
import styles from "./Step4View.scss";
import classNames from "classnames/bind";
import ReactStars from 'react-stars'

const cx = classNames.bind(styles);

const Step4View = ({
  age,
  sex,
  date,
  whenYouLive,
  resiType,
  marrital,
  trafficScore,
  trafficText,
  envirScore,
  envirText,
  imagesrc
}) => (
  <div className={cx("step-4")}>
    <div className={cx('profile-box')}>
      <span className={cx('user-fetch-img')}>
        {<img src={imagesrc} alt='userImage' width='55' height='55'/>}
      </span>
      <span className={cx('user-state1')}>
        <div>
          <span className={cx('age-sex')}>
            {age} {sex}
            </span>
          <span className={cx('date')}>{date} 등록</span>
        </div>
        <div className={cx('user-state2')}>
          {whenYouLive} · {resiType} · {marrital}
        </div>
      </span>
    </div>

    <div className={cx('user-review')}>
      <span className={cx('review-title')}>
        <span className={cx('item-title')}>교통여건</span>
        <span className={cx('item-rating-state')}>{trafficScore} </span>
        <span className={cx('item-star')}>
          <ReactStars
          count={5} size={15}
          value={localStorage['교통여건 점수']}
          color1={"#e9ecef"} color2={"#fca730"}
          edit={false}
          />
        </span>
      </span>
      <div className={cx('review-state-text')}>
        {trafficText}
      </div>
    </div>

    <div className={cx('user-review')}>
      <div className={cx('review-title')}>
        <span className={cx('item-title')}>주변환경</span>
        <span className={cx('item-rating-state')}>{envirScore}</span>
        <span className={cx('item-star')}>
        <ReactStars
                count={5} size={15}
                value={localStorage['주변환경 점수']}
                color1={"#e9ecef"} color2={"#fca730"}
                edit={false}
                />
        </span>
      </div>
      <div className={cx('review-state-text')}>
        {envirText}
      </div>
    </div>
    <div className={cx('mygit')}>
      <a href="https://github.com/Moo25/zigbang-recru">'깃헙 링크를 클릭해주세요!'</a>
    </div>
  </div>
);
export default Step4View;
