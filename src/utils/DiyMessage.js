import { message } from "antd";
export default function DiyMessage(msgType, msg) {
  return message[msgType](msg);
}
