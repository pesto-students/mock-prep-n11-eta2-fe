import React from 'react'
import { Form, Input, Button } from 'antd';
import { Row, Col} from 'antd';
import "./interviewerForm.css"

export const InterviewerForm = ({onFinish,interviewer,about}) => {

    const { TextArea } = Input;

    const keys = Object.keys(interviewer)
    const middleIndex = Math.ceil(keys.length / 2);
    const firstCol = keys.splice(0, middleIndex);   
    const secondCol = keys.splice(-middleIndex);
  
    return (
        <div>
            <Form  name="control-hooks form" onFinish={onFinish} autoComplete="on">
                <Row gutter={24}>
                    <Col span={12} style={{textAlign: 'left'}}>
                        {firstCol.map(key => (
                            <Form.Item className="form-input"  name={key}  label={key.toUpperCase()}  rules={[{ required: false, message: 'Please input your username!' }]}>
                                <Input defaultValue={interviewer[key]}  ></Input>
                            </Form.Item>
                        ))}
                    </Col>
                    <Col span={12} style={{textAlign: 'left'}}>
                        {secondCol.map(key => (
                            <Form.Item className="form-input"   label={key.toUpperCase()} name={key}  rules={[{ required: false, message: 'Please input your username!' }]}>
                                <Input defaultValue={interviewer[key]} ></Input>
                            </Form.Item>
                        ))}
                    </Col>
                </Row>
                <Form.Item textAlign="center" >
                    <TextArea className="about" defaultValue={about} allowClear  label={"about"} name="about" rules={[{ required: false, message: 'Please input your username!' }]}  />

                    <Button type="primary"  style={{marginLeft:"40%",width:"10vw !important"}} htmlType="submit">
                        Update
                    </Button>
                 </Form.Item>
            </Form>
        </div>
    )
}
