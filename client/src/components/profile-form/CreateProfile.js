import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const CreateProfile = props => {
 const [ formData, setFormData] = useState({
     company: '',
     website: '',
     location: '',
     status: '',
     githubusername: '',
     bio: '',
     twitter: '',
     facebook: '',
     linkedin: '',
     youtube: '',
     instagram: ''
 })

 const {
    company,
    website,
    location,
    status,
    githubusername,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram
 } = formData;

    return (
        <div>
            
        </div>
    )
}

CreateProfile.propTypes = {

}

export default CreateProfile
