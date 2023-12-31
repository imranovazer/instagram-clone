import React, { useContext, useState } from "react";
import AuthorizationLayout from "../../layouts/AuthorizationLayout";
import { Form, Input } from "antd";
import AuthButton from "../../components/AuthButton";
import loginApi from "./api";
import { useDispatch } from "react-redux";
import { getUserInfo } from "../../redux/reducers/userSlice";
import { AlertContex } from "../../layouts/AlertLayout";
function Login() {
  const { displayAlert } = useContext(AlertContex);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const onFinish = async (values) => {
    setError("");
    setLoading(true);
    try {
      const res = await loginApi.login(values);
      localStorage.setItem("token", res.token);
      localStorage.setItem("username", values.username);
      dispatch(getUserInfo());
      setLoading(false);
      displayAlert(true, "You logged in!");
    } catch (error) {
      setLoading(false);
      setError(error?.response?.data?.details);
      displayAlert(false, "Unable to log in");
    }
  };
  const onFinishFailed = (errorInfo) => {
    setError("");
  };
  return (
    <AuthorizationLayout login={true}>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={
          {
            //span: 16,
          }
        }
        style={{
          width: "100%",

          //maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input placeholder="Username" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>

        <Form.Item>
          <AuthButton text={loading ? "Processing..." : "Log in"} />
        </Form.Item>
      </Form>
      {error && <p className="text-red-500">{error}</p>}
    </AuthorizationLayout>
  );
}

export default Login;
