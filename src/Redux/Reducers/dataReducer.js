

export default function dataReducer (state = {adminDashboard : {}},action){
    switch(action.type){
        case 'SET_DATA':
            return state.data = action.data
        case 'SET_ADMIN_DATA':{
            return {
                ...state,
                adminDashboard : action.data
            }
        }
        case 'SET_LANDING_ANALYTICS':{
            return {
                ...state,
                analyticsLandingData : action.data
            }
        }
        case 'SET_INTERVIEWER' :{
            return {
                ...state,
                interviewerData : action.data
            }
        }
        case "SET_TESTIMONIALS" :{
            return {
                ...state,
                testimonials : action.data
            }
        }

        default:
            return state;
    }

}