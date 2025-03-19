import React, { useEffect, useState } from 'react'
import styles from './Team.module.scss' // Import the styles as a module
import core from "../../../src/assets/images/core.svg"
import tech from '../../../src/assets/images/tech.svg'
import hr from '../../../src/assets/images/hr.svg'
import dropdown from '../../../src/assets/images/polygon 2.svg'

const Team = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchTeamData = async () => {
    try {
      const response = await fetch('http://localhost:5001/api/teams/team?role=user');
      const result = await response.json();
      console.log('Team data:', result);
      setData(result);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching team data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTeamData();
  }, []);

  const TeamMember = ({ heading, members }) => {
    return (
      <>
        <p className={styles.title}>{heading}</p>
        <div className={styles.six}>
          <div className={styles.five}>
            {members.map((member, index) => (
              <div key={index} className={styles.member}>
                <img src={member.imgURL} alt={member.name} className={styles.memberImage} />
                <p className={styles.name}>{member.name}</p>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  };

  const TeamNames = ({ img, teamName }) => {
    return (
      <div className={styles.teamName}>
        <img src={img} alt={teamName} />
        <p className={styles.text1}>{teamName}</p>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.first}>
        <h1 className={styles.heading1}>MEET OUR TEAM</h1>
        <h3 className={styles.heading2}>EXPLORE OUR DYNAMIC MEMBERS ACROSS VARIOUS ROLES</h3>
      </div>
      <div className={styles.second}>
        <TeamNames img={core} teamName="CORE MEMBERS" />
        <TeamNames img={tech} teamName="TEAM LEAD" />
        <TeamNames img={hr} teamName="TEAM LEAD" />
      </div>
      <div className={styles.third}>
        <button className={styles.sort}>
          SORT BY YEAR <img src={dropdown} alt="dropdown" />
        </button>
      </div>
      <div className={styles.fourth}>
        {loading && <p>Loading...</p>}
        {!loading && data && (
          <>
            {data.map((team, index) => (
              <TeamMember key={index} heading={team.title} members={team.members} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Team;