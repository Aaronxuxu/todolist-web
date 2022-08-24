import { getCookies } from "../../utils/cookies";
import { LOGIN, LOGOUT } from "../../utils/const";

const init = getCookies("userInfo") || {};

const loginState = function (prev = init, action) {
  const { type, data } = action;
  switch (type) {
    case LOGIN:
      return data;
    case LOGOUT:
      return {};
    default:
      return prev;
  }
};
export default loginState;
