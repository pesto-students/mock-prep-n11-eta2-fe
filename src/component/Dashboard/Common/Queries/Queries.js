import { useEffect,useState} from "react"
import { Table, Input,Tag } from "antd";
import { questionIcon } from "constant/antIcons";
import DashboardHeader from "../Header/DashboardHeader";
import "./Queries.css"
import dataActionCreator from "Redux/Action Creators/dataActionCreators";
import { useDispatch,useSelector } from "react-redux";
import { getQueries, updateQuery } from "constant/apiUrl";
import dataActions from "Redux/Actions/dataAction";
import Modals from 'component/Common/Modal/Modals'
import {  queryResponseForm } from "constant/formData";
import QueryForm  from "component/Common/Form/QueryForm"
import { updateData } from "api/Api";
import alertActionCreator from "Redux/Action Creators/alertActionCreator";


export default function Queries() {

    const { Search } = Input;
    const search = <><section className="search"><Search placeholder="Search Queries" style={{ width: 200,marginTop:"5vh",marginLeft:"1vw" }} /></section></>
    const data = useSelector(state => state.dataReducer)
    const [tableData,setTableData] = useState([])
    const dispatch = useDispatch()
    let [showModal2, setShowModal2] = useState(false);
    let [query, setQuery] = useState([]);
    
    useEffect(() => { dataActionCreator.getAdminData(dispatch, getQueries, dataActions.setQuery) }, [dispatch])
    
    useEffect(() => {
        if (data.query && data.query.data.length>0) { 
            setTableData(data.query.data)
        }
    }, [data])
    
    const handleResponse = (id) => { 
       
        let query = tableData.filter(f => f._id === id)
        setQuery(query)
      
        if (Object.keys(queryResponseForm).length > 0) { 
            Object.keys(queryResponseForm).forEach(key => queryResponseForm[key] = query[0][key]);
        }
        setShowModal2(true)
    }

    const hide = (id) => { 
      
        setShowModal2(false)
    }

    const submit = (value) => { 
     
        let queryIndex = query.findIndex(f => f._id === query[0]._id)
        for (var key in value) {
         

            if (value[key] !== undefined && key !== "comments") {
                query[queryIndex][key] = value[key]
            }

            if (key === "comments" && value.comments) {
                let comments = query[queryIndex].comments;
                comments.push( "Interviewer: "+value.comments)
                value.comments = comments;
            }
        }
        setQuery(query)

        updateData(updateQuery + query[0]._id, value)
        alertActionCreator.setMessage(dispatch, "Response updated")
        setShowModal2(false);
    }

    const queryTableColumns = [

        {
            title: 'Query',
            dataIndex: 'title',
            key: 1,
           
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 2,
           
        },
        {
          title: 'User',
          dataIndex: 'name',
            key: 3,
            sorter: (a, b) => a.interviewer.length - b.interviewer.length,
            sortDirections: ['descend'],
            rowKey: 3,
            render: (name,index) => {
              
                return (
                    <section key={ index}>
                        {name }
                    </section>
                )
            }
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 4,
            sorter: (a, b) => a.student.length - b.student.length,
            sortDirections: ['descend'],
            rowKey: 4,
            render: (email,index) => {
                return (
                    <section key={ index}>
                        {email }
                    </section>
                )
            }
        },
       
        {
            title: 'Status',
            dataIndex: 'status',
            key: 7,
            rowKey:7,
           
            render: (tags,index) => {
                let color = "green";
                if (tags === "new") {
                    color = "red"
                }
                else if (tags === "progress") {
                    color = "orange"
                }
                else { 
                    color = "green"
                }
                return (
                    <Tag color={color} key={index}>
                        {tags.toUpperCase()}
                    </Tag>
                )
            }
        },
        {
            title: 'Respond',
            dataIndex: '_id',
            key: 7,
            rowKey:7,
            render: (id,index) => {
                return (
                    <span onClick={() => handleResponse(id)}>
                    Edit
                  </span>
                )
            }
        }
    ];

    let form =  <QueryForm submitFunction={submit} formFields={queryResponseForm} buttonValue={"Update Query"} />
    if (query.length>0) { 
     form =    <QueryForm submitFunction={submit} status={query[0].status} description={query[0].description} formFields={queryResponseForm} buttonValue={"Update Query"} />
    }


    return (<>
        <DashboardHeader title="User Queries" icon={questionIcon} />
            {search}
                <section className='query-container'>
                
                <Table columns={queryTableColumns} dataSource={tableData} /> :
                <Modals title={"Respond Query"} show={showModal2} onHide={hide} data={form}   />
            </section>
        </>
    )
}

