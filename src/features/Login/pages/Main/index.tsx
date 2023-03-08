import {
  Row,
  Col,
  Space,
  Card,
  Input,
  Checkbox,
  Typography,
  Button,
} from "antd";
import { Logo2 } from "assets";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  LockOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { CheckboxChangeEvent } from "antd/es/checkbox";

import React, { useCallback } from "react";
import style from "./mystyle.module.css";
import { useNavigate } from "react-router-dom";

type Props = {};

const LoginPage = (props: Props) => {
  const navigate = useNavigate();

  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const handleLogin = useCallback(() => {
    navigate("./dashboard/shop");
  }, []);
  return (
    <div className={style.rectangle4}>
      <Row>
        <Col span={8} />
        <Col span={8}>
          <Row>
            <Space
              direction="vertical"
              size="middle"
              style={{
                display: "flex",
                // flexDirection: "column",
                // justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "90%",
              }}
            >
              <div className={style.rectangle1}>
                <div className={style.rectangle2}>
                  <img src={Logo2} className={style.logo} alt="Any" />
                </div>
              </div>
              <div className={style.rectangle3}>
                <Input
                  size="large"
                  placeholder="Tên đăng nhập"
                  prefix={<UserOutlined />}
                />
                <Input.Password
                  size="large"
                  prefix={<UserOutlined />}
                  placeholder="Mật khẩu"
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                />
                <div className={style.rectangleLogin}>
                  <Row>
                    <Col span={8}>
                      <Checkbox onChange={onChange} style={{ color: "white" }}>
                        Lưu đăng nhập
                      </Checkbox>
                    </Col>

                    <Col span={8} offset={8}>
                      <Typography style={{ textAlign: "end", color: "white" }}>
                        Bạn quên mật khẩu?
                      </Typography>
                    </Col>
                  </Row>

                  <Button block ghost size="large" onClick={handleLogin}>
                    Đăng nhập
                  </Button>
                </div>

                <div className={style.rectangleHotline}>
                  <Typography
                    style={{ textAlign: "center", color: "lightgray" }}
                  >
                    Nếu bạn có thắc mắc hay cần giải đáp, vui lòng liên hệ số
                    điện thoại: 19001000
                  </Typography>
                  <Typography
                    style={{ textAlign: "center", color: "lightgray" }}
                  >
                    Bản quyền thuộc về AnyBim
                  </Typography>
                </div>
              </div>
            </Space>
          </Row>
        </Col>
        <Col span={8} />
      </Row>
    </div>
  );
};

export default LoginPage;
