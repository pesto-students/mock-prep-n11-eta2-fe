import {dataActions} from "../Actions/dataAction";

export default function dataReducer (state = {data : []},action){
    switch(action.type){
        case dataActions.setData:
            return state.data = action.data
        default:
            return state;
    }

}