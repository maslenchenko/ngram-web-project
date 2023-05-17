import React from 'react'
import Student from "../components/team-member.js";
import '../styles/team.css';
import {mentorName, studentName1, studentName2, studentName3, studentName4} from "../components/team-strings.js";
import {mentorDescription, studentDescription1, studentDescription2, studentDescription3, studentDescription4 } from '../components/team-strings.js';
import {mentorEmail, studentEmail1, studentEmail2, studentEmail3, studentEmail4} from "../components/team-strings.js";

function Team() {
  return (
    <div class='team-main'>
      <h1 className='team-title'>Let's get aquainted</h1>
      <div className='mentor'>
        <Student name={mentorName}  description={mentorDescription} email={mentorEmail} student={false}/>
      </div>
      <div className='students'>
        <Student name={studentName1} description={studentDescription1} email={studentEmail1}/>
        <Student name={studentName2} description={studentDescription2} email={studentEmail2}/>
        <Student name={studentName3} description={studentDescription3} email={studentEmail3}/>
        <Student name={studentName4} description={studentDescription4} email={studentEmail4}/>
      </div>
    </div>  
  )
}

export default Team
