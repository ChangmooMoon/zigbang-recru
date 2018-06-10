import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  HomePage,
  NotFoundPage,
  Step1Page,
  Step2Page,
  Step3Page,
  Step4Page
} from "pages";


const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/step1" component={Step1Page} />
        <Route path="/step2" component={Step2Page} />
        <Route path="/step3" component={Step3Page} />
        <Route path="/step4" component={Step4Page} />>
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
};

export default App;
