import { useState } from "react";
import { Button, Card, Col, Form, Input, notification, Row, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/authActions";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const handleLogin = async () => {
    const result = await dispatch(login(credentials));
    if (result.meta.requestStatus === "fulfilled") {
      notification.success({ message: "Login exitoso!" });
      navigate("/welcome");
    } else {
      notification.error({ message: "Error en el login", description: error });
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
        <Card title="Login" style={{ width: 300 }}>
          <Form onFinish={handleLogin}>
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
                value={credentials.username}
                onChange={(e) =>
                  setCredentials({
                    ...credentials,
                    username: e.target.value,
                  })
                }
              />
            </Form.Item>
            <Form.Item
              label="Contraseña"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Ingrese su contraseña!",
                },
              ]}
            >
              <Input.Password
                value={credentials.password}
                onChange={(e) =>
                  setCredentials({
                    ...credentials,
                    password: e.target.value,
                  })
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
                Login
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default Login;
