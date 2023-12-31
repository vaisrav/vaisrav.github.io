import { Typography } from '@mui/material'
import React from 'react'

import './Profile.css'

import CustomTimeline from '../Timeline/Timeline'
import resumeData from '../../utils/resumeData'

const Profile = () => {
  return (
    <div className='profile container_shadow'>
        <div className='profile_name'>
            <Typography className='name'>{resumeData.name}</Typography>
            <Typography className='title'>{resumeData.title}</Typography>
        </div>

        <figure className='profile_image'>
            <img src={require('../../assets/images/profile.jpg')} alt='profile_image'/>
        </figure>

        <div className='profile_information'>
            <CustomTimeline/>
            <br/>
            <button></button>
        </div>
    </div>
  )
}

export default Profile