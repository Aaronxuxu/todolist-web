import { message } from "antd";
import axios from "axios";

import { GET } from "../utils/const";
export default function ajax(url, method = GET, data = {}) {
  return new Promise(function (resolve, reject) {
    let promise;
    if (method === GET) {
      axios.get(url, { params: data });
    } else {
      axios.post(url, data);
    }
    promise
      .then((res) => resolve(res.data))
      .catch((err) => message.error(`请求失败，失败原因：${err.message}`));
  });
}
