import { Tag } from 'antd';
import { Group, Person, PersonAdd, Search } from "@material-ui/icons"

export const logoUrl = "https://res.cloudinary.com/mock-prep/image/upload/v1638635421/Mockprep/mp_Logo_n7fhp6.png"

export const interviewers = [
    {
        id: 1,
        name: "Ross Taylor",
        designation: "Software Architect",
        company: "Google",
        pic: "https://res.cloudinary.com/mock-prep/image/upload/v1638305028/Mockprep/interviewers/18_ltcua7.jpg",
        skills: ["UI Design", "JavaScript"],
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.but also the leap into electronic typesetting, remaining essentially unchanged.",
        topics: ["UI Design", "JavaScript", "React", "Bootstrap", "Nodejs"],
        interviewCount: 12,
        experience:10,
        rating: 4,
        onboarded:true,
        contacts: [{ id: 1, icon: "far fa-envelope", value: "richard@gmail.com" }, { id: 2, icon: "fas fa-phone", value: "9876548534" }],
       
    },
    {
        id: 2,
        name: "Edgar Richard",
        designation: "Software Architect",
        company: "Facebook",
        pic: "https://res.cloudinary.com/mock-prep/image/upload/v1638306050/Mockprep/interviewers/54_bi3tvk.jpg",
        skills: ["UI Design", "JavaScript", "React", "Bootstrap"],
        about: "lorem jkdnfjknsdjkfnjkdsnfjknsdkjfnsd f sd fkjdsnjkfnjksdnfjknfs",
        topics: ["UI Design", "JavaScript", "React", "Bootstrap", "Nodejs"],
        interviewCount: 12,
        rating: 4,
        onboarded:true,
        contacts: [{ id: 1, icon: "far fa-envelope", value: "richard@gmail.com" }, { id: 2, icon: "fas fa-phone", value: "9876548534" }],
      
    },
    {
        id: 3,
        name: "Merlyn joseph",
        designation: "Software Architect",
        company: "Facebook",
        pic: "https://res.cloudinary.com/mock-prep/image/upload/v1638306044/Mockprep/interviewers/49_ugvvh6.jpg",
        skills: ["UI Design", "JavaScript", "React", "Bootstrap"],
        about: "lorem jkdnfjknsdjkfnjkdsnfjknsdkjfnsd f sd fkjdsnjkfnjksdnfjknfs",
        topics: ["UI Design", "JavaScript", "React", "Bootstrap", "Nodejs"],
        interviewCount: 12,
        rating: 4,
        onboarded:false,
        contacts: [{ id: 1, icon: "far fa-envelope", value: "richard@gmail.com" }, { id: 2, icon: "fas fa-phone", value: "9876548534" }],
      
    },
    {
        id: 4,
        name: "Ross Taylor",
        designation: "Software Architect",
        company: "Google",
        pic: "https://res.cloudinary.com/mock-prep/image/upload/v1638305028/Mockprep/interviewers/18_ltcua7.jpg",
        skills: ["UI Design", "JavaScript", "React", "Bootstrap"],
        about: "lorem jkdnfjknsdjkfnjkdsnfjknsdkjfnsd f sd fkjdsnjkfnjksdnfjknfs",
        topics: ["UI Design", "JavaScript", "React", "Bootstrap", "Nodejs"],
        interviewCount: 12,
        rating: 4,
        contacts: [{ id: 1, icon: "far fa-envelope", value: "richard@gmail.com" }, { id: 2, icon: "fas fa-phone", value: "9876548534" }],
      
    },
    {
        id: 6,
        name: "Merlyn joseph",
        designation: "Software Architect",
        company: "Facebook",
        pic: "https://res.cloudinary.com/mock-prep/image/upload/v1638306044/Mockprep/interviewers/49_ugvvh6.jpg",
        skills: ["UI Design", "JavaScript", "React", "Bootstrap"],
        about: "lorem jkdnfjknsdjkfnjkdsnfjknsdkjfnsd f sd fkjdsnjkfnjksdnfjknfs",
        topics: ["UI Design", "JavaScript", "React", "Bootstrap", "Nodejs"],
        interviewCount: 12,
        rating: 4,
        contacts: [{ id: 1, icon: "far fa-envelope", value: "richard@gmail.com" }, { id: 2, icon: "fas fa-phone", value: "9876548534" }],
      
    },
    {
        id: 5,
        name: "Merlyn joseph",
        designation: "Software Architect",
        company: "Facebook",
        pic: "https://res.cloudinary.com/mock-prep/image/upload/v1638306044/Mockprep/interviewers/49_ugvvh6.jpg",
        skills: ["UI Design", "JavaScript", "React", "Bootstrap"],
        about: "lorem jkdnfjknsdjkfnjkdsnfjknsdkjfnsd f sd fkjdsnjkfnjksdnfjknfs",
        topics: ["UI Design", "JavaScript", "React", "Bootstrap", "Nodejs"],
        interviewCount: 12,
        rating: 4,
        contacts: [{ id: 1, icon: "far fa-envelope", value: "richard@gmail.com" }, { id: 2, icon: "fas fa-phone", value: "9876548534" }],
      
    }
    

]

