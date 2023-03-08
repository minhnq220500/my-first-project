import { ShoppingCartOutlined } from "@ant-design/icons";
import {
  Breadcrumb,
  Button,
  Divider,
  Layout,
  Space,
  theme,
  Typography,
} from "antd";
import { Capture1, Samsung } from "assets";
import Star from "features/Shop/components/Star";
import { useCallback, useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import style from "./mystyle.module.css";

const { Content } = Layout;

type Props = {};

type Phone = {
  phoneId: string;
  phoneName: string;
  phonePrice: string;
  star: number;
  phoneImage: string;
  description: string;
};

const PhoneDetail = (props: Props) => {
  const param = useParams();
  console.log(param.id);

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const { Title } = Typography;

  const navigate = useNavigate();

  const [phoneIformation, setPhoneInformation] = useState<Phone>({
    phoneId: "",
    phoneName: "",
    phonePrice: "",
    star: 0,
    phoneImage: "",
    description: "",
  });

  useEffect(() => {
    setPhoneInformation({
      phoneId: "1",
      phoneName: "Samsung Galaxy A31",
      phonePrice: "6 940 000 VND",
      star: 5,
      phoneImage: Samsung,
      description:
        "Galaxy A31 là mẫu smartphone tầm trung mới ra mắt đầu năm 2020 của Samsung. Thiết bị gây ấn tượng mạnh với ngoại hình thời trang, cụm 4 camera đa chức năng, vân tay dưới màn hình và viên pin khủng lên đến 5000 mAh.",
    });
  }, []);

  const handleOnClickCart = useCallback(() => {
    navigate("/dashboard/cart");
  }, []);

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
          <div className={style.headerTitleAndCart}>
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
                <Breadcrumb.Item>
                  <NavLink to="/dashboard/shop">Shop</NavLink>
                </Breadcrumb.Item>
                <Breadcrumb.Item>Product</Breadcrumb.Item>
              </Breadcrumb>
            </Space>
            <div className={style.cart}>
              <ShoppingCartOutlined
                style={{ fontSize: "200%" }}
                onClick={handleOnClickCart}
              />
            </div>
          </div>
          <Divider />
          <div className={style.informationLayout}>
            <div className={style.phoneLayout}>
              <img
                src={phoneIformation.phoneImage}
                className={style.phoneImage}
                alt="Samsung"
              />
              <img
                src={Capture1}
                className={style.smallPhoneImage}
                alt="smallImage"
              />
            </div>
            <div className={style.informationTextLayout}>
              <p
                style={{
                  font: "Roboto",
                  fontWeight: 700,
                  fontSize: "24px",
                  lineHeight: "16px",
                }}
              >
                {phoneIformation.phoneName}
              </p>
              <p
                style={{
                  font: "Roboto",
                  fontWeight: 400,
                  fontSize: "24px",
                  lineHeight: "40px",
                }}
              >
                {phoneIformation.description}
              </p>
              <p
                style={{
                  font: "Roboto",
                  fontWeight: 700,
                  fontSize: "36px",
                  lineHeight: "40px",
                }}
              >
                {phoneIformation.phonePrice}
              </p>
              <Star starNumber={phoneIformation.star} />
              <Space size={"large"}>
                <Button
                  type="primary"
                  size="large"
                  style={{
                    backgroundColor: "#00C2FF",
                    width: "368px",
                    height: "103px",
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: "36px",
                  }}
                >
                  Mua Ngay
                </Button>
                <Button
                  type="primary"
                  size="large"
                  style={{
                    backgroundColor: "#00FF19",
                    width: "368px",
                    height: "103px",
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: "36px",
                  }}
                >
                  Thêm vào giỏ hàng
                </Button>
              </Space>
            </div>
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default PhoneDetail;
