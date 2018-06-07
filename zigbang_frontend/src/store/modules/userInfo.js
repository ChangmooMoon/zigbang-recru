import { createAction, handleActions } from "redux-actions";
import { Map } from "immutable";
// action types

const PREVPAGE = "userInfo/PREVPAGE",
  NEXTPAGE = "userInfo/NEXTPAGE",
  CHANGE_TRAFFIC_CON_STAR = "userInfo/CHANGE_TRAFFIC_CON_STAR",
  CHANGE_TRAFFIC_CON_TEXT = "userInfo/CHANGE_TRAFFIC_CON_TEXT",
  CHANGE_CIRCUM_STAR = "userInfo/CHANGE_CIRCUM_STAR",
  CHANGE_CIRCUM_TEXT = "userInfo/CHANGE_CIRCUM_TEXT",
  CHANGE_DONG = "userInfo/CHANGE_DONG",
  CHANGE_FLOOR = "userInfo/CHANGE_FLOOR",
  CHANGE_RESI_TYPE = "userInfo/CHANGE_RESI_TYPE",
  CHANGE_RESI_PERIOD = "userInfo/CHANGE_RESI_PERIOD",
  CHANGE_AGE = "userInfo/CHANGE_AGE",
  CHANGE_SEX = "userInfo/CHANGE_SEX",
  CHANGE_MARITAL = "userInfo/CHANGE_MARITAL";

// action creators

export const prevPage = createAction(PREVPAGE, page => ({
  page: page - 1
}));
export const nextPage = createAction(NEXTPAGE, page => ({
  page: page + 1
}));
export const changeTrafficStar = createAction(
  CHANGE_TRAFFIC_CON_STAR,
  star => ({
    trafficConditionStar: star
  })
);
export const changeTrafficText = createAction(
  CHANGE_TRAFFIC_CON_TEXT,
  text => ({
    trafficConditonText: text
  })
);
export const changeCircumStar = createAction(CHANGE_CIRCUM_STAR, star => ({
  circumstanceStar: star
}));
export const changeCircumText = createAction(CHANGE_CIRCUM_TEXT, text => ({
  circumstanceText: text
}));
export const changeDong = createAction(CHANGE_DONG, value => ({
  dong: value
}));
export const changeFloor = createAction(CHANGE_FLOOR, value => ({
  floor: value
}));
export const changeResiType = createAction(CHANGE_RESI_TYPE, value => ({
  residenceType: value
}));
export const changeResiPeriod = createAction(CHANGE_RESI_PERIOD, value => ({
  residencePeriod: value
}));
export const changeAge = createAction(CHANGE_AGE, value => ({
  ages: value
}));
export const changeSex = createAction(CHANGE_SEX, value => ({
  sex: value
}));
export const changeMarital = createAction(CHANGE_MARITAL, value => ({
  maritalStatus: value
}));

// intial state
const initialState = Map({
  //============ 공용 ===========
  page: 0,
  //======== step2 state ========
  trafficConditionStar: null,
  trafficConditionText: "",
  circumstanceStar: null,
  circumstanceText: "",
  dong: null,
  floor: null,
  //======== step3 state ========
  residenceType: null,
  residencePeriod: null,
  ages: null,
  sex: null,
  maritalStatus: null
});

// reducer
export default handleActions(
  {
    [PREVPAGE]: ({ page }) => ({ page: page - 1 }),
    [NEXTPAGE]: ({ page }) => ({ page: page + 1 }),
    [CHANGE_TRAFFIC_CON_STAR]: (state, action) =>
      state.set("trafficConditionStar", action.payload),
    [CHANGE_TRAFFIC_CON_TEXT]: (state, action) =>
      state.set("trafficConditionText", action.payload),
    [CHANGE_CIRCUM_STAR]: (state, action) =>
      state.set("circumstanceStar", action.payload),
    [CHANGE_CIRCUM_TEXT]: (state, action) =>
      state.set("trafficConditionText", action.payload),
    [CHANGE_DONG]: (state, action) => state.set("dong", action.payload),
    [CHANGE_FLOOR]: (state, action) => state.set("floor", action.payload),
    [CHANGE_RESI_TYPE]: (state, action) =>
      state.set("residenceType", action.payload),
    [CHANGE_RESI_PERIOD]: (state, action) =>
      state.set("residencePeriod", action.payload),
    [CHANGE_AGE]: (state, action) => state.set("ages", action.payload),
    [CHANGE_SEX]: (state, action) => state.set("sex", action.payload),
    [CHANGE_MARITAL]: (state, action) =>
      state.set("maritalStatus", action.payload)
  },
  initialState
);
