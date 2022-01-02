export default function dataReducer (state = {adminDashboard : {}},action){
    
    switch (action.type) {
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
            
        case 'SET_INTERVIEWER': {

            return {
                ...state,
                interviewer : action.data
            }
        }
            
        case 'SET_INTERVIEWER_LIST': {

            return {
                ...state,
                interviewerList : action.data
            }
        }
            
        case 'SET_STUDENT': {

            return {
                ...state,
                student : action.data
            }
        }
            
        case 'SET_STUDENT_LIST': {

            return {
                ...state,
                studentList : action.data
            }
        }
            
        case "SET_TESTIMONIALS" :{
            return {
                ...state,
                testimonials : action.data
            }
        }
            
        case 'SET_FEEDBACK' : {
            return {
                ...state,
                feedback : action.data
            }
        }

        case 'SET_QUIZ' :{
            return {
                ...state,
                quiz : action.data
            }
        }

        case 'SET_PACKAGE':{
            return {
                ...state,
                package : action.data
            }
        }
            
        case 'SET_PRICING':{
            return {
                ...state,
                pricing : action.data
            }
        }
        
        case 'SET_TOPIC':{
            return {
                ...state,
                topics : action.data
            }
        }
            
        case 'SET_RESOURCE':{
            return {
                ...state,
                resources : action.data
            }
        }
                
        case 'SET_QUERY':{
            return {
                ...state,
                query : action.data
            }
        }
        case 'SET_INTERVIEWS':{
            return {
                ...state,
                interviews : action.data
            }
        }
            
            
       
            
        default:
            return state;
    }
}