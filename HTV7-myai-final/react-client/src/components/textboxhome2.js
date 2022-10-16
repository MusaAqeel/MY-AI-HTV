import './texthome.css';
function TextBoxabout(props) {
  return (

    <div className="outside" style={{ paddingTop: props.pt }}>
      <div className="col-sm" style={{ alignContent: 'center', }}>
        <div className="text" style={{ color: props.textcolor, fontSize: props.fontsize, padding: "10px", maxWidth: "909px", width: "909px", display: "flex", alignItems: "center", flexDirection: "column" }}>

          <h1>Resources </h1>
          <p>
            <a href="https://bouncebackontario.ca/" className='link'>BounceBack</a>
            <br></br><br></br>
            <a href="http://www.connexontario.ca" className='link'>ConnexOntario</a>
            <br></br><br></br>
            <a href="talksuicide.ca" className='link'>Talk Suicide</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default TextBoxabout;
