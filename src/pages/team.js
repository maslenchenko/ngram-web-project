import React from "react";
import {
  mentorDescription,
  mentorEmail,
  mentorName,
  studentDescription1,
  studentDescription2,
  studentDescription3,
  studentDescription4,
  studentEmail1,
  studentEmail2,
  studentEmail3,
  studentEmail4,
  studentName1,
  studentName2,
  studentName3,
  studentName4,
} from "../components/team-strings.js";
import "../styles/team.css";
import TeamMember from "../components/team-member.js";

function Team() {
  return (
    <div class="team-main">
      <h1 className="team-title">Let's get aquainted</h1>
      <div className="mentor">
        <TeamMember
          name={mentorName}
          description={mentorDescription}
          email={mentorEmail}
          student={false}
        />
      </div>
      <div className="students">
        <TeamMember
          name={studentName1}
          description={studentDescription1}
          email={studentEmail1}
        />
        <TeamMember
          name={studentName2}
          description={studentDescription2}
          email={studentEmail2}
        />
        <TeamMember
          name={studentName3}
          description={studentDescription3}
          email={studentEmail3}
        />
        <TeamMember
          name={studentName4}
          description={studentDescription4}
          email={studentEmail4}
        />
      </div>
    </div>
  );
}

export default Team;
