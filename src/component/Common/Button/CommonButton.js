import './CommonButton.css'
import { Button } from 'antd';

export default function CommonButton(props){
    return <Button type={props.buttonType} onClick={props.onClick} disabled={!props.isDisabled} size = {props.size} id="mainButton" className={props.className} style={{width:props.width,color:props.color}}>{props.buttonName}</Button>
}