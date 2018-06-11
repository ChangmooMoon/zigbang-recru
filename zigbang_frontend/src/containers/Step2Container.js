import React, { Component } from 'react';
import Step2View from 'components/StepView/Step2View'

import data from 'lib/data.json'

class Step2Container extends Component {
  state= {
    // ====== 유저 정보 ======
    '교통여건 점수' : 0,
    '교통여건 평가' : '',
    '주변환경 점수' : 0,
    '주변환경 평가': '',
    '동': null,
    '층' : null,
    //======== 컴포넌트 접힘상태 관리용 ======
    collapse1: false,
    collapse2: false,
    collapse3: false
  }
  onStarRating1 = (newRating) => {
    this.setState({
      '교통여건 점수' : newRating
    })
  }
  onStarRating2 = (newRating) => {
    this.setState({
      '주변환경 점수': newRating
    })
  }
  handleTrafficConText = (e) => {
    this.setState({
      '교통여건 평가' : e.target.value
    })
  }
  handleCircumText = (e) => {
    this.setState({
      '주변환경 평가': e.target.value
    })
  }
  handleDong = (e) => {
    this.setState({
      '동': e.target.value
    })
  }
  handleFloor = (e) => {
    this.setState({
      '층': e.target.value
    })
  }
  onToggle1 = () => {
    this.setState({
      collapse1 : !this.state.collapse1,
      collapse2: false,
      collapse3: false
    })
  }
  onToggle2 = () => {
    this.setState({
      collapse1: false,
      collapse2: !this.state.collapse2,
      collapse3: false
    })
  }
  onToggle3 = () => {
    this.setState({
      collapse1: false,
      collapse2: false,
      collapse3: !this.state.collapse3
    })
  }

  componentDidUpdate(nextProps,nextState){
    for(let prop in this.state){
      localStorage.setItem(prop,JSON.stringify(this.state[prop]))
    }
  }

  render() {
    const {
      handleTrafficConText,
      handleCircumText,
      handleDong,
      handleFloor,
      onToggle1,
      onToggle2,
      onToggle3,
      onStarRating1,
      onStarRating2
    } = this
    const {
      collapse1, collapse2, collapse3
    } = this.state

    const dongFloorInfo = data.danjis[0].dong.map(home => home);
    let maxFloor = 0;
    for(let element of dongFloorInfo){
      if(element['name'] === this.state['동']){
        maxFloor = element.floor
      }
    }
    let stepFloorArray = []
    if(typeof maxFloor === 'number'){
      for(let i =1; i<maxFloor; i++){
        stepFloorArray.push(i)
      }
    }

    let trafficContents = false
    let circumContents = false
    let dongFloorContents = false

    if(this.state['교통여건 점수'] > 0 && this.state['교통여건 평가'].length>=50)
      trafficContents = true
      else trafficContents = false

    if(this.state['주변환경 점수'] > 0 && this.state['주변환경 평가'].length >=50)
      circumContents = true
      else circumContents = false

    if(this.state['동'] && this.state['층'])
      dongFloorContents = true
      else dongFloorContents = false

    return (
      <Step2View
        handleTrafficConText={handleTrafficConText}
        handleCircumText={handleCircumText}
        handleDong={handleDong}
        handleFloor={handleFloor}
        onToggle1={onToggle1}
        onToggle2={onToggle2}
        onToggle3={onToggle3}
        collapse1={collapse1}
        collapse2={collapse2}
        collapse3={collapse3}
        onStarRating1={onStarRating1}
        onStarRating2={onStarRating2}
        traffic_con_star={this.state['교통여건 점수']}
        circum_star={this.state['주변환경 점수']}
        user_dong={this.state['동']}
        dongFloorInfo={dongFloorInfo}
        maxFloor={maxFloor}
        stepFloorArray={stepFloorArray}
        trafficContents={trafficContents}
        circumContents={circumContents}
        dongFloorContents={dongFloorContents}
      />
    );
  }
}

export default Step2Container;