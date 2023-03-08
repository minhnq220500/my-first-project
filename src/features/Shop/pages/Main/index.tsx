import { FilterOutlined } from "@ant-design/icons";
import {
  Breadcrumb,
  Col,
  Divider,
  Input,
  Layout,
  Row,
  Space,
  theme,
  Typography,
} from "antd";
import { Samsung } from "assets";
import Star from "features/Shop/components/Star";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./mystyle.module.css";
const { Content } = Layout;

type Props = {};

type Phone = {
  phoneId: string;
  phoneName: string;
  phonePrice: string;
  star: number;
  phoneImage: string;
};

const listPhone = [
  {
    phoneId: "1",
    phoneName: "Samsung Galaxy A31",
    phonePrice: "6 940 000 VND",
    star: 5,
    phoneImage: Samsung,
  },
  {
    phoneId: "2",
    phoneName: "Samsung Galaxy A31",
    phonePrice: "6 940 000 VND",
    star: 5,
    phoneImage: Samsung,
  },
  {
    phoneId: "3",
    phoneName: "Samsung Galaxy A31",
    phonePrice: "6 940 000 VND",
    star: 5,
    phoneImage: Samsung,
  },
  {
    phoneId: "4",
    phoneName: "Samsung Galaxy A31",
    phonePrice: "6 940 000 VND",
    star: 5,
    phoneImage: Samsung,
  },
  {
    phoneId: "5",
    phoneName: "Samsung Galaxy A31",
    phonePrice: "6 940 000 VND",
    star: 5,
    phoneImage: Samsung,
  },
  {
    phoneId: "6",
    phoneName: "Samsung Galaxy A31",
    phonePrice: "6 940 000 VND",
    star: 5,
    phoneImage: Samsung,
  },
];
const ShopPage = (props: Props) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const navigate = useNavigate();

  const { Title } = Typography;
  const { Search } = Input;

  const onSearch = (value: string) => console.log(value);

  const handleOnClickPhone = (phoneId: string) => {
    console.log(phoneId);
    navigate(`./${phoneId}`);
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
          <div className={style.headerTitleAndSearch}>
            <Space
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "flex-start",
              }}
            >
              <Title level={3} style={{ fontWeight: "bold" }}>
                Shop
              </Title>
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>Shop</Breadcrumb.Item>
              </Breadcrumb>
            </Space>
            <div className={style.searchAndFilter}>
              <Search placeholder="Search..." onSearch={onSearch} enterButton />
              <FilterOutlined style={{ fontSize: "200%" }} />
            </div>
          </div>
          <Divider />
          <Row gutter={[16, 8]}>
            {listPhone.map((phone: Phone) => {
              return (
                <Col
                  span={12}
                  onClick={() => handleOnClickPhone(phone.phoneId)}
                  className={style.column}
                >
                  <div className={style.phoneLayout}>
                    <img
                      src={phone.phoneImage}
                      className={style.phoneImage}
                      alt="Samsung"
                    />
                    <div className={style.informationText}>
                      <h1>{phone.phoneName}</h1>
                      <div className={style.priceAndStar}>
                        <Title level={1}>{phone.phonePrice}</Title>
                        <Star starNumber={phone.star} />
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Content>
      </Layout>
    </div>
  );
};

export default ShopPage;
