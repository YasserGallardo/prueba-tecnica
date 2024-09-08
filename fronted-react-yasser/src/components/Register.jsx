import { useState } from "react";
import { Button, Card, Col, Form, Input, notification, Row } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/authActions";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    firstname: "",
    lastname: "",
    country: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const handleRegister = async () => {
    const result = await dispatch(register(userData));
    if (result.meta.requestStatus === "fulfilled") {
      notification.success({ message: "Registro exitoso!" });
      navigate("/welcome");
    } else {
      notification.error({
        message: "Error en el registro",
        description: error,
      });
    }
  };

  return (
    <Row
      justify="center"
      align="middle"
      style={{
        height: "100vh",
        backgroundColor: "#f0f2f5",
      }}
    >
      <Col>
        <Card title="Registro de usuario" style={{ width: 400 }}>
          <Form onFinish={handleRegister}>
            <Form.Item
              label="Usuario"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Ingrese su nombre de usuario!",
                },
              ]}
            >
              <Input
                value={userData.username}
                onChange={(e) =>
                  setUserData({ ...userData, username: e.target.value })
                }
              />
            </Form.Item>
            <Form.Item
              label="Contraseña"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Ingrese una contraseña!",
                },
              ]}
            >
              <Input.Password
                value={userData.password}
                onChange={(e) =>
                  setUserData({ ...userData, password: e.target.value })
                }
              />
            </Form.Item>
            <Form.Item
              label="Nombre"
              name="firstname"
              rules={[
                {
                  required: true,
                  message: "Ingrese sus nombres!",
                },
              ]}
            >
              <Input
                value={userData.firstname}
                onChange={(e) =>
                  setUserData({ ...userData, firstname: e.target.value })
                }
              />
            </Form.Item>
            <Form.Item
              label="Apellido"
              name="lastname"
              rules={[
                {
                  required: true,
                  message: "Ingrese sus apellidos!",
                },
              ]}
            >
              <Input
                value={userData.lastname}
                onChange={(e) =>
                  setUserData({ ...userData, lastname: e.target.value })
                }
              />
            </Form.Item>
            <Form.Item
              label="País"
              name="country"
              rules={[
                {
                  required: true,
                  message: "Ingrese su país!",
                },
              ]}
            >
              <Input
                value={userData.country}
                onChange={(e) =>
                  setUserData({ ...userData, country: e.target.value })
                }
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                style={{ width: "100%" }}
              >
                Registrarse
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default Register;
