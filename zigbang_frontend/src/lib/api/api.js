import axios from 'axios';

export function getUserImg(sex = '', age = 20) {
  return axios.get(`http://s.zigbang.com/v2/danji/review_${sex}_${age}.png`);
}

export default getUserImg;
