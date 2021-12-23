import React from 'react'
import { Form, Input, Button, Row, Col,Select } from 'antd';

import "./Forms.css"

export default function Forms  ({submitFunction,formFields,textArea,buttonValue,populate,about,topics}) {

    const { TextArea } = Input;
    const { Option } = Select;

    const keys = Object.keys(formFields)
    const middleIndex = Math.ceil(keys.length / 2);
    const firstCol = keys.splice(0, middleIndex);   
    const secondCol = keys.splice(-middleIndex);

    function handleChange(value) {
        console.log(`selected ${value}`);
      }
  
    return (
        <div>
            <Form name="control-hooks form" onFinish={submitFunction} autoComplete="on">
                { topics?
                <Form.Item className="form-input" name="topic" label={"Topic".toUpperCase()} >
                     <Select defaultValue="CSS" style={{ width: 120 }} >
                            {topics.map(e => (
                                <Option key={e._id} value={e.title}>{e.title}</Option>
                            ))}
                        </Select>
                </Form.Item>
                :<></>}
                <Row gutter={24}>
                    <Col span={12} style={{textAlign: 'left'}}>
                        {firstCol.map((key,index) => (
                            <Form.Item key={ index} className="form-input"  name={key}  label={key.toUpperCase()} >
                                {populate ? <Input defaultValue={formFields[key]}></Input> : <Input></Input>}
                            </Form.Item>
                        ))}
                    </Col>
                    <Col span={12} style={{textAlign: 'left'}}>
                        {secondCol.map((key,index) => (
                            <Form.Item key={ index} className="form-input"   label={key.toUpperCase()} name={key}  rules={[{ required: false, message: 'Please input your username!' }]}>
                               {populate ? <Input defaultValue={formFields[key]}></Input> : <Input></Input>}
                            </Form.Item>
                        ))}
                    </Col>
                </Row>
                { !about?
                <Form.Item className="form-input" name="about" label={"about".toUpperCase()} >
                    <TextArea className="about" defaultValue={textArea}  />
                </Form.Item>
                    : <></>} 
                 
                <Button type="primary"  style={{width:"10vw !important"}} htmlType="submit">
                        {buttonValue}
                </Button>
            </Form>
        </div>
    )
}