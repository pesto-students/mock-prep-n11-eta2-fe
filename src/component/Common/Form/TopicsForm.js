import React from 'react'
import { Form, Input, Button,Select } from 'antd';
import "./Forms.css"

export default function TopicsForm ({submitFunction,formFields,buttonValue,topic}) {

    const keys = Object.keys(formFields)

    return (
    <div>
            <Form name="control-hooks form" onFinish={submitFunction} autoComplete="on">
                
                {keys.map((key, index) => (
                            <Form.Item key={ index} className="form-input"  name={key}  label={key.toUpperCase()} >
                               <Input defaultValue={formFields[key]}></Input> 
                            </Form.Item>
                ))}
                   
                <Button type="primary"  style={{width:"10vw !important"}} htmlType="submit">
                        {buttonValue}
                </Button> 
            </Form>
    </div>
    )
}