import React from 'react'
import { useForm } from 'react-hook-form'
import styles from './AddMember.module.scss'
import profile from '../../../src/assets/images/profile.svg'
import dropdown from '../../../src/assets/images/polygon2.svg'
import TextField from '../../components/RegistrationForm/TextField'
import { FiGithub } from "react-icons/fi"
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6"

function AddMember() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.heading1}>MEET OUR TEAM</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.first}>
          <div className={styles.firstLeft}>
            <div className={styles.imageWrapper}>
              <img src={profile} alt="Profile" className={styles.profileImage} />
              <button className={styles.imageButton}>UPLOAD PHOTO</button>
            </div>
            {/* DESKTOP VIEW: Select Role */}
            <button className={styles.sort + " " + styles.desktopOnly}>
              <div className={styles.between}>SELECT ROLE <img src={dropdown} alt="dropdown" /></div>
              
            </button>
          </div>

          <div className={styles.firstRight}>
            <TextField
              field={{
                fieldName: 'name',
                label: 'Full Name',
                placeholder: 'Enter full name',
                required: true,
                validation: {
                  minLength: 3,
                  maxLength: 30,
                },
              }}
              register={register}
              errors={errors}
            />

            <TextField
              field={{
                fieldName: 'number',
                label: 'Phone Number',
                placeholder: 'Enter Your Mobile Number',
                required: true,
                validation: {
                  pattern: '^[0-9]{10}$',
                  feedback: 'Phone number must be 10 digits',
                },
              }}
              register={register}
              errors={errors}
            />

            <TextField
              field={{
                fieldName: 'email',
                label: 'Enter KIIT Email Address',
                placeholder: 'Enter KIIT email',
                required: true,
                validation: {
                  pattern: '^[a-zA-Z0-9._%+-]+@kiit\\.ac\\.in$',
                  feedback: 'Enter a valid KIIT email',
                },
              }}
              register={register}
              errors={errors}
            />
          </div>
        </div>

        {/* MOBILE VIEW: Select Role */}
        <div className={styles.mobileRoleButton}>
            <div className={styles.mobileOnly}><p className={styles.mobileLabel}>• ROLE SELECTION:</p></div>
          <button className={styles.sort}>
            <div className={styles.between}>SELECT ROLE</div>
            <img src={dropdown} alt="dropdown" />
          </button>
        </div>

        <div className={styles.second}>
          <button className={styles.sort}>
            <div className={styles.between}>SELECT YEAR <img src={dropdown} alt="dropdown" /></div>
          </button>
          <button className={styles.sort}>
            <div className={styles.between}>BATCH <img src={dropdown} alt="dropdown" /></div>
          </button>
          <button className={styles.sort}>
            <div className={styles.between}>PERSONAL WEBSITE <img src={dropdown} alt="dropdown" /></div>
          </button>
        </div>
        <div className={styles.second2}>
          <div className={styles.mobileOnly}><p className={styles.mobileLabel}>• YEAR SELECTION:</p></div>
          <button className={styles.sort}>
            <div className={styles.between}>SELECT YEAR <img src={dropdown} alt="dropdown" /></div>
          </button>

          <div className={styles.mobileOnly}><p className={styles.mobileLabel}>• BATCH SELECTION:</p></div>
          <button className={styles.sort}>
            <div className={styles.between}>BATCH <img src={dropdown} alt="dropdown" /></div>
          </button>

          <div className={styles.mobileOnly}><p className={styles.mobileLabel}>• PERSONAL WEBSITE</p></div>
          <button className={styles.sort}>
            <div className={styles.between}>PERSONAL WEBSITE <img src={dropdown} alt="dropdown" /></div>
          </button>
        </div>

        <div className={styles.third}>
          <button className={styles.sort1}><div className={styles.between}><span className={styles.black}><FiGithub /></span> Enter GitHub URL</div></button>
          <button className={styles.sort1}><div className={styles.between}><span className={styles.black}><FaLinkedinIn /></span> Enter LinkedIn URL</div></button>
          <button className={styles.sort1}><div className={styles.between}><span className={styles.black}><FaXTwitter /></span> Enter Twitter URL</div></button>
        </div>

        <div className={styles.four}>
          <button type="submit" className={styles.cybersubmitbutton}>
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddMember
