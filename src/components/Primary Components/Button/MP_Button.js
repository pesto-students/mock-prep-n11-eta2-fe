import './MP_Button.css'
import { Button } from 'antd';

export default function MPButton(props){
    return <Button type={props.buttonType} onClick={props.onClick} disabled={!props.isDisabled} size = {props.size} id="mainButton" className={props.className} style={{width:props.width}}>{props.buttonName}</Button>

}