export const students = [
    {
        id: 1,
        name: "Ross Taylor",
        designation: "ASE",
        company: "Google",
        degree:"Btech",
        experience:1,
        pic: "https://res.cloudinary.com/mock-prep/image/upload/v1638311080/Mockprep/Students/67_mzwjc0.jpg",
        skills: ["UI Design", "JavaScript"],
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.but also the leap into electronic typesetting, remaining essentially unchanged.",
        topics: ["UI Design", "JavaScript", "React", "Bootstrap", "Nodejs"],
        rating: 8,
        onboarded: false,
        contacts: [{ id: 1, icon: "far fa-envelope", value: "richard@gmail.com" }, { id: 2, icon: "fas fa-phone", value: "9876548534" }], 
    },
    {
        id: 2,
        name: "Ross Taylor",
        degree: "Software Architect",
        company: "Google",
        experience:1,
        pic: "https://res.cloudinary.com/mock-prep/image/upload/v1638311080/Mockprep/Students/67_mzwjc0.jpg",
        skills: ["UI Design", "JavaScript"],
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.but also the leap into electronic typesetting, remaining essentially unchanged.",
        topics: ["UI Design", "JavaScript", "React", "Bootstrap", "Nodejs"],
        rating: 8,
        onboarded: false,
        contacts: [{ id: 1, icon: "far fa-envelope", value: "richard@gmail.com" }, { id: 2, icon: "fas fa-phone", value: "9876548534" }], 
    },
    {
        id: 3,
        name: "Ross Taylor",
        degree: "Software Architect",
        company: "Google",
        experience:1,
        pic: "https://res.cloudinary.com/mock-prep/image/upload/v1638311080/Mockprep/Students/67_mzwjc0.jpg",
        skills: ["UI Design", "JavaScript"],
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.but also the leap into electronic typesetting, remaining essentially unchanged.",
        topics: ["UI Design", "JavaScript", "React", "Bootstrap", "Nodejs"],
        rating: 8,
        onboarded: false,
        contacts: [{ id: 1, icon: "far fa-envelope", value: "richard@gmail.com" }, { id: 2, icon: "fas fa-phone", value: "9876548534" }], 
    },
    {
        id: 4,
        name: "Mohammed Taylor",
        degree: "Software Architect",
        company: "Google",
        experience:1,
        pic: "https://res.cloudinary.com/mock-prep/image/upload/v1638311080/Mockprep/Students/67_mzwjc0.jpg",
        skills: ["UI Design", "JavaScript","HTML","Bootstrap"],
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.but also the leap into electronic typesetting, remaining essentially unchanged.",
        topics: ["UI Design", "JavaScript", "React", "Bootstrap", "Nodejs"],
        rating: 8,
        onboarded: false,
        contacts: [{ id: 1, icon: "far fa-envelope", value: "richard@gmail.com" }, { id: 2, icon: "fas fa-phone", value: "9876548534" }], 
    }
]

export const sellingPointers = [
    {
        id: 1,
        icon: "far fa-file-alt",
        text: "Get your resume reviewed by interviewers"
    },
    {
        id: 2,
        icon: "fas fa-user-clock",
        text: "Receive a perfect interview preparation plans"
    },
    {
        id: 3,
        icon: "fas fa-laptop",
        text: "Give mock interviews to see where you stand"
    },
    {
        id: 4,
        icon: "fas fa-people-arrows",
        text: "Improve interviewing skills with expert guidance"
    },
    {
        id: 5,
        icon: "fas fa-handshake",
        text: "Practice behavioral interviews with top HRs"
    },
    {
        id: 6,
        icon: "fas fa-envelope-open-text",
        text: "Get quality referrals from top interviewers"
    }

]

