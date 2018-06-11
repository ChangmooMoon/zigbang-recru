import React from "react";
import { withRouter } from 'react-router-dom'
import styles from "./Step2View.scss";
import classNames from "classnames/bind";
import ReactStars from 'react-stars'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Collapse, CardBody, Card } from 'reactstrap'

import { TiPencil } from "react-icons/lib/ti";
import{ IoIosCheckmarkOutline, IoIosArrowRight,IoIosArrowDown } from 'react-icons/lib/io';

import FooterPrevPageButton from 'components/common/FooterPrevPageButton'
import FooterNextPageButton from 'components/common/FooterNextPageButton'

const cx = classNames.bind(styles);

const Step2View = withRouter(({
  history,
  handleTrafficConText,
  handleCircumText,
  handleDong,
  handleFloor,
  onToggle1,
  onToggle2,
  onToggle3,
  collapse1,
  collapse2,
  collapse3,
  onStarRating1,
  onStarRating2,
  traffic_con_star,
  circum_star,
  user_dong,
  dongFloorInfo,
  maxFloor,
  stepFloorArray,
  trafficContents, // 스타일링용
  circumContents,  // 스타일링용
  dongFloorContents // 스타일링용
  }) => (
  <div className={cx("step-2")}>
    <div className={cx('question-1')}>
      <div className={cx('pencil-icon')}>
        <TiPencil />
      </div>
      <div className={cx('question-text')}>
        검색한 단지에 대해 아래의 항목들을 입력해주세요.
      </div>
    </div>

    <div
      className={
        collapse1
        ? cx('question-list','button-collapsed')
        : cx('question-list')
      } onClick={onToggle1}>
      <span className={cx('item')}>
        <span className=
        {
          trafficContents
          ? cx('check-icon','fulfill-contents')
          : cx('check-icon')
        }
        >
         <IoIosCheckmarkOutline />
        </span>
        <span className={cx('question-text')}>교통여건</span>
      </span>
      <span className={cx('arrow-icon')}>
        { collapse1
          ? <IoIosArrowDown />
          : <IoIosArrowRight/>
        }
      </span>
    </div>

    <Collapse isOpen={collapse1}>
      <Card>
        <CardBody className={cx('collapse')}>
          <div>
            대중교통 이용이나, 자동차 운행과 같은 교통여건에 대해 평가해주세요.(50자 이상)
          </div>
          <div className={cx('rating-box')}>
            <span className={cx('rating-text')}>
              <div>매우</div>
              <div>불편</div>
            </span>
            <span>
              <ReactStars
                count={5} size={35}
                value={traffic_con_star}
                onChange={onStarRating1}
                color1={"#e9ecef"} color2={"#fca730"}
                />
            </span>
            <span className={cx('rating-text')}>
              <div>매우</div>
              <div>편리</div>
            </span>
          </div>
          <div className={cx('input-example')}>
          (예시) 삼각지역이 도보 3분거리이고, 종각으로 가는 501버스를 집 바로 앞
                  버스정류장에서 탈 수 있다. 배차간격이 짧아 출퇴근이 편리하다. 하지만 서울역이
                  근처에 있어서 차가 항상 막혀, 자가용 이용은 자제하려고 한다.
          </div>
          <form
            className={cx('input-box')}
            onChange={handleTrafficConText}
          >
            <textarea
              className={cx('input-box')}
              type='text'
              placeholder='교통 여건의 장단점을 입력해주세요'
            />
          </form>
        </CardBody>
      </Card>
    </Collapse>

    <div className={
      collapse2
        ? cx('question-list','button-collapsed')
        : cx('question-list')
      } onClick={onToggle2}>
      <span className={cx('item')}>
        <span className=
        {
          circumContents
          ? cx('check-icon','fulfill-contents')
          : cx('check-icon')
        }>
         <IoIosCheckmarkOutline />
        </span>
        <span className={cx('question-text')}>주변환경</span>
      </span>
      <span className={cx('arrow-icon')}>
      { collapse2
        ? <IoIosArrowDown />
        : <IoIosArrowRight/>
        }
      </span>
    </div>

    <Collapse isOpen={collapse2}>
      <Card>
        <CardBody className={cx('collapse')}>
          <div>
            주거지 주변 환경에 대해서 평가해주세요 (50자 이상)
          </div>
          <div className={cx('rating-box')}>
            <span className={cx('rating-text')}>
              <div>매우</div>
              <div>불편</div>
            </span>
            <span>
              <ReactStars
                count={5} size={35}
                value={circum_star}
                onChange={onStarRating2}
                color1="#e9ecef" color2="#fca730"
              />
            </span>
            <span className={cx('rating-text')}>
              <div>매우</div>
              <div>편리</div>
            </span>
          </div>
          <div className={cx('input-example')}>
          (예시) 편의점, 마트, 헬스장 등의 시설들이 단지 바로 앞에 있어서 편리하다, 하지만
                  유동인구가 많아서 밤에 시끄러울 떄가 많다 공원이 5분 거리에 있어서 산책하기 좋고
                  자전거 도로가 잘 되어있다.
          </div>
          <form
            className={cx('input-box')}
            onChange={handleCircumText}
            >
            <textarea
              className={cx('input-box')}
              type='text'
              placeholder='주변 환경의 장단점을 입력해주세요'
            />
          </form>
        </CardBody>
      </Card>
    </Collapse>

    <div className={
      collapse3
        ? cx('question-list','button-collapsed')
        : cx('question-list')
    } onClick={onToggle3}>
      <span className={cx('item')}>
        <span className=
        {
          dongFloorContents
          ? cx('check-icon','fulfill-contents')
          : cx('check-icon')
        }>
        <IoIosCheckmarkOutline />
        </span>
        <span className={cx('question-text')}>동/층 정보</span>
      </span>
      <span className={cx('arrow-icon')}>
       { collapse3
          ? <IoIosArrowDown />
          : <IoIosArrowRight/>
        }
      </span>
    </div>

    <Collapse isOpen={collapse3}>
      <Card>
        <CardBody className={cx('collapse','collapse2')}>
          <div>
            거주 하셨던 동,층 정보를 입력해주세요.
          </div>
          <div className={cx('select-dongfloor')}>
            <select className={cx('select')} onChange={handleDong}>
              <option default hidden>동선택</option>
              {
                dongFloorInfo.map(home => (
                  <option key={home.id} value={home.name}>
                    {home.name}
                  </option>
                ))
              }
          </select>
          {
            // state의 dong에 해당되는 name을 value로 가지고 있는 dong배열의
            // 인덱스에 들어있는 floor가 숫자면 1~숫자 맵핑해서 렌더링하고
            // 인덱스에 들어있는 floor가 null이면 인풋박스를 렌더링한다
            // maxFloor 초기값 0, 132동이나 245동을 선택하면 null이 업데이트됨
            typeof maxFloor === 'number'
            ? (
            <select className={cx('select')} onChange={handleFloor}>
              <option default hidden>층선택</option>
              {
                stepFloorArray.map(floor => (
                  <option key={floor} value={floor}>
                    {floor}
                  </option>
                ))
              }
            </select>
            )
            :
            (
              <form className={cx('input')} onChange={handleFloor}>
                <input
                  type='text'
                  name='floor'
                  maxLength='20'
                  placeholder='층을 직접 입력해주세요'
                  />
              </form>
            )
          }
          </div>
        </CardBody>
      </Card>
    </Collapse>

    <div className={cx('footer')}>
      <span onClick={()=>{history.push('/step1')}}>
        <FooterPrevPageButton/>
      </span>
      {
        trafficContents && circumContents && dongFloorContents
        ? <span onClick={()=>{history.push('/step3')}}>
            <FooterNextPageButton/>
          </span>
        : <span/>
      }
    </div>
  </div>
));
export default Step2View;
