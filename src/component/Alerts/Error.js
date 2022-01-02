import React from 'react'
import { Alert } from 'antd';
import "./Alert.css"

export default function Error({message}) {
  
    return (
        <div id="alert">
            <Alert
                    message={message}
                    type="error"
                    showIcon
                    // action={<Button size="small" type="text">Close</Button>}
                    closable
             />
        </div>
    )
}
