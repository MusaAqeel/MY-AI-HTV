import './textabout.css';

function TextBox(props) {
  return (

    <div className="outside" style={{ paddingTop: props.pt }}>
      <div className="col-sm" style={{ alignContent: 'center', }}>
        <div className="text" style={{ color: props.textcolor, fontSize: props.fontsize, padding: "20px", }}>
          <h1>Future Features</h1>
          <p> ......... <br></br><br></br>..........<br></br>  <br></br>....... <br></br><br></br> .......... <br></br><br></br>.......</p>
        </div>
      </div>
    </div>
  );
}

export default TextBox;
