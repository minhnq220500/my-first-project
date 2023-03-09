import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Checkbox, Col, Input, Row, Space, Typography } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import { Logo2 } from "assets";
import LoginForm from "features/Login/components/LoginForm";

import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import style from "./mystyle.module.css";

type Props = {};

const LoginPage = (props: Props) => {
  const navigate = useNavigate();

  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const inititalValues = {
    userName: "",
    password: "",
  };

  const handleLogin = useCallback((values: any, actions: any) => {
    navigate("./dashboard/shop");
    console.log(values);
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
                <LoginForm
                  initialValues={inititalValues}
                  onSubmit={handleLogin}
                />

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
