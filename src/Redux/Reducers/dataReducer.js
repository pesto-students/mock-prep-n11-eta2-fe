import {dataActions} from "../Actions/dataAction";

export default function dataReducer (state = {data : []},action){
    switch(action.type){
        case dataActions.setData:
            return state.data = action.data
        case dataActions.setInterviewer:
            return state.interviewer = action.data;
        case dataActions.setReviews:
                return state.reviews = action.data
        default:
            return state;
    }
}