export const packages = [
    {
        id: 1,
        title: "Mock Interview",
        description: "For people looking to practice interviews",
        icon: "fas fa-check",
        details: ["Interviewer of your choice","1 Hour Mock Interview","Detailed & Genuine Feedback","Money-back Guarantee","Session recording for analysis"]
    },
    {
        id: 2,
        title: "Interview Preparation Bundle",
        description: "For all-round interview preparation",
        icon: "fas fa-check",
        details: [
            "Interviewer of your choice",
            "Interview Preparation planning",
            "3 x Mock Interview Sessions",
            "All Session Recordings",
            "Certification for top candidates",
            "Consult mentors as required"

        ]
    },
    {
        id: 3,
        title: "Consulting Session",
        description: "For people with questions",
        icon: "fas fa-check",
        details: ["Top Interviewer","30 mins Consulting Session","Guidance & Query Solving","Session recording for self-analysis","Money-back Guarantee"]
    }

]

export const testimonials = [
    {
        id: 1,
        name: "Manish Pathak",
        company: "Amazon",
        review: "Having an Amazon mentor by my side during my interview preparation was a game-changer. High-quality guidance and support were just one call away.",
        pic: "https://res.cloudinary.com/mock-prep/image/upload/v1638311008/Mockprep/Students/76_f4ukw5.jpg",
    },
    {
        id: 1,
        name: "Gerald Rodriquez",
        company: "Facebook",
        review: "Overall, it was an amazing experience. I would highly recommend anybody who is sitting for their campus placements to at least get a mock interview session done. Trust me, it will do wonders.",
        pic: "https://res.cloudinary.com/mock-prep/image/upload/v1638311080/Mockprep/Students/67_mzwjc0.jpg",
    }
]

export const dashboardMetrics = [
    {
        id: 1,
        description: "Total Interviews",
        value: 1232
    },
    {
        id: 2,
        description: "Total Students",
        value: 4230
    },
    {
        id: 3,
        description: "Total Interviewers",
        value: 132
    }

]

export const onboardingMetrics = {
        labels: ["April","May","Jun","July","Aug","Sept","Oct","Nov"],
        datasets: [
          {
            label: "Students Onboarded",
            data: [120,103,300,140,400,340,200],
            borderColor: "#1300f4",
            backgroundColor: "royalblue"
        },
        {
                label: "Interviewers Onboarded",
                data: [80,70,40,50,80,55,23],
                borderColor: "#1300f4",
                backgroundColor: "orange"
            }
        ]
};

export const earningChartOptions = {
    
    scales: {
        x: {
            grid: {
                display:false
            }
        },
        y: {
            grid: {
                display:false
            }   
        }
    }
    
}

export const earningChartData = {
    labels: ["Jan","Feb","Mar","April","May","Jun","July","Aug","Sept","Oct","Nov"],
    datasets: [
      {
        label: "Earnings 2021",
        data: [5809,12022,11022,10030,18633,10950,12109,12201,10291,12020,12829],
        borderColor: "#1300f4",
        backgroundColor: "skyblue"
      }
    ]
};

export const BarChartOptions = {
    title: {
        display:true
    },
    scales: {
        x: {
            stacked:true,   
            grid: {
                display: false
            },
        },
        y: {
            stacked:true,   
            grid: {
                display:false
            },
            ticks: {
                display:false
            },
            legend: {
                display: false
            }
        }
    },
   
}

export const PieChartOptions = {
    title: {
        display:true
    },
    scales: {
        x: {
            stacked:true,   
            grid: {
                display: false
            },
            ticks: {
                display:false
            }
        },
        y: {
            stacked:false,   
            grid: {
                display:false
            },
            ticks: {
                display:false
            },
        }
        
    },
   
}

export const trendingData = {
    title:"Trending topics",
    labels: ["React","Javascript","Html/CSS","Bootstrap"],
    datasets: [
      {
        label: "Trending topics",
        data: [40,32,12,16],
        borderColor: "#1300f4",
        backgroundColor: ["royalblue","lightgreen","orange","purple"]
    }]
};

export const adminDashboardMetrics = [
    {
        id: 1,
        description: "Total Interviews",
        value: 1232,
        icon:<Person/>
    },
    {
        id: 2,
        description: "Total Students",
        value: 4230,
        icon:<PersonAdd/>
    },
    {
        id: 3,
        description: "Total Interviewers",
        value: 132,
        icon:<Group/>
    },
    {
        id: 4,
        description: "Total Visitors",
        value: 1232,
        icon:<Search/>
    }

]

