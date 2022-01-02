import React from "react";
import { Form, Input } from "antd";
import TextArea from "antd/lib/input/TextArea";
import "./Forms.css";

export default function ContactForm({ submitFunction }) {
  return (
    <div>
      <Form
        id="contactform"
        name="control-hooks "
        onFinish={submitFunction}
        autoComplete="on"
      >
        <Form.Item
          className="form-input"
          name="name"
          label="Name"
          rules={[{ required: true, message: "Please input your name!" }]}
          labelCol={{ span: 24 }}
        >
          <Input className="input" placeholder="David Smith"></Input>
        </Form.Item>
        <Form.Item
          className="form-input"
          name="email"
          label="Email"
          rules={[{ required: true, message: "Please input your email!" }]}
          labelCol={{ span: 24 }}
        >
          <Input className="input" placeholder="davidsmith@gmail.com"></Input>
        </Form.Item>
        <Form.Item
          className="form-input"
          name="description"
          label="Message"
          rules={[{ required: true, message: "Please input your message!" }]}
          labelCol={{ span: 24 }}
        >
          <TextArea className="input" rows={4} placeholder=""></TextArea>
        </Form.Item>

        <button type="submit" className="btn btn-primary">
          Send Query
        </button>
      </Form>
    </div>
  );
}
