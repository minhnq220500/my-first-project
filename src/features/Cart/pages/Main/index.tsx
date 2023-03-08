import {
  Breadcrumb,
  Col,
  Divider,
  Layout,
  Row,
  Space,
  theme,
  Typography,
} from "antd";
import { Samsung } from "assets";
import { useState } from "react";
import style from "./mystyle.module.css";
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

const Cart = (props: Props) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const { Title } = Typography;

  const handleOnClickPhone = (phoneId: string) => {
    console.log(phoneId);
    // navigate(`./${phoneId}`);
  };

  return (
    <div className={style.main}>
      <Layout style={{ padding: "0 24px 24px" }}>
        <Content
          style={{
            padding: 24,
            margin: 0,
            background: colorBgContainer,
          }}
        >
          <div className={style.headerTitleAndNumber}>
            <Space
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "flex-start",
              }}
            >
              <Title level={3} style={{ fontWeight: "bold" }}>
                Cart
              </Title>
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>Cart</Breadcrumb.Item>
              </Breadcrumb>
            </Space>
            <div className={style.cartNumber}>
              <p
                style={{
                  fontFamily: "Roboto",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "16px",
                }}
              >
                2 items in bag
              </p>
            </div>
          </div>
          <Divider />
          <Row gutter={[16, 8]}>
            {listPhone.map((phone: Phone) => {
              return (
                <>
                  <Col
                    span={24}
                    onClick={() => handleOnClickPhone(phone.phoneId)}
                    className={style.column}
                  >
                    <div className={style.phoneLayout}>
                      <img
                        src={phone.phoneImage}
                        className={style.phoneImage}
                        alt="Samsung"
                      />
                      <div className={style.informationTextLayout}>
                        <h1>{phone.phoneName}</h1>
                        <p
                          style={{
                            font: "Roboto",
                            fontWeight: 400,
                            fontSize: "24px",
                            lineHeight: "40px",
                          }}
                        >
                          {phone.description}
                        </p>
                        <Title level={1}>{phone.phonePrice}</Title>
                      </div>
                      <Space
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Space size={"large"}>
                          <p className={style.textStyle}>+</p>
                          <p className={style.textStyle}>1</p>
                          <p className={style.textStyle}>-</p>
                        </Space>
                      </Space>
                    </div>
                  </Col>
                  <Divider />
                </>
              );
            })}
          </Row>
          <div className={style.paymentLayout}>
            <div className={style.payment}>
              <p>helol</p>
              <p>helol</p>
            </div>
            <div className={style.Tax}>helol</div>
            <div className={style.Total}>helol</div>
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default Cart;
