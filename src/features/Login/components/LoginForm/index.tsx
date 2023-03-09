import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Checkbox, Col, Input, Row, Typography } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import React from "react";
import style from "./mystyle.module.css";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { FastField } from "formik";
import InputField from "custom-fields/InputField";
import PasswordField from "custom-fields/PasswordField";

type LoginFormType = {
  initialValues: any;
  onSubmit: any;
};

const LoginForm = (props: LoginFormType) => {
  const validationSchema = Yup.object().shape({
    userName: Yup.string().required("Please input username"),
    password: Yup.string().required("Please input password"),
  });

  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <Formik
      initialValues={props.initialValues}
      validationSchema={validationSchema}
      onSubmit={props.onSubmit}
    >
      {(formikProps: any) => {
        // const { values, errors, touched } = formikProps;
        console.log({ ...formikProps });
        return (
          <div>
            <Form>
              <FastField
                name="userName"
                component={InputField}
                //
                size="large"
                placeholder="Tên đăng nhập"
                prefix={<UserOutlined />}
              />
              <FastField
                name="password"
                component={PasswordField}
                //
                size="large"
                placeholder="Mật khẩu"
                prefix={<UserOutlined />}
                iconRender={(visible: any) =>
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
                    <Typography.Link
                      style={{ textAlign: "end", color: "white" }}
                    >
                      Bạn quên mật khẩu?
                    </Typography.Link>
                  </Col>
                </Row>

                <Button block ghost size="large" htmlType="submit">
                  Đăng nhập
                </Button>
              </div>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
