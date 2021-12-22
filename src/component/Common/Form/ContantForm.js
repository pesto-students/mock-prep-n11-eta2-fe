import React from 'react'
import { Form, Input, Button, Row, Col } from 'antd';

import "./Forms.css"

export default function ContactForm  ({submitFunction,buttonValue,}) {

    const { TextArea } = Input;
    return (
        <div>
            <Form  name="control-hooks form" onFinish={submitFunction} autoComplete="on">
                <Form.Item className="form-input" name="name" label=" Name" >
                    <Input placeholder='David Smith'></Input> 
                </Form.Item>
                <Form.Item className="form-input" name="email" label=" Email" >
                    <Input placeholder='davidmsith@gmail.com'></Input> 
                </Form.Item>
                <Form.Item className="form-input" name="contact" label=" Contact" >
                    <Input placeholder='8553548534'></Input> 
                </Form.Item>
                <Form.Item className="form-input" name="description" label=" Description" >
                    <Input placeholder='Quer..'></Input> 
                </Form.Item>
                <Button type="primary"  style={{width:"10vw !important"}} htmlType="submit">
                        {buttonValue}
                </Button>
            </Form>
        </div>
    )
}