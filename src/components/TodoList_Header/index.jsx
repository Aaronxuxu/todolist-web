// react生态函数
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";

// 引入redux Action
import { logoutAction } from "../../redux/actions/loginState";

// 组件库
import { Layout, Col, Row, Dropdown, Menu, Space, Button, Modal } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import { DownOutlined, UserOutlined, CloseOutlined } from "@ant-design/icons";

// 引入样式
import "./index.less";
// 引入常量
import { LOGOUT } from "../../utils/const";

const { Header } = Layout;
const { confirm } = Modal;

function TodoListHeader(props) {
  // 路由跳转函数
  const navigate = useNavigate();
  // 获取redux里的state与action方法
  const { loginState, logoutAction } = props;
  // 弹出登录框
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleLogout = ({ key }) => {
    if (key === LOGOUT) {
      return confirm({
        title: "确定要退出吗？",
        content: "将清除除本地缓存外的数据。",
        icon: <InfoCircleOutlined />,
        onOk: () => {
          logoutAction();
          navigate(0);
        },
      });
    }
  };

  const menu = (
    <Menu
      onClick={handleLogout}
      items={[
        {
          label: <Link to="/userInfo">用户信息</Link>,
          icon: <UserOutlined />,
          key: "userInfo",
        },
        {
          label: "退出登录",
          icon: <CloseOutlined />,
          key: LOGOUT,
        },
      ]}
    />
  );
  return (
    <Header
      style={{
        background: "none",
        height: "auto",
        lineHeight: "40px",
        padding: "8px 50px",
      }}
      className="todoList_header"
    >
      <Row justify="end">
        <Col span={2} style={{ textAlign: "center" }}>
          {loginState && loginState.id ? (
            <Dropdown
              overlay={menu}
              trigger={["click"]}
              placement="bottomRight"
              arrow
            >
              <Button type="text" size="large">
                <Space>
                  <span className="header_drop_span">
                    {loginState.userName}
                  </span>
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
          ) : (
            <Button
              style={{ color: "#000" }}
              size="large"
              type="link"
              onClick={() => setIsModalVisible(true)}
            >
              登录
            </Button>
          )}
        </Col>
      </Row>
      <Modal
        title="登录"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        keyboard={false}
        maskStyle={{ backgroundColor: "rgba(0,0,0,0.8)" }}
      > </Modal>
    </Header>
  );
}
export default connect((state) => ({ loginState: state.loginState }), {
  logoutAction,
})(TodoListHeader);
