import { useEffect, useRef, useState } from 'react'
import Loader from '../loader';
import SkillGroup from '../skillGroup';
import './styles.css'
import { faPray, faWalking, faRunning, faBiking, faMeh } from '@fortawesome/free-solid-svg-icons'
import SkillModal from '../skillModal';
const axios = require('axios');


const Body = (props) => {

  const [profile, setProfile] = useState()
  const skillLevels = useRef([])
  const [modalOpen, setModalOpen] = useState(false)
  const [currentStrength, setCurrentStrength] = useState({
    title: "",
    name: "",
    icon: undefined,
    proficiency: "",
    recommendations: 0,
    weight: 0
  })

  useEffect(() => {
    const options = {
      url: 'https://guarded-harbor-32101.herokuapp.com/api/bios/miguelangarano',
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*'
      }
    };
    axios(options)
      .then(response => {
        if (response.data.data != null) {
          extractSkillLevel(response.data.data.strengths)
          setProfile(response.data.data)
        }
      });
  }, [])

  function extractSkillLevel (data) {
    const levels = []
    data.forEach(item => {
      if (levels.find(it => it.name === item.proficiency) == null) {
        levels.push({ name: item.proficiency, icon: getSkillLevelIconName(item.proficiency) })
      }
    })
    skillLevels.current = levels
  }

  function getSkillLevelIconName (skillLevel) {
    switch (skillLevel) {
      case 'no-experience-interested': {
        return faPray
      }
      case 'novice': {
        return faWalking
      }
      case 'proficient': {
        return faRunning
      }
      case 'expert': {
        return faBiking
      }
      default: {
        return faMeh
      }
    }
  }

  function getSkillsByName (name) {
    const data = profile.strengths.filter(item => item.proficiency === name)
    return data
  }

  function chipClick (name) {
    const data = profile.strengths.find(item => item.name === name)
    setCurrentStrength({
      title: data.name,
      name: profile.person.name.split(" ")[0],
      icon: getSkillLevelIconName(data.proficiency),
      proficiency: data.proficiency,
      recommendations: data.recommendations,
      weight: data.weight
    })
    setModalOpen(true)
    window.scrollTo(0, 0)
  }

  function closeModal () {
    setModalOpen(false)
    setCurrentStrength({
      title: "",
      name: "",
      icon: undefined,
      proficiency: "",
      recommendations: 0,
      weight: 0
    })
  }

  if (profile == null) {
    return <div className='body-loader-container'>
      <Loader />
    </div>
  }

  return <div className={modalOpen ? 'body-hide' : 'body'}>
    <div className='body-profile'>
      <div className='body-profile-image-border'>
        <img className='body-profile-image' src={profile.person.picture} />
      </div>
      <label className='body-profile-name'>{profile.person.name}</label>
    </div>
    <div className='body-skills'>
      <label>Skills and interests:</label>
      <div className='body-skills-container'>
        {
          skillLevels.current.map(item => {
            return <SkillGroup key={item.name} name={item.name} icon={item.icon} data={getSkillsByName(item.name)} onChipClick={(e) => chipClick(e)} />
          })
        }
      </div>
    </div>
    <SkillModal
      show={modalOpen}
      title={currentStrength.title}
      strengthIcon={currentStrength.icon}
      proficiency={currentStrength.proficiency}
      recommendations={currentStrength.recommendations}
      weight={currentStrength.weight}
      onClose={closeModal}
    />
  </div>
}

export default Body