import React, { Component } from 'react';
import Step4View from 'components/StepView/Step4View'

class Step4Container extends Component {
  state={
    '나이': null,
    '성별': null,
    '날짜': null,
    '거주시기': null,
    '거주형태': null,
    '결혼여부': null,
    '교통점수': null,
    '교통텍스트': null,
    '환경점수': null,
    '환경텍스트': null
  }

  componentDidMount(){
    const date = new Date()
    const year = date.getYear() - 100
    const month = date.getMonth()
    const day = date.getDate()
    this.setState({
      '나이': localStorage.getItem('연령'),
      '성별': localStorage.getItem('성별'),
      '날짜': `${year}.${month}.${day}`,
      '거주시기': localStorage.getItem('거주 시기'),
      '거주형태': localStorage.getItem('거주 형태'),
      '결혼여부': localStorage.getItem('결혼여부'),
      '교통점수': localStorage.getItem('교통여건 점수'),
      '교통텍스트': localStorage.getItem('교통여건 평가'),
      '환경점수': localStorage.getItem('주변환경 점수'),
      '환경텍스트': localStorage.getItem('주변환경 평가')
    })
  }

  render() {
    let age,sex
    this.state['성별'] === '남자'
    ? sex = 'm'
    : sex = 'w'
    switch(this.state['나이']){
      case '20대': age = 20
      break
      case '30대': age = 30
      break
      case '40대': age = 40
      break
      case '50대': age = 50
      break
      case '60대': age = 60
      break
      default: return null;
    }
    const imagesrc= `http://s.zigbang.com/v2/danji/review_${sex}_${age}.png`
    return (
      <Step4View
        age={this.state['나이']}
        sex={this.state['성별']}
        date={this.state['날짜']}
        whenYouLive={this.state['거주시기']}
        resiType={this.state['거주형태']}
        marrital={this.state['결혼여부']}
        trafficScore={this.state['교통점수']}
        trafficText={this.state['교통텍스트']}
        envirScore={this.state['환경점수']}
        envirText={this.state['환경텍스트']}
        imagesrc={imagesrc}
      />
    )
  }
}

export default Step4Container;