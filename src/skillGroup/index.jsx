import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Chip from '../chip';
import { useRef } from 'react';


const SkillGroup = (props) => {
  function parseSkillLevelName (name) {
    let newString = name.charAt(0).toUpperCase() + name.slice(1);
    if (newString.includes("-")) {
      newString = newString.replace(/-/g, " ");
    }
    return newString
  }

  return <div className='skillgroup'>
    <div className='skillgroup-header'>
      <FontAwesomeIcon className='skillgroup-header-icon' icon={props.icon} size='lg' />
      <label className='skillgroup-header-label'>{parseSkillLevelName(props.name)}</label>
    </div>
    <div className='skillgroup-body'>
      {props.data.map((it, ind) => {
        s
        return <Chip key={ind} name={it.name} onChipClick={(e) => props.onChipClick(e)} />
      })}
    </div>
  </div>
}

export default SkillGroup