import { UserOutlined } from "@ant-design/icons";
import { Form, Input, Typography } from "antd";
import React from "react";

type Props = {
  field: any;
  form: any;

  size: string;
  placeholder: "";
  prefix?: any;
  type: "text";
  disabled: false;
};

const InputField = (props: Props) => {
  const { field, form, type, size, placeholder, disabled, prefix } = props;
  const { name, value, onChange, onBlur } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];
  return (
    <Form.Item>
      <Input
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

export default InputField;
