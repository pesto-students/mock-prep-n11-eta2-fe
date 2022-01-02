import React from 'react'
import { Form, Input, Button, Row, Col } from 'antd';
import "./Forms.css"

export default function Forms ({submitFunction,formFields,textArea,buttonValue}) {

    const { TextArea } = Input;
    const keys = Object.keys(formFields)
    const middleIndex = Math.ceil(keys.length / 2);
    const firstCol = keys.splice(0, middleIndex);   
    const secondCol = keys.splice(-middleIndex);

    return (
    <div>
            <Form name="control-hooks form" onFinish={submitFunction} autoComplete="on">
                <Row gutter={24}>
                    <Col span={12} style={{textAlign: 'left'}}>
                        {firstCol.map((key,index) => (
                            <Form.Item key={ index} className="form-input"  name={key}  label={key.toUpperCase()} >
                               <Input defaultValue={formFields[key]}></Input> 
                            </Form.Item>
                        ))}
                    </Col>
                    <Col span={12} style={{textAlign: 'left'}}>
                        {secondCol.map((key,index) => (
                            <Form.Item key={ index} className="form-input"   label={key.toUpperCase()} name={key}  rules={[{ required: false, message: 'Please input your username!' }]}>
                              <Input defaultValue={formFields[key]}></Input> 
                            </Form.Item>
                        ))}
                    </Col>
                </Row>
                { !textArea? <Form.Item className="form-input" name="about" label={"about".toUpperCase()} >
                    <TextArea className="about" defaultValue={textArea}  />
                </Form.Item>: <></>} 
                 
                <Button type="primary"  style={{width:"10vw !important"}} htmlType="submit">
                        {buttonValue}
                </Button> 
            </Form>
    </div>
    )
}