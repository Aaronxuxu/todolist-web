import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { Layout } from "antd";
import TodoListHeader from "./components/TodoList_Header";
import PageLoading from "./components/Page_Loading";
import routePath from "./utils/routePath";

import "./App.less";
const { Content } = Layout;
const TodoListHome = lazy(() => import("./pages/TodoList_Home"));
function App() {
  return (
    <>
      <TodoListHeader />
      <Content>
        <Suspense fallback={<PageLoading />}>
          <Routes>
            <Route index element={<TodoListHome />}></Route>
            {routePath.map((e) => (
              <Route key={e.key} path={e.key} element={<e.element />}></Route>
            ))}
          </Routes>
        </Suspense>
      </Content>
    </>
  );
}

export default App;
