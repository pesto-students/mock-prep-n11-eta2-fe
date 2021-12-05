import React from 'react'
import { Box,Button, TextField,TextareaAutosize } from '@material-ui/core';
import "./interviewerForm.css"

export const InterviewerForm = ({interviewer}) => {

      const onFinish = (values) => {
        console.log('Success:', values);
      };

    return (
        <div>
            <Box component="form" sx={{'& > :not(style)': { m: 1, width: '25ch' },}} noValidate autoComplete="off">
                <TextField className="form-input" defaultValue={interviewer.pic} id="outlined-basic" label="Update Image URL" variant="outlined" />
                <TextField className="form-input" defaultValue={interviewer.name} id="outlined-basic" label="Update Name" variant="outlined" />
                <TextField className="form-input" defaultValue={interviewer.company} id="outlined-basic" label="Update Company" variant="outlined" />
                <TextField className="form-input" defaultValue={interviewer.designation} id="outlined-basic" label="Update Designation" variant="outlined" />
                <TextField className="form-input" defaultValue={interviewer.experience} id="outlined-basic" label="Update Experience" variant="outlined" />
                <TextField className="form-input" defaultValue={interviewer.skills} id="outlined-basic" label="Update Skills" variant="outlined" />
                <TextField className="form-input" defaultValue={interviewer.topics} id="outlined-basic" label="Update Topics" variant="outlined" />
                <TextField className="form-input" defaultValue={interviewer.interviewCount} id="outlined-basic" label="Update Interviews Count" variant="outlined" />
               
                <TextareaAutosize className="form-input textarea" defaultValue={interviewer.about} placeholder="Update about" />
                <Button type="primary" className="submit"  htmlType="submit">
                    Submit
                </Button>
            </Box>
        </div>
    )
}
