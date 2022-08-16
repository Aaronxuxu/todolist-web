import cookie from "react-cookies";
// 添加cookies
export const saveCookies = (key, val, timers = 1) =>
  cookie.save(key, val, {
    expires: new Date(new Date().getTime() + timers * 24 * 3600 * 1000),
  });
// 删除cookies
export const delCookies = (key) => cookie.remove(key);
// 获取cookies
export const getCookies = (key) => cookie.load(key);
