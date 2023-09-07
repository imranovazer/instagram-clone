import React, { useContext, useState } from "react";
import AuthorizationLayout from "../../layouts/AuthorizationLayout";
import { Form, Input } from "antd";
import AuthButton from "../../components/AuthButton";
import { useDispatch } from "react-redux";
import { getUserInfo } from "../../redux/reducers/userSlice";
import registerApi from "./api";
import { AlertContex } from "../../layouts/AlertLayout";
const Register = () => {
  const [error, setError] = useState("");
  const { displayAlert } = useContext(AlertContex);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const onFinish = async (values) => {
    setError("");
    setLoading(true);
    try {
      const res = await registerApi.register(values);
      localStorage.setItem("token", res.token);
      localStorage.setItem("username", values.username);
      dispatch(getUserInfo());
      setLoading(false);
      displayAlert(true, "You registered succesffully");
    } catch (error) {
      setError(error?.response?.data?.details);
      setLoading(false);
      displayAlert(false, "Unable to register");
    }
  };
  const onFinishFailed = (errorInfo) => {
    setError("");
  };
  return (
    <AuthorizationLayout login={false}>
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
          name="firstName"
          rules={[
            {
              required: true,
              message: "Please input your first name!",
            },
          ]}
        >
          <Input placeholder="First name" />
        </Form.Item>
        <Form.Item
          name="lastName"
          rules={[
            {
              required: true,
              message: "Please input your last name!",
            },
          ]}
        >
          <Input placeholder="Last name" />
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
          <AuthButton text={loading ? "Processing..." : "Register"} />
        </Form.Item>
      </Form>
      {error && <p className="text-red-500">{error}</p>}
    </AuthorizationLayout>
  );
};

export default Register;
