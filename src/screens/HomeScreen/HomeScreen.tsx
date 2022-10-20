import React from "react";
import { Button, Col, Form, Input, InputNumber, Row } from "antd";
import { POKEMON_ENDPOINT } from "../../config/config";
import { useNavigate } from "react-router";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

export const HomeScreen = () => {
  const navigate = useNavigate();

  const url = POKEMON_ENDPOINT;
  const onFinish = (values: any) => {
    const requestData = {
      fields: {
        name: {
          stringValue: values.name,
        },
      },
    };
    fetch(url, {
      method: "POST",
      body: JSON.stringify(requestData),
    })
      .then((res) => res.json())
      .then((response) => {
        navigate("/list");
      });
  };
  return (
    <Row>
      <Col>
        <Form
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
        >
          <Form.Item
            name={["name"]}
            label="Pokemon Name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};
