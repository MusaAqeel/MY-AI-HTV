

import './about.css';
import TextBoxabout from './TextBox.js';

function about() {
  return (
    <div className="About" style={{backgroundColor: '#282c34',paddingBottom:"10px"}}>
        
      <div className = "aboutbackround" style={{color:"white"}}>
<TextBoxabout  textcolor="white" fontsize="15px" pt="250px"/>
  </div>
    </div>
  );
}

export default about;