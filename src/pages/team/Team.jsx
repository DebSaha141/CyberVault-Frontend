import { useEffect, useState } from 'react'
import styles from './Team.module.scss'
import core from '../../../src/assets/images/core.svg'
import tech from '../../../src/assets/images/tech.svg'
import hr from '../../../src/assets/images/hr.svg'
import dropdown from '../../../src/assets/images/polygon 2.svg'
import api from '../../services/api'

const Team = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  const fetchTeamData = async () => {
    try {
      const response = await api.get('/api/teams/team')
      console.log('Raw team data:', response)

      if (response.data.success && Array.isArray(response.data.users)) {
        // Group users by team
        const grouped = response.data.users.reduce((acc, user) => {
          // Use user.branch as team if team field is not available
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

  const TeamMember = ({ heading, members }) => {
    return (
      <>
        <p className={styles.title}>{heading}</p>
        <div className={styles.six}>
          <div className={styles.five}>
            {members.map((member, index) => (
              <div key={member._id || index} className={styles.member}>
                <img
                  src={
                    member.imgURL ||
                    `https://ui-avatars.com/api/?name=${encodeURIComponent(
                      member.name,
                    )}&background=random`
                  }
                  alt={member.name}
                  className={styles.memberImage}
                />
                <p className={styles.name}>{member.name}</p>
              </div>
            ))}
          </div>
        </div>
      </>
    )
  }

  const TeamNames = ({ img, teamName }) => {
    return (
      <div className={styles.teamName}>
        <img src={img} alt={teamName} />
        <p className={styles.text1}>{teamName}</p>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.first}>
        <h1 className={styles.heading1}>MEET OUR TEAM</h1>
        <h3 className={styles.heading2}>
          EXPLORE OUR DYNAMIC MEMBERS ACROSS VARIOUS ROLES
        </h3>
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
              <TeamMember
                key={index}
                heading={team.title}
                members={team.users}
              />
            ))}
          </>
        )}
      </div>
    </div>
  )
}

export default Team
