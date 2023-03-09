import { FilterOutlined } from "@ant-design/icons";
import {
  Breadcrumb,
  Col,
  Divider,
  Input,
  Layout,
  Modal,
  Row,
  Select,
  Space,
  theme,
  Typography,
} from "antd";
import { Samsung } from "assets";
import Star from "features/Shop/components/Star";
import { useCallback, useState } from "react";
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

const moneyOptions = [
  {
    label: "0 VND",
    value: "0",
  },
  {
    label: "10 000 000 VND",
    value: "10000000",
  },
];

const starOptions = [
  {
    label: "0 Sao",
    value: "0",
  },
  {
    label: "5 Sao",
    value: "5",
  },
];

const ShopPage = (props: Props) => {
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

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleOk = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const handleCancel = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const handleChangeMoneyFrom = (value: string | string[]) => {
    console.log(`Selected: ${value}`);
  };

  const handleChangeMoneyTo = (value: string | string[]) => {
    console.log(`Selected: ${value}`);
  };

  const handleChangeStarFrom = (value: string | string[]) => {
    console.log(`Selected: ${value}`);
  };

  const handleChangeStarTo = (value: string | string[]) => {
    console.log(`Selected: ${value}`);
  };

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
              <FilterOutlined
                style={{ fontSize: "200%" }}
                onClick={showModal}
              />
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
      <Modal
        title=""
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className={style.filterStyle}>
          <p
            style={{
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "36px",
              lineHeight: "16px",
            }}
          >
            Filter
          </p>

          <div className={style.filterChildren}>
            <div className={style.titleLayout}>
              <div className={style.title}>
                <p
                  style={{
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "36px",
                    lineHeight: "16px",
                  }}
                >
                  Giá
                </p>
              </div>
            </div>
            <div className={style.keyValueLayout}>
              <p
                style={{
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "36px",
                  lineHeight: "16px",
                }}
              >
                Từ:
              </p>
              <Select
                size={"large"}
                defaultValue={moneyOptions[0].label}
                onChange={handleChangeMoneyFrom}
                style={{ width: 300 }}
                options={moneyOptions}
              />
            </div>
            <div className={style.keyValueLayout}>
              <p
                style={{
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "36px",
                  lineHeight: "16px",
                }}
              >
                Đến:
              </p>
              <Select
                size={"large"}
                defaultValue={moneyOptions[1].label}
                onChange={handleChangeMoneyTo}
                style={{ width: 300 }}
                options={moneyOptions}
              />
            </div>
          </div>
          <div className={style.filterChildren}>
            <div className={style.titleLayout}>
              <div className={style.title}>
                <p
                  style={{
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "36px",
                    lineHeight: "16px",
                  }}
                >
                  Đánh giá
                </p>
              </div>
            </div>
            <div className={style.keyValueLayout}>
              <p
                style={{
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "36px",
                  lineHeight: "16px",
                }}
              >
                Từ:
              </p>
              <Select
                size={"large"}
                defaultValue={starOptions[0].label}
                onChange={handleChangeStarFrom}
                style={{ width: 300 }}
                options={starOptions}
              />
            </div>
            <div className={style.keyValueLayout}>
              <p
                style={{
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "36px",
                  lineHeight: "16px",
                }}
              >
                Đến:
              </p>
              <Select
                size={"large"}
                defaultValue={starOptions[1].label}
                onChange={handleChangeStarTo}
                style={{ width: 300 }}
                options={starOptions}
              />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ShopPage;
