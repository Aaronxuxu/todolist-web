import { login, logout } from "../../api/axios";
import { LOGIN, LOGOUT } from "../../utils/const";
import { saveCookies, delCookies } from "../../utils/cookies";
import DiyMessage from "../../utils/DiyMessage";
export const loginAction = (data) => {
  console.log(data);
};

export const logoutAction = (data) => {
  console.log(data);
  return { type: LOGOUT, data: {} };
};
