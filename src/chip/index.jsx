import './styles.css'

const Chip = (props) => {
  return <div className="chip" onClick={() => props.onChipClick(props.name)}>
    <label>{props.name}</label>
  </div>
}

export default Chip