import { UserOutlined } from "@ant-design/icons";
import { Form, Input, Typography } from "antd";
import React from "react";

type Props = {
  //của formik trả về
  field: any;
  form: any;
  //của mình tự định nghĩa
  size: string;
  placeholder: "";
  prefix?: any;
  iconRender: any;

  type: "password";
  disabled: false;
};

const PasswordField = (props: Props) => {
  const { field, form, type, size, placeholder, disabled, prefix, iconRender } =
    props;
  const { name, value, onChange, onBlur } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];
  return (
    <Form.Item>
      <Input.Password
        id={name}
        size={size}
        placeholder={placeholder}
        prefix={prefix}
        {...field}
      />
      {showError && (
        <Typography.Text style={{ color: "black" }}>
          {errors[name]}
        </Typography.Text>
      )}
    </Form.Item>
  );
};

export default PasswordField;
