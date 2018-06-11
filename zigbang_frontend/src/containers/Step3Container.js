import React, { Component } from 'react';
import Step3View from 'components/StepView/Step3View'

class Step3Container extends Component {
  state = {
        '자가 거주': false,
        '전세 또는 월세': false,
        //
        '2013년 거주': false,
        '2014년 거주': false,
        '2015년 거주': false,
        '2016년 거주': false,
        '2017년 거주': false,
        '현재 거주 중': false,
        //
        '20대': false,
        '30대': false,
        '40대': false,
        '50대': false,
        '60대 이상': false,
        //
        '남자': false,
        '여자': false,
        //
        '기혼': false,
        '미혼': false,
  }
  handleResiType1 = () => {
    this.setState({
      '자가 거주': !this.state['자가 거주'],
      '전세 또는 월세': false
    })
  }
  handleResiType2 = () => {
    this.setState({
      '자가 거주': false,
      '전세 또는 월세': !this.state['전세 또는 월세']
    })
  }

  handleResiPeriod1= () => {
    this.setState({
      '2013년 거주': !this.state['2013년 거주'],
      '2014년 거주': false,
      '2015년 거주': false,
      '2016년 거주': false,
      '2017년 거주': false,
      '현재 거주 중': false,
    })
  }
  handleResiPeriod2= () => {
    this.setState({
      '2013년 거주': false,
      '2014년 거주': !this.state['2014년 거주'],
      '2015년 거주': false,
      '2016년 거주': false,
      '2017년 거주': false,
      '현재 거주 중': false,
    })
  }
  handleResiPeriod3= () => {
    this.setState({
      '2013년 거주': false,
      '2014년 거주': false,
      '2015년 거주': !this.state['2015년 거주'],
      '2016년 거주': false,
      '2017년 거주': false,
      '현재 거주 중': false,
    })
  }
  handleResiPeriod4= () => {
    this.setState({
      '2013년 거주': false,
      '2014년 거주': false,
      '2015년 거주': false,
      '2016년 거주': !this.state['2016년 거주'],
      '2017년 거주': false,
      '현재 거주 중': false,
    })
  }
  handleResiPeriod5= () => {
    this.setState({
      '2013년 거주': false,
      '2014년 거주': false,
      '2015년 거주': false,
      '2016년 거주': false,
      '2017년 거주': !this.state['2017년 거주'],
      '현재 거주 중': false,
    })
  }
  handleResiPeriod6= () => {
    this.setState({
      '2013년 거주': false,
      '2014년 거주': false,
      '2015년 거주': false,
      '2016년 거주': false,
      '2017년 거주': false,
      '현재 거주 중': !this.state['현재 거주 중']
    })
  }
  handleAge1 = () => {
    this.setState({
      '20대': !this.state['20대'],
      '30대': false,
      '40대': false,
      '50대': false,
      '60대 이상': false
    })
  }
  handleAge2 = () => {
    this.setState({
      '20대': false,
      '30대': !this.state['30대'],
      '40대': false,
      '50대': false,
      '60대 이상': false
    })
  }
  handleAge3 = () => {
    this.setState({
      '20대': false,
      '30대': false,
      '40대': !this.state['40대'],
      '50대': false,
      '60대 이상': false
    })
  }
  handleAge4 = () => {
    this.setState({
      '20대': false,
      '30대': false,
      '40대': false,
      '50대': !this.state['50대'],
      '60대 이상': false
    })
  }
  handleAge5 = () => {
    this.setState({
      '20대': false,
      '30대': false,
      '40대': false,
      '50대': false,
      '60대 이상': !this.state['60대 이상']
    })
  }
  handleSex1 = () => {
    this.setState({
      '남자': !this.state['남자'],
      '여자': false
    })
  }
  handleSex2 = () => {
    this.setState({
      '남자': false,
      '여자': !this.state['여자']
    })
  }
  handleMaritalStat1 = () => {
    this.setState({
      '기혼': !this.state['기혼'],
      '미혼' : false
    })
  }
  handleMaritalStat2 = () => {
    this.setState({
      '기혼': false,
      '미혼' : !this.state['미혼']
    })
  }

  componentDidUpdate(nextProps,nextState){
    // state에서 true인 값들만 다 추출해서 로컬스토리지로 던진다
    // 텍스트 형태로 파싱이 되서 들어가기때문에 좀 길어져도 나중에 불러올때 편한듯
    // storage.setItem(keyName, keyValue);
    // storage.removeItem(keyName);
    for(let prop in this.state){
      if(this.state[prop]){
        switch(prop){
          case '자가 거주' : localStorage.setItem('거주 형태',prop)
          break;
          case '전세 또는 월세': localStorage.setItem('거주 형태',prop)
          break;
          case '2013년 거주' : localStorage.setItem('거주 시기',prop)
          break;
          case '2014년 거주' : localStorage.setItem('거주 시기',prop)
          break;
          case '2015년 거주' : localStorage.setItem('거주 시기',prop)
          break
          case '2016년 거주' : localStorage.setItem('거주 시기',prop)
          break
          case '2017년 거주' : localStorage.setItem('거주 시기',prop)
          break
          case '현재 거주 중' : localStorage.setItem('거주 시기',prop)
          break
          case '20대' : localStorage.setItem('연령',prop)
          break
          case '30대' : localStorage.setItem('연령',prop)
          break
          case '40대' : localStorage.setItem('연령',prop)
          break
          case '50대' : localStorage.setItem('연령',prop)
          break
          case '60대 이상' : localStorage.setItem('연령',prop)
          break
          case '남자' : localStorage.setItem('성별',prop)
          break
          case '여자' : localStorage.setItem('성별',prop)
          break
          case '기혼' : localStorage.setItem('결혼여부',prop)
          break
          case '미혼' : localStorage.setItem('결혼여부',prop)
          break
          default: return null;
        }
      }
    }
  }

  render() {
    const {
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
      handleMaritalStat2
    } = this

    let fulfillConditon = 0
    let allowNextPage = false
    for(let props in this.state){
      if(this.state[props]) ++fulfillConditon
    }
    if(fulfillConditon === 5) {
      allowNextPage = true
    }
    return (
      <Step3View
        handleResiType1={handleResiType1}
        handleResiType2={handleResiType2}
        handleResiPeriod1={handleResiPeriod1}
        handleResiPeriod2={handleResiPeriod2}
        handleResiPeriod3={handleResiPeriod3}
        handleResiPeriod4={handleResiPeriod4}
        handleResiPeriod5={handleResiPeriod5}
        handleResiPeriod6={handleResiPeriod6}
        handleAge1={handleAge1}
        handleAge2={handleAge2}
        handleAge3={handleAge3}
        handleAge4={handleAge4}
        handleAge5={handleAge5}
        handleSex1={handleSex1}
        handleSex2={handleSex2}
        handleMaritalStat1={handleMaritalStat1}
        handleMaritalStat2={handleMaritalStat2}
        myhome={this.state['자가 거주']}
        rent={this.state['전세 또는 월세']}
        until13={this.state['2013년 거주']}
        until14={this.state['2014년 거주']}
        until15={this.state['2015년 거주']}
        until16={this.state['2016년 거주']}
        until17={this.state['2017년 거주']}
        now={this.state['현재 거주 중']}
        age20={this.state['20대']}
        age30={this.state['30대']}
        age40={this.state['40대']}
        age50={this.state['50대']}
        age60={this.state['60대 이상']}
        male={this.state['남자']}
        female={this.state['여자']}
        yes={this.state['기혼']}
        no={this.state['미혼']}
        allowNextPage={allowNextPage}
      />
    );
  }
}

export default Step3Container;