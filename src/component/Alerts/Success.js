import React from 'react'
import { Alert } from 'antd';
import "./Alert.css"
export default function Success({message}) {
  
    return (
        <div id="alert">
            <Alert
                    message={message}
                    type="success"
                    showIcon
                    // action={<Button size="small" type="text">Close</Button>}
                    closable
             />
        </div>
    )
}
