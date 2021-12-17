const baseUrl = "https://mockprep.herokuapp.com"

//Get
export const getInterviewers = baseUrl + "/interviewer/getInterviewers"
export const getStudents = baseUrl + "/student/getStudents"
export const getPricing = baseUrl+"/pricing/getPricings"
export const getReviews = baseUrl + "/appReview/getReviews"
export const getTopics = baseUrl + "/topic/getTopics"
export const getDashboards = baseUrl + "/dashboard/getData"
export const getAdminDashboard = baseUrl + "/adminDashboard/getData"
export const getResources= baseUrl + "/resource/getResources"

// Delete
export const deleteInterviewer = baseUrl + "/interviewer/deleteInterviewer/"
export const deleteStudent = baseUrl + "/student/deleteStudent/"
export const daleteResource = baseUrl + "/resource/getResources"

// Update
export const updateInterviewer = baseUrl + "/interviewer/updateInterviewer/"
export const updateStudent = baseUrl + "/student/updateStudent/"
export const updateResource = baseUrl + "/resource/getResources"

// FindbyId
export const getInterviewerById = baseUrl + "/interviewer/getInterviewer/"
export const getStudentById = baseUrl + "/student/getStudent/"
export const getResourById = baseUrl + "/resource/getResource"

//Insert
export const insertTopic = baseUrl + "/topic/addTopic"
export const insertResource = baseUrl + "/resource/addResource"

