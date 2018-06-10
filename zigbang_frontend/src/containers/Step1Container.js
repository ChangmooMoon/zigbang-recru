import React, { Component } from 'react';
import Step1View from 'components/StepView/Step1View'

class Step1Container extends Component {
  state = {
    livingPeriodOver5years : false
  }

  handleState = (state) => {
    this.setState({
      livingPeriodOver5years: !this.state.livingPeriodOver5years
    })
  }

  render() {
    const { handleState } = this
    const { livingPeriodOver5years } = this.state

    console.log(livingPeriodOver5years)
    return (
      <Step1View
        handleState={handleState}
        handleButtonStyle={livingPeriodOver5years}
      />
    );
  }
}

export default Step1Container;