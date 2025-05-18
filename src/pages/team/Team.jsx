<<<<<<< HEAD
import { useEffect, useState } from 'react'
import styles from './Team.module.scss'
import cyber from '../../../src/assets/images/cyber.svg'
=======
import React, { useEffect, useState } from 'react'
import styles from './Team.module.scss' // Import the styles as a module
import core from "../../../src/assets/images/core.svg"
>>>>>>> 755a593de0deba50073096cd6fb4818f56172459
import tech from '../../../src/assets/images/tech.svg'
import ui from '../../../src/assets/images/ui.svg'
import event from '../../../src/assets/images/event.svg'
import design from '../../../src/assets/images/design.svg'
import content from '../../../src/assets/images/content.svg'
import marketing from '../../../src/assets/images/marketing.svg'
import video from '../../../src/assets/images/video.svg'
import dropdown from '../../../src/assets/images/polygon2.svg'
import githubIcon from '../../assets/images/GitHub.svg'
import linkedinIcon from '../../assets/images/linkedin.svg'
import globeIcon from '../../assets/images/globe.svg'
import api from '../../services/api'

const Team = () => {
<<<<<<< HEAD
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  const fetchTeamData = async () => {
    try {
      const response = await api.get('/api/teams/team')
      console.log('Raw team data:', response)

      if (response.data.success && Array.isArray(response.data.users)) {
        const grouped = response.data.users.reduce((acc, user) => {
          const team = user.team || user.branch || 'Others'
          if (!acc[team]) {
            acc[team] = []
          }
          acc[team].push(user)
          return acc
        }, {})

        const formattedData = Object.entries(grouped).map(([team, users]) => ({
          title: team.toUpperCase() + ' TEAM',
          users,
        }))

        setData(formattedData)
      } else {
        setData([])
      }

      setLoading(false)
    } catch (error) {
      console.error('Error fetching team data:', error)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchTeamData()
  }, [])
=======
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
>>>>>>> 755a593de0deba50073096cd6fb4818f56172459

  const TeamMember = ({ heading, members }) => {
    return (
      <>
        <p className={styles.title}>{heading}</p>
        <div className={styles.six}>
          <div className={styles.five}>
<<<<<<< HEAD
            {members.map((member, index) => {
              const github = member.socialLinks?.find(
                link => link.type.toLowerCase() === 'github'
              )?.url
              const linkedin = member.socialLinks?.find(
                link => link.type.toLowerCase() === 'linkedin'
              )?.url
              const website = member.socialLinks?.find(
                link => link.type.toLowerCase() === 'website'
              )?.url

              return (
                <div key={member._id || index} className={styles.member}>
                  <div className={styles.imageWrapper}>
                    {member.imgURL ? (
                      <img
                        src={member.imgURL}
                        alt={member.name}
                        className={styles.memberImage}
                        loading="lazy"
                      />
                    ) : (
                      <div className={styles.fallbackAvatar}>
                        {member.name
                          .split(' ')
                          .map(word => word[0])
                          .join('')
                          .toUpperCase()}
                      </div>
                    )}

                    <div className={styles.memberInfoBox}>
                      <p className={styles.memberName}>{member.name}</p>
                      <p className={styles.memberPost}>{member.post || 'Member'}</p>
                    </div>
                 
                    <div className={styles.socialIcons}>
                      {github && (
                        <a href={github} target="_blank" rel="noopener noreferrer">
                          <img src={githubIcon} alt="GitHub" height={57} />
                        </a>
                      )}
                      {linkedin && (
                        <a href={linkedin} target="_blank" rel="noopener noreferrer">
                          <img src={linkedinIcon} alt="LinkedIn" height={40} />
                        </a>
                      )}
                      {website && (
                        <a href={website} target="_blank" rel="noopener noreferrer">
                          <img src={globeIcon} alt="Website" height={30} />
                        </a>
                      )}
                    </div>
                    
                  </div>
                </div>
              )
            })}
=======
            {members.map((member, index) => (
              <div key={index} className={styles.member}>
                <img src={member.imgURL} alt={member.name} className={styles.memberImage} />
                <p className={styles.name}>{member.name}</p>
              </div>
            ))}
>>>>>>> 755a593de0deba50073096cd6fb4818f56172459
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
<<<<<<< HEAD
    )
  }
=======
    );
  };
>>>>>>> 755a593de0deba50073096cd6fb4818f56172459

  return (
    <div className={styles.container}>
      <div className={styles.first}>
        <h1 className={styles.heading1}>MEET OUR TEAM</h1>
        <h3 className={styles.heading2}>
          EXPLORE OUR DYNAMIC MEMBERS ACROSS VARIOUS ROLES
        </h3>
      </div>
      <div className={styles.second}>
<<<<<<< HEAD
        <TeamNames img={cyber} teamName="CYBER" />
        <TeamNames img={tech} teamName="WEB DEV" />
        <TeamNames img={ui} teamName="UI/UX" />
        <TeamNames img={event} teamName="EVENTMGT" />
        <TeamNames img={design} teamName="DESIGN" />
        <TeamNames img={content} teamName="CONTENT" />
        <TeamNames img={marketing} teamName="MARKETING" />
        <TeamNames img={video} teamName="VIDEO EDITOR" />
=======
        <TeamNames img={core} teamName="CORE MEMBERS" />
        <TeamNames img={tech} teamName="TEAM LEAD" />
        <TeamNames img={hr} teamName="TEAM LEAD" />
>>>>>>> 755a593de0deba50073096cd6fb4818f56172459
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
<<<<<<< HEAD
              <TeamMember key={index} heading={team.title} members={team.users} />
=======
              <TeamMember key={index} heading={team.title} members={team.members} />
>>>>>>> 755a593de0deba50073096cd6fb4818f56172459
            ))}
          </>
        )}
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default Team
=======
export default Team;
>>>>>>> 755a593de0deba50073096cd6fb4818f56172459
