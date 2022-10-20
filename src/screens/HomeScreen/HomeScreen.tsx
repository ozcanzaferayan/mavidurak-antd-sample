import React, { useContext, useState } from "react";
import { Button, Checkbox, Col, Form, Input, Row } from "antd";
import { API_KEY, URL } from "../../config/config";
import { SignupResponse } from "./types/SignUpResponse";
import { TokenContext } from "../../App";

type Submit = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export const HomeScreen = () => {
  const { token, setToken } = useContext(TokenContext);

  const url = `${URL}/accounts:signUp?key=${API_KEY}`;

  const onFinish = (values: Submit) => {
    const postData = {
      email: values.email,
      password: values.password,
    };
    fetch(url, {
      method: "POST",
      body: JSON.stringify(postData),
    })
      .then((res) => res.json())
      .then(async (response: SignupResponse) => {
        await setToken(response.idToken);
        console.log("TOKEN DEGERI", token);
      });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Row>
      <Col span={12}>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                message: "Please input valid email!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Parola"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default HomeScreen;
