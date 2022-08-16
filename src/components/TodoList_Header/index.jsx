import React from "react";
import { connect } from "react-redux";
import { Layout, Col, Row, Dropdown, Menu, Space, Button } from "antd";
import { DownOutlined, UserOutlined, CloseOutlined } from "@ant-design/icons";
import "./index.less";
const { Header } = Layout;

const menu = (
  <Menu
    items={[
      {
        label: "个人信息",
        icon: <UserOutlined />,
        key: "0",
      },
      {
        label: "退出登录",
        icon: <CloseOutlined />,
        key: "1",
      },
    ]}
  />
);

function TodoListHeader(props) {
  const { loginState } = props;
  return (
    <Header
      style={{ background: "none", height: "40px", lineHeight: "40px" }}
      className="todoList_header"
    >
      <Row justify="end">
        <Col span={2} style={{ textAlign: "center" }}>
          {loginState && loginState.id ? (
            <Button size="large" type="text">
              登录
            </Button>
          ) : (
            <Dropdown
              overlay={menu}
              trigger={["click"]}
              placement="bottomRight"
              arrow
            >
              <Button type="text">
                <Space>
                  Click me
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
          )}
        </Col>
      </Row>
    </Header>
  );
}
export default TodoListHeader;
// export default connect(
//   (state) => ({ loginState: state.loginState }),
//   {}
// )(TodoListHeader);
