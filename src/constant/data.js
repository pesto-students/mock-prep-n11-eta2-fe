import { Tag} from "antd"

export const mockPrepAdvantages = [
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
    
export const tableColumns = [
    {
      title: 'Id',
      dataIndex: 'id',
        key: 1,
        sorter: (a, b) => a.id - b.id,
        sortDirections: ['descend'],
    },
    {
        title: 'Topic',
        dataIndex: 'topic',
        key: 2,
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
            },
            {
                text: 'CSS',
                value: 'CSS',
            },
            {
                text: 'BootStrap',
                value: 'BootStrap',
            },
            {
                text: 'React',
                value: 'React',
            },
            {
                text: 'UI',
                value: 'UI',
            },
            {
                text: 'UX',
                value: 'UX',
            },
            {
                text: 'System Design',
                value: 'System Design',
              },
              {
                text: 'Mongo Db',
                value: 'Mongo Db',
              },
              {
                text: 'Node',
                value: 'Node',
            },
            {
                text: 'DS',
                value: 'DS',
            },
            {
                text: 'Algo',
                value: 'Algo',
            },
              

        ],
            onFilter: (value, record) => record.topic.indexOf(value) === 0,

    },
    {
      title: 'Interviewer',
      dataIndex: 'interviewer',
        key: 3,
        sorter: (a, b) => a.interviewer.length - b.interviewer.length,
        sortDirections: ['descend'],
        rowKey:3,
    },
    {
        title: 'Student',
        dataIndex: 'student',
        key: 4,
        sorter: (a, b) => a.student.length - b.student.length,
        sortDirections: ['descend'],
        rowKey:4,
    },
    {
        title: 'Date (MM/DD.YY)',
        dataIndex: 'date',
        key: 5,
        sorter: (a, b) => a.date.length - b.date.length,
        sortDirections: ['descend'],
        rowKey:5,
    },
    {
        title: 'Time (HH/MM)',
        dataIndex: 'time',
        key: 6,
        sorter: (a, b) => a.time.length - b.time.length,
        sortDirections: ['descend'],
        rowKey:6,
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 7,
        rowKey:7,
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

export const resources = [
    {
        id: 1,
        title: "HTML",
        description: "Basics of HTML",
        url:"https://www.w3schools.com/html/",
        img: "https://freepowerpointtemplates.com/wp-content/uploads/HTML5-Featured-FreePowerPointTemplates-1024x565.png",
        topicId:1
    },
    {
        id: 2,
        title: "HTML",
        description: "Basics of HTML",
        url:"https://www.w3schools.com/html/",
        img: "https://freepowerpointtemplates.com/wp-content/uploads/HTML5-Featured-FreePowerPointTemplates-1024x565.png",
        topicId:1
    },
    {
        id: 3,
        title: "HTML",
        description: "Basics of HTML",
        url:"https://www.w3schools.com/html/",
        img: "https://freepowerpointtemplates.com/wp-content/uploads/HTML5-Featured-FreePowerPointTemplates-1024x565.png",
        topicId:1
    }
]