export const resourceChartData = {
    datasets: [{
        label: 'Income breakdown package wise',
        data: [60, 22, 18],
        borderColor: "#1300f4",
        backgroundColor: [
            'royalblue',
            'orange',
            'grey'
            
          ],
    }],

    labels: [
        'Mock Interview',
        'Interview Bundle',
        'Mentorship'
    ]
};

export const resourceChartOptions = {
    responsive: true,
    cutout: 99,
    plugins: {
      legend: {
            position: 'bottom',
            labels: {
                usePointStyle: true,
              }
        },
        title: {
            text: 'Package revenue breakup',
            align: 'center',
            offsetY: 330
        },
        plotOptions: {
            pie: {
              customScale: 0.75,
              offsetY: -40
            }
         },
    }
}

export const totalSaleOption = {
    scales: {
        x: {
            grid: {
                display: false,
            },
            ticks: {
                display: true
            }
        },
        y: {
            grid: {
                display: false
            },
            ticks: {
                display: false
            },
            legend: {
                display: false
            }
        }
    }
}
export const totalSaleData = {
    labels: ["Jun","July","Aug","Sept","Oct","Nov"],
    datasets: [
      {
        label: "Earnings 2021",
        data: [5809,12022,11022,10030,12633,10950],
        borderColor: "#1300f4",
        backgroundColor: "royalblue"
      }
    ]
};

export const CustomerReviews = [
    {
        id: 1,
        name: "Saif",
        comment: "This is an dnkdnndkfnkdjnfnnjkndjkfnkjsn amazing website",
        rating: 5,
        profile:"https://res.cloudinary.com/mock-prep/image/upload/v1638311080/Mockprep/Students/67_mzwjc0.jpg"
    },
    {
        id: 2,
        name: "Saif",
        comment: "This is an dnkdnndkfnkdjnfnnjkndjkfnkjsn amazing website",
        rating: 5,
        profile:"https://res.cloudinary.com/mock-prep/image/upload/v1638311080/Mockprep/Students/67_mzwjc0.jpg"
    },
    {
        id: 3,
        name: "Saif",
        comment: "This is an dnkdnndkfnkdjnfnnjkndjkfnkjsn amazing website",
        rating: 5,
        profile:"https://res.cloudinary.com/mock-prep/image/upload/v1638311080/Mockprep/Students/67_mzwjc0.jpg"
    },
    {
        id: 4,
        name: "Saif",
        comment: "This is an dnkdnndkfnkdjnfnnjkndjkfnkjsn amazing website",
        rating: 5,
        profile:"https://res.cloudinary.com/mock-prep/image/upload/v1638311080/Mockprep/Students/67_mzwjc0.jpg"
    }
]
    
export const tableDataSource = [
    {
      id: 1,
      topic: 'JavaScript',
      interviewer: "Ross Taylor",
      student: 'Manish chaudary',
      date: "10/12/21",
      time: "15:00",
      status:"Completed"
    },
    {
        id: 2,
        topic: 'HTML',
        interviewer: "Mohammed Saif",
        student: 'Manish chaudary',
        date: "10/12/21",
        time: "15:00",
        status: "Completed"
    },
    {
        id: 3,
        topic: 'JavaScript',
        interviewer: "Ross Taylor",
        student: 'Manish chaudary',
        date: "10/12/21",
        time: "15:00",
        status:"Completed"
    },
    {
        id: 4,
        topic: 'JavaScript',
        interviewer: "Ross Taylor",
        student: 'Manish chaudary',
        date: "10/12/21",
        time: "15:00",
        status:"Completed"
    },
    {
        id: 5,
        topic: 'JavaScript',
        interviewer: "Ross Taylor",
        student: 'Manish chaudary',
        date: "10/12/21",
        time: "15:00",
        status:"Pending"
    },
    {
        id: 6,
        topic: 'JavaScript',
        interviewer: "Ross Taylor",
        student: 'Manish chaudary',
        date: "10/12/21",
        time: "15:00",
        status:"Completed"
      }
  
];
  
