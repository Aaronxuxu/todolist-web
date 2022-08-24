import { GET, POST } from "../utils/const";
import ajax from "./ajax";

// 登录
export const login = (data) => ajax("/api/login", POST, data);
// 退出请求
export const logout = (data) => ajax("/api/logout", POST, data);

// 获取登录用户的个人信息
export const getUserInfo = (id) => ajax("/api/userInfo", GET, id);

// 获取登录用户的全部每日事项
export const getUserTodo = (id) => ajax("/api/todolist", GET, id);

// 获取登录用户的单一事项
export const getUserTodoByOne = (todoId) =>
  ajax("/api/todolistByOne", GET, todoId);

// 添加每日事项（已登录）
export const addUserTodo = (val) => ajax("/api/todolist/add", POST, val);
