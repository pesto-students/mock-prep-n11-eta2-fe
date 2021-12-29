import React from 'react'
import { Form, Input, Button,Select } from 'antd';
import "./Forms.css"
import { Radio } from 'antd';
import TextArea from 'antd/lib/input/TextArea';

export default function QueryForm ({submitFunction,formFields,buttonValue,description,status}) {

    const [value, setValue] = React.useState("new");
    const keys = Object.keys(formFields)
    console.log(status)
    const onChange = e => {
        setValue(e.target.value);
    };
 
    return (
    <div>
            <Form name="control-hooks form" onFinish={submitFunction} autoComplete="on">
                
                {keys.map((key, index) => (
                    <Form.Item key={index} className="form-input" name={key}   label={key.toUpperCase()} >
                               <Input disabled={true} defaultValue={formFields[key]}></Input> 
                            </Form.Item>
                ))}

                <Form.Item  className="form-input" name={"description"} label={"Description"} >
                    <TextArea disabled={true} defaultValue={description}></TextArea> 
                </Form.Item>

                
                <Form.Item  className="form-input" name={"comments"} label={"Add Comment"} >
                    <TextArea defaultValue={""}></TextArea> 
                </Form.Item>

                <Form.Item className="form-input" value={value} name={"status"} label={"Status"} >
                    <Radio.Group onChange={onChange} value={value} >
                        <Radio value="new">New</Radio>
                        <Radio value="progress">Progress</Radio>
                            <Radio value="completed">Completed</Radio>
                    </Radio.Group>
                </Form.Item>

                   
                <Button type="primary"  style={{width:"10vw !important"}} htmlType="submit">
                        {buttonValue}
                </Button> 
            </Form>
    </div>
    )
}