export const tableColumns = [
    {
      title: 'Id',
      dataIndex: 'id',
        key: 'id',
        sorter: (a, b) => a.id - b.id,
        sortDirections: ['descend'],
    },
    {
      title: 'Topic',
      dataIndex: 'topic',
        key: 'topic',
        sorter: (a, b) => a.topic.length - b.topic.length,
        sortDirections: ['descend'],
        filters: [
            {
              text: 'JavaScript',
              value: 'JavaScript',
            },
            {
              text: 'HTML',
              value: 'HTML',
            },],
            onFilter: (value, record) => record.topic.indexOf(value) === 0,

    },
    {
      title: 'Interviewer',
      dataIndex: 'interviewer',
        key: 'interviewer',
        sorter: (a, b) => a.interviewer.length - b.interviewer.length,
        sortDirections: ['descend'],
    },
    {
        title: 'Student',
        dataIndex: 'student',
        key: 'student',
        sorter: (a, b) => a.student.length - b.student.length,
        sortDirections: ['descend'],
    },
    {
        title: 'Date (MM/DD.YY)',
        dataIndex: 'date',
        key: 'date',
        sorter: (a, b) => a.date.length - b.date.length,
        sortDirections: ['descend'],
    },
    {
        title: 'Time (HH/MM)',
        dataIndex: 'time',
        key: 'time',
        sorter: (a, b) => a.time.length - b.time.length,
        sortDirections: ['descend'],
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        sorter: (a, b) => a.status.length - b.status.length,
        sortDirections: ['descend'],
        render: (tags,index) => {
            let color = "green";
            if (tags !== "Completed") {
                color="red"
            }
            return (
                <Tag color={color} key={index}>
                    {tags.toUpperCase()}
                </Tag>
            )
        }
    },
];

export const interviewerFilter = [
    { id: 1, value: "Javascript" },
    {id:2,value:"HTML"},
    {id:3,value:"Bootstrap"},
    {id:4,value:"React"},
    {id:5,value:"Mongo"},
]


export const studentFilter = [
    {id: 1, value: "Javascript" },
    {id:2,value:"HTML"},
    {id:3,value:"Bootstrap"},
    {id:4,value:"React"},
    {id:5,value:"Mongo"},
]

export const resources = [
    {
        id: 1,
        title: "Git Basics",
        description: "Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during ...",
        url: "https://www.tutorialspoint.com/git/index.htm",
        img:"https://res.cloudinary.com/mock-prep/image/upload/v1638356981/Mockprep/topics/icon12_d9c4lz.png"
    },
    {
        id: 2,
        title: "Html Basics",
        description: "Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during ...",
        url: "https://www.tutorialspoint.com/html/index.htm",
        img:"https://res.cloudinary.com/mock-prep/image/upload/v1638359414/Mockprep/topics/html-css-js-icon-set-web-development-logo-javascript-programming-symbol-154897294_chh7dq.jpg"
    },
    {
        id: 3,
        title: "Git Basics",
        description: "Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during ...",
        url: "https://www.tutorialspoint.com/git/index.htm",
        img:"https://res.cloudinary.com/mock-prep/image/upload/v1638356981/Mockprep/topics/icon12_d9c4lz.png"
    },
    {
        id: 4,
        title: "Html Basics",
        description: "Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during ...",
        url: "https://www.tutorialspoint.com/html/index.htm",
        img:"https://res.cloudinary.com/mock-prep/image/upload/v1638359414/Mockprep/topics/html-css-js-icon-set-web-development-logo-javascript-programming-symbol-154897294_chh7dq.jpg"
    },
]

export const resourceFilter = [
    {
        id: 1,
        value: "Git Basics"
    },
    {
        id: 2,
        value: "Html Basics"
    }
]

export const quizList = [
    {
        id: 1,
        title: "Git Basics",
        count: 15,
        img:"https://res.cloudinary.com/mock-prep/image/upload/v1638356981/Mockprep/topics/icon12_d9c4lz.png"
    },
    {
        id: 2,
        title: "Javascript",
        count: 15,
        img:"https://res.cloudinary.com/mock-prep/image/upload/v1638359414/Mockprep/topics/html-css-js-icon-set-web-development-logo-javascript-programming-symbol-154897294_chh7dq.jpg"
    },
    {
        id: 3,
        title: "Html",
        count: 15,
        img:"https://res.cloudinary.com/mock-prep/image/upload/v1638356980/Mockprep/topics/icon5_dlqaon.png"
    },
    {
        id: 5,
        title: "Javascript",
        count: 15,
        img:"https://res.cloudinary.com/mock-prep/image/upload/v1638359414/Mockprep/topics/html-css-js-icon-set-web-development-logo-javascript-programming-symbol-154897294_chh7dq.jpg"
    },
    {
        id: 6,
        title: "Html",
        count: 15,
        img:"https://res.cloudinary.com/mock-prep/image/upload/v1638356980/Mockprep/topics/icon5_dlqaon.png"
    },
]
