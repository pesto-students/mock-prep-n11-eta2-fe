import React from 'react'
import { Form, Input, Button, Radio,Checkbox,Row,Col } from 'antd';

export default function QuizOptionForm({options,submit,multiple,attempt,attempted}) {


 

    return (
    <div>
        <Form name="basic" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} initialValues={{ remember: true }}>
             
                {!multiple ?
                    <Form.Item name="radio-group" required="true">
                        {attempt ?
                            <Radio.Group disabled>
                                {options.map((e, index) => (
                                    <Radio onClick={() => attempted(index)} className='options' key={index} onChange={submit} value={e.answer_a}>{e.answer_a}</Radio>
                                ))}
                            </Radio.Group> :
                            <Radio.Group >
                                {options.map((e, index) => (
                                    <Radio onClick={() => attempted(index)} className='options' key={index} onChange={submit} value={e.answer_a}>{e.answer_a}</Radio>
                                ))}
                            </Radio.Group>
                        }
                    </Form.Item>
                    :
                    <Form.Item name="radio-group" required="true">
                        <Checkbox.Group>
                                {options.map((e, index) => (
                                    <Checkbox className='options' value={e.answer_a} style={{ lineHeight: '32px' }}> { e.answer_a}
                                    </Checkbox>
                                ))}
                        </Checkbox.Group>
                    </Form.Item>
                }
        </Form> 
    </div>
    )
}
