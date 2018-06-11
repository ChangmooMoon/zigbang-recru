import React from "react";
import { withRouter } from 'react-router-dom'
import styles from "./Step3View.scss";
import classNames from "classnames/bind";

import { IoAndroidArrowForward } from "react-icons/lib/io";

const cx = classNames.bind(styles);

const Step3View = withRouter(({
  history,
  handleResiType1,
  handleResiType2,
  handleResiPeriod1,
  handleResiPeriod2,
  handleResiPeriod3,
  handleResiPeriod4,
  handleResiPeriod5,
  handleResiPeriod6,
  handleAge1,
  handleAge2,
  handleAge3,
  handleAge4,
  handleAge5,
  handleSex1,
  handleSex2,
  handleMaritalStat1,
  handleMaritalStat2,
  myhome,
  rent,
  until13,
  until14,
  until15,
  until16,
  until17,
  now,
  age20,
  age30,
  age40,
  age50,
  age60,
  male,
  female,
  yes,
  no,
  allowNextPage
}) => (
  <div className={cx("step-3")}>
    <div className={cx('question-box')}>
      <div className={cx('question-text')}>리뷰해주신 아파트의 거주 형태는?</div>
      <div className={cx('buttons')}>
        <button className={
          myhome
          ? cx('button','button-clicked')
          : cx('button')
          } onClick={handleResiType1}>자가거주</button>
        <button className={
          rent
          ? cx('button','button-clicked')
          : cx('button')
          } onClick={handleResiType2}>전세 또는 월세</button>
      </div>
    </div>

    <div className={cx('question-box')}>
      <div className={cx('question-text')}>아파트에 거주하셨던 시기는?</div>
        <div className={cx('buttons')}>
          <span>
            <button className={
              until13
              ? cx('button', 'button-option1', 'button-clicked')
              : cx('button', 'button-option1')
              }
            onClick={handleResiPeriod1}>2013년까지</button>
            <button className={
              until14
              ? cx('button', 'button-option1', 'button-clicked')
              : cx('button', 'button-option1')
              }
            onClick={handleResiPeriod2}>2014년까지</button>
            <button className={
              until15
              ? cx('button', 'button-option1', 'button-clicked')
              : cx('button', 'button-option1')
              }
            onClick={handleResiPeriod3}>2015년까지</button>
          </span>
          <span>
            <button className={
              until16
              ? cx('button', 'button-option1', 'button-clicked')
              : cx('button', 'button-option1')
              }
            onClick={handleResiPeriod4}>2016년까지</button>
            <button className={
              until17
              ? cx('button', 'button-option1', 'button-clicked')
              : cx('button', 'button-option1')
              }
            onClick={handleResiPeriod5}>2017년까지</button>
            <button className={
              now
              ? cx('button', 'button-option1', 'button-clicked')
              : cx('button', 'button-option1')
              }
            onClick={handleResiPeriod6}>현재 거주 중</button>
          </span>
        </div>
      </div>

      <div className={cx('question-box')}>
        <div className={cx('question-text')}>작성해주시는 분의 연령대는?</div>
        <div className={cx('buttons')}>
          <button className={
            age20
            ? cx('button', 'button-option2','button-clicked')
            : cx('button', 'button-option2')
          }
          onClick={handleAge1}>20대</button>
          <button className={
            age30
            ? cx('button', 'button-option2','button-clicked')
            : cx('button', 'button-option2')
          }
          onClick={handleAge2}>30대</button>
          <button className={
            age40
            ? cx('button', 'button-option2','button-clicked')
            : cx('button', 'button-option2')
          }
          onClick={handleAge3}>40대</button>
          <button className={
            age50
            ? cx('button', 'button-option2','button-clicked')
            : cx('button', 'button-option2')
          }
          onClick={handleAge4}>50대</button>
          <button className={
            age60
            ? cx('button', 'button-option2','iphone5','button-clicked')
            : cx('button', 'button-option2','iphone5')
            }
          onClick={handleAge5}>60대 이상</button>
        </div>
      </div>

      <div className={cx('question-box')}>
        <div className={cx('question-text')}>작성해주시는 분의 성별은?</div>
        <div className={cx('buttons')}>
          <button className={
            male
            ? cx('button','button-clicked')
            : cx('button')
          }
          onClick={handleSex1}>남자</button>
          <button className={
            female
            ? cx('button','button-clicked')
            : cx('button')
          }
          onClick={handleSex2}>여자</button>
        </div>
      </div>

      <div className={cx('question-box','exception')}>
        <div className={cx('question-text')}>결혼여부를 알려주세요</div>
        <div className={cx('buttons')}>
          <button className={
            yes
            ? cx('button','button-clicked')
            : cx('button')
            }
          onClick={handleMaritalStat1}>기혼</button>
          <button className={
            no
            ? cx('button','button-clicked')
            : cx('button')
          }
          onClick={handleMaritalStat2}>미혼</button>
        </div>
      </div>
      {
        allowNextPage
        ? <div
            className={cx("next-button")}
            onClick={()=>{history.push('/step4')}}>
          <span>리뷰 제출하기</span>
          <span className={cx("arrow")}>
            <IoAndroidArrowForward />
          </span>
        </div>
        :<div/>
       }

    </div>
));
export default Step3View;
