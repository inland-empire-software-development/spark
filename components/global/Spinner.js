function Spinner(props){
  const {hidden = true} = props;
  return(
      <div id="spinner" className={hidden ? "uk-hidden" : ""}>
        <div uk-spinner="ratio: 3"/>
      </div>
  )
}

export default Spinner;
