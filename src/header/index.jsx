import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons'

const Header = (props) => {
  return <div className='header'>
    <div className='header-left'>
      <FontAwesomeIcon className='header-icon' icon={faBars} size='lg' />
      <label className='header-left-label'>torre<label>.co</label></label>
    </div>
    <div className='header-right'>
      <FontAwesomeIcon className='header-icon' icon={faSearch} size='lg' />
      <label className='header-right-label'>SIGN IN</label>
    </div>
  </div>
}

export default Header