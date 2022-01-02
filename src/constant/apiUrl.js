const baseUrl = "https://mockprep.herokuapp.com";
// const baseUrl = "http://localhost:8080";

//Get
export const getInterviewers = baseUrl + "/interviewer/getData";
export const getStudents = baseUrl + "/student/getData";
export const getPricing = baseUrl + "/pricing/getData";
export const getReviews = baseUrl + "/appReview/getData";
export const getTopics = baseUrl + "/topic/getData";
export const getDashboards = baseUrl + "/dashboard/getData";
export const getAdminDashboard = baseUrl + "/adminDashboard/getData";
export const getResources = baseUrl + "/resource/getData";
export const getQuizList = baseUrl + "/quiz/getData";
export const getQueries = baseUrl + "/query/getData";
export const getStudentQueries = baseUrl + "/studentQuery/getData";
export const getUsers = baseUrl + "/user/getData";
export const getInterviews = baseUrl + "/interviews/getData";

// Delete
export const deleteInterviewer = baseUrl + "/interviewer/deleteData/";
export const deleteStudent = baseUrl + "/student/deleteData/";
export const daleteResources = baseUrl + "/resource/deleteData/";
export const deleteTopic = baseUrl + "/topic/deleteData/";
export const deleteQuizList = baseUrl + "/quiz/deleteData/";
export const deleteInterviews = baseUrl + "/interviews/deleteData/";

// Update
export const updateInterviewer = baseUrl + "/interviewer/updateData/";
export const updateStudent = baseUrl + "/student/updateData/";
export const updateResource = baseUrl + "/resource/updateData/";
export const updateTopic = baseUrl + "/topic/updateData/";
export const updateQuery = baseUrl + "/query/updateData/";
export const updateStudentQuery = baseUrl + "/studentQuery/updateData/";
export const updateInterviews = baseUrl + "/interviews/updateData/";

// FindbyId
export const getInterviewerById = baseUrl + "/interviewer/getData/";
export const getStudentById = baseUrl + "/student/getData/";
export const getResourById = baseUrl + "/resource/getData/";
export const getQuizContent = baseUrl + "/quiz/getData/";
export const getQuery = baseUrl + "/quiz/getData/";
export const getStudentQuery = baseUrl + "/studentQuery/getData/";
export const getInterivew = baseUrl + "/interviews/getData/";

//Insert
export const insertUser = baseUrl + "/user/addData";
export const insertTopic = baseUrl + "/topic/addData";
export const insertResource = baseUrl + "/resource/addData";
export const insertInterviewer = baseUrl + "/interviewer/addData";
export const insertStudent = baseUrl + "/student/addData";
export const insertQuery = baseUrl + "/query/addData";
export const insertStudentQuery = baseUrl + "/studentQuery/addData";
export const createRazorOrder = baseUrl + "/razorpay/createOrder";
export const insertInterviews = baseUrl + "/interviews/addData";

//Login
export const loginUser = baseUrl + "/user/loginUser";
