// const baseUrl = "https://mockprep.herokuapp.com"
const baseUrl = "http://localhost:8080"

//Get
export const getInterviewers = baseUrl + "/interviewer/getInterviewers"
export const getStudents = baseUrl + "/student/getStudents"
export const getPricing = baseUrl+"/pricing/getPricings"
export const getReviews = baseUrl + "/appReview/getReviews"
export const getTopics = baseUrl + "/topic/getTopics"
export const getDashboards = baseUrl + "/dashboard/getData"
export const getAdminDashboard = baseUrl + "/adminDashboard/getData"
export const getResources = baseUrl + "/resource/getResources"
export const getQuizList = baseUrl + "/quiz/getQuizLists"
export const getQueries = baseUrl + "/query/getData"
export const getUsers = baseUrl + "/user/getUsers"
export const getInterviews = baseUrl + "/interviews/getData"


// Delete
export const deleteInterviewer = baseUrl + "/interviewer/deleteInterviewer/"
export const deleteStudent = baseUrl + "/student/deleteStudent/"
export const daleteResources = baseUrl + "/resource/deleteResource/"
export const deleteTopic = baseUrl + "/topic/deleteTopic/"
export const deleteQuizList = baseUrl + "/quiz/deleteQuizList/"
export const deleteInterviews = baseUrl + "/interviews/deleteData/"


// Update
export const updateInterviewer = baseUrl + "/interviewer/updateInterviewer/"
export const updateStudent = baseUrl + "/student/updateStudent/"
export const updateResource = baseUrl + "/resource/updateResource/"
export const updateTopic = baseUrl + "/topic/updateTopic/"
export const updateQuery = baseUrl + "/query/addData/"
export const updateInterviews = baseUrl + "/interviews/updateData/"



// FindbyId
export const getInterviewerById = baseUrl + "/interviewer/getInterviewer/"
export const getStudentById = baseUrl + "/student/getStudent/"
export const getResourById = baseUrl + "/resource/getResource/"
export const getQuizContent = baseUrl + "/quiz/getQuizList/"
export const getQuery = baseUrl + "/quiz/getData/"
export const getInterivew = baseUrl + "/interviews/getData/"



//Insert
export const insertUser = baseUrl + "/user/addUser"
export const insertTopic = baseUrl + "/topic/addTopic"
export const insertResource = baseUrl + "/resource/addResource"
export const insertInterviewer = baseUrl + "/interviewer/addInterviewer"
export const insertStudent = baseUrl + "/student/addStudent"
export const insertQuery = baseUrl + "/query/addData"
export const createRazorOrder = baseUrl + "/razorpay/createOrder"
export const insertInterviews = baseUrl + "/interviews/addData"


//Login 
export const loginUser = baseUrl + "/user/loginUser"
