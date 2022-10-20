import React from "react";
import { Button, Col, Form, Input, InputNumber, Row } from "antd";
import { POKEMON_ENDPOINT } from "../../config/config";
import { useNavigate } from "react-router";
import { useMutation, useQuery } from "@tanstack/react-query";

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
  const createPokemon = async (data: string) => {
    const requestData = {
      fields: {
        name: {
          stringValue: data,
        },
      },
    };
    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(requestData),
    });
    const json = await res.json();
    return json;
  };
  const { mutate, isLoading, error } = useMutation(createPokemon, {
    onSuccess: () => {
      console.log("SUCCESSFULL");
      navigate("/list");
    },
  });

  const url = POKEMON_ENDPOINT;

  if (isLoading) <h1>Loading</h1>;
  if (error) <h1>error</h1>;
  const onFinish = (values: any) => {
    mutate(values.name);
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
