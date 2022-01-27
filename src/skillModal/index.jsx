import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './styles.css'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const SkillModal = (props) => {
  const modalClass = props.show ? 'modal-show' : 'modal-hide'
  return <div className={modalClass}>
    <div className='modal-header'>
      <FontAwesomeIcon className='modal-header-icon' icon={faTimes} size='lg' onClick={props.onClose} />
      <label className='modal-header-title'>{props.title}</label>
    </div>
    <div className='modal-content'>
      <div className='modal-content-description'>
        <label className='modal-content-description-title'>Proficiency: </label>
        <FontAwesomeIcon className='modal-content-description-icon' icon={props.strengthIcon} size='lg' />
        <label className='modal-content-description-content'>{props.proficiency}</label>
      </div>
      <div className='modal-content-description'>
        <label className='modal-content-description-title'>Recommendations: </label>
        <label className='modal-content-description-content'>{props.recommendations}</label>
      </div>
      <div className='modal-content-description'>
        <label className='modal-content-description-title'>Weight: </label>
        <label className='modal-content-description-content'>{props.weight}</label>
      </div>
    </div>
  </div>
}

export default SkillModal