import axios from 'axios';

export function getUserImg(gender = '', age = 20) {
  return axios.get(`http://s.zigbang.com/v2/danji/review_${gender}_${age}.png`);
}

export default getUserImg;
