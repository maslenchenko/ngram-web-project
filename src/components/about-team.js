import React, { useState } from 'react';
import '../styles/team.css';

function AboutTeam() {
    return (
        <div className='team-main'>
            <div className='team-title'> <p>Let's get aquainted</p></div>
            <div className="team-member">
                <img src="https://via.placeholder.com/272x173" alt="team member" className='member-img' />
                <p>Volodymyr  davydenko, mentor</p>
                <p className='member-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis massa enim, 
                    maximus sit amet ullamcorper et, hendrerit molestie risus. 
                    Donec laoreet lacus eu quam tincidunt, bibendum laoreet velit ornare.
                     Aliquam tempor faucibus sodales.</p>
            </div>
        </div>

      );
}

export default AboutTeam;
