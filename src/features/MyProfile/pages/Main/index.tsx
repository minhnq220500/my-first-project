import {
  Col,
  DatePicker,
  Divider,
  Layout,
  Row,
  Select,
  Space,
  theme,
  Typography,
} from "antd";
import { Samsung, Vector } from "assets";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useState } from "react";
import style from "./mystyle.module.css";

type Option = {
  value: string;
  label: string;
};

const sexOption: Option[] = [
  {
    value: "male",
    label: "Male",
  },
  {
    value: "female",
    label: "Female",
  },
];

const handleChange = (value: string | string[]) => {
  console.log(`Selected: ${value}`);
};

const { Content } = Layout;

type Phone = {
  phoneId: string;
  phoneName: string;
  phonePrice: string;
  star: number;
  phoneImage: string;
  description: string;
};

const listPhone = [
  {
    phoneId: "1",
    phoneName: "Samsung Galaxy A31",
    phonePrice: "6 940 000 VND",
    star: 5,
    phoneImage: Samsung,
    description:
      "Galaxy A31 là mẫu smartphone tầm trung mới ra mắt đầu năm 2020 của Samsung. Thiết bị gây ấn tượng mạnh với ngoại hình thời trang, cụm 4 camera đa chức năng, vân tay dưới màn hình và viên pin khủng lên đến 5000 mAh.",
  },
  {
    phoneId: "2",
    phoneName: "Samsung Galaxy A31",
    phonePrice: "6 940 000 VND",
    star: 5,
    phoneImage: Samsung,
    description:
      "Galaxy A31 là mẫu smartphone tầm trung mới ra mắt đầu năm 2020 của Samsung. Thiết bị gây ấn tượng mạnh với ngoại hình thời trang, cụm 4 camera đa chức năng, vân tay dưới màn hình và viên pin khủng lên đến 5000 mAh.",
  },
];

type Props = {};

const MyProfile = (props: Props) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const { Title } = Typography;

  dayjs.extend(customParseFormat);
  const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY", "DD-MM-YYYY", "DD-MM-YY"];

  return (
    <div className={style.main}>
      <Layout style={{ padding: "24px 24px" }}>
        <Content
          style={{
            padding: 24,
            margin: 0,
            background: colorBgContainer,
          }}
        >
          <div className={style.headerTitle}>
            <Space
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            >
              <Title level={3} style={{ fontWeight: "bold" }}>
                My Profile
              </Title>
            </Space>
          </div>
          <Divider />
          <Row>
            <Col span={16}>
              <div className={style.userInformationLayout}>
                <div className={style.imageNameEmailLayout}>
                  <div className={style.profileImageLayout}>
                    <img
                      src={Vector}
                      className={style.profileImage}
                      alt="User Profile"
                    />
                  </div>
                  <div className={style.nameEmailLayout}>
                    <p
                      style={{
                        fontStyle: "normal",
                        fontWeight: 700,
                        fontSize: "48px",
                        lineHeight: "56px",
                      }}
                    >
                      MR. USER
                    </p>
                    <p
                      style={{
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "36px",
                        lineHeight: "42px",
                      }}
                    >
                      Email: user@gmail.com
                    </p>
                  </div>
                </div>
                <div className={style.basicInformationLayout}>
                  <div className={style.titleLayout}>
                    <p
                      style={{
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "24px",
                        lineHeight: "28px",
                      }}
                    >
                      Date of birth:
                    </p>
                    <p
                      style={{
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "24px",
                        lineHeight: "28px",
                      }}
                    >
                      Sex:
                    </p>
                    <p
                      style={{
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "24px",
                        lineHeight: "28px",
                      }}
                    >
                      Address Company:
                    </p>
                    <p
                      style={{
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "24px",
                        lineHeight: "28px",
                      }}
                    >
                      Address Home:
                    </p>
                  </div>
                  <div className={style.informationLayout}>
                    <p
                      style={{
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "24px",
                        lineHeight: "28px",
                      }}
                    >
                      <DatePicker
                        defaultValue={dayjs("01/01/2015", dateFormatList[0])}
                        format={dateFormatList}
                        size={"large"}
                        style={{ width: 200 }}
                      />
                    </p>
                    <p
                      style={{
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "24px",
                        lineHeight: "28px",
                      }}
                    >
                      <Select
                        size={"large"}
                        defaultValue={sexOption[0].value}
                        onChange={handleChange}
                        style={{ width: 200 }}
                        options={sexOption}
                      />
                    </p>

                    <p
                      style={{
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "24px",
                        lineHeight: "28px",
                        textDecoration: "underline",
                      }}
                    >
                      15, Duy Tan, Dich Vong Hau, Cau Giay, Ha Noi
                    </p>
                    <p
                      style={{
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "24px",
                        lineHeight: "28px",
                        textDecoration: "underline",
                      }}
                    >
                      15, Duy Tan, Dich Vong Hau, Cau Giay, Ha Noi
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col span={8} />
          </Row>
        </Content>
      </Layout>
    </div>
  );
};

export default MyProfile;
