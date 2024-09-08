import React, { useState, useEffect } from "react";
import {
  Card,
  Avatar,
  Col,
  Row,
  Divider,
  List,
  Typography,
  notification,
  Skeleton,
} from "antd";
import { MailOutlined, GlobalOutlined, PhoneOutlined } from "@ant-design/icons";
import useAuthenticatedApi from "../hooks/useAuthenticatedApi";
import profilePic from "../assets/profile.jpg"; // Asegúrate de ajustar esta ruta
const { Title, Text } = Typography;

const Welcome = () => {
  const [personalData, setPersonalData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const api = useAuthenticatedApi();

  useEffect(() => {
    const fetchPersonalData = async () => {
      try {
        const response = await api.post("/api/v1/personal-information"); // Ajusta el endpoint según sea necesario
        const { name, lastname, country, phone, about, email } = response.data;
        setPersonalData({
          name: name,
          surname: lastname,
          email: email,
          phone: phone,
          country: country,
          about: about,
        });
        notification.success({
          message: "Datos cargados",
          description: "La información personal se ha cargado correctamente.",
        });
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        notification.error({
          message: "Error",
          description: "No se pudieron obtener los datos personales.",
        });
      }
    };

    fetchPersonalData();
  }, []);

  return (
    <Row
      justify="center"
      align="middle"
      style={{
        height: "100vh",
        backgroundColor: "#f0f2f5",
        padding: "20px",
      }}
    >
      <Col xs={24} sm={20} md={16} lg={12} xl={8}>
        <Card
          bordered={false}
          style={{
            width: "100%",
            padding: "20px",
            textAlign: "center",
            borderRadius: "10px",
          }}
        >
          {!personalData ? (
            <Skeleton active></Skeleton>
          ) : (
            <>
              <Avatar
                size={100}
                src={profilePic}
                style={{ backgroundColor: "#87d068", marginBottom: "20px" }}
              />
              <Title level={2}>
                {personalData.name} {personalData.surname}
              </Title>
              <Divider />
              <List
                bordered
                dataSource={[
                  {
                    icon: <MailOutlined />,
                    label: "Email",
                    value: personalData.email,
                  },
                  {
                    icon: <PhoneOutlined />,
                    label: "Teléfono",
                    value: personalData.phone,
                  },
                  {
                    icon: <GlobalOutlined />,
                    label: "País",
                    value: personalData.country,
                  },
                ]}
                renderItem={(item) => (
                  <List.Item>
                    {item.icon}
                    <Text strong style={{ marginLeft: "10px" }}>
                      {item.label}:
                    </Text>
                    <Text style={{ marginLeft: "10px" }}>{item.value}</Text>
                  </List.Item>
                )}
              />
              <Divider />
              <Title level={4}>Acerca de mí</Title>
              <Text>{personalData.about}</Text>
            </>
          )}
        </Card>
      </Col>
    </Row>
  );
};

export default Welcome;
