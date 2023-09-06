import React from "react";
import AuthorizationLayout from "../../layouts/AuthorizationLayout";
import { Form, Input } from "antd";
import AuthButton from "../../components/AuthButton";
import loginApi from "./api";
import { useDispatch } from "react-redux";
import { getUserInfo } from "../../redux/reducers/userSlice";
function Login() {
  const dispatch = useDispatch();
  const onFinish = async (values) => {
    try {
      const res = await loginApi.login(values);
      localStorage.setItem("token", res.token);
      localStorage.setItem("username", values.username);
      dispatch(getUserInfo());
    } catch (error) {
      console.log(error);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
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
          <AuthButton text={"Log in"} />
        </Form.Item>
      </Form>
    </AuthorizationLayout>
  );
}

export default Login;
