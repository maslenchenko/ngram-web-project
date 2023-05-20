import React from 'react';
import '../styles/team.css';


function TeamMember({name, description, email, student = true}) {
    return (
        <div className="team-member">
            <img src="https://via.placeholder.com/244x173" alt="team member" className='member-img'/>
            <p className='member-name'>{name}</p>
            {student ? <p className="student-description">{description}</p> :
                <p className="mentor-description">{description}</p>}
            <p className='member-email'>{email}</p>
        </div>
    );
};

export default TeamMember;
