import React from 'react'
import { Form, Input, Button } from 'antd';
import "./Forms.css"

export default function TopicsForm ({submitFunction,formFields,buttonValue}) {

    formFields = Object.keys(formFields)
    return (
    <div>
            <Form name="control-hooks form" onFinish={submitFunction} autoComplete="on">
                {formFields.map((key,index) => (
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