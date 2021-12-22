


export default function errorReducer (state = {error : null},action){
    switch(action.type){
        case 'SET_ERROR':
            state.error = action.error;
            console.log(state)
            return {
                ...state
            }
            
        default:
            return state;
    }
}