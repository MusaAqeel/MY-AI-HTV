

import './Home.css';
import TextBox from './TextBoxhome';
import TextBox2 from './textboxhome2';
function Login() {
  return (
    <div className="Login" style={{ backgroundColor: '#282c34' }}>

      <div className="loginbackround" style={{ color: "white" }}>
        <div className="loginbackround" style={{ paddingTop: "50px" }}>
          <div className="typewriter" >
            <p>My-ai , speak to an ai just like a friend</p></div></div>
        <TextBox2 textcolor="white" fontsize="25px" />
        <TextBox textcolor="white" fontsize="25px" pt="50px" />
      </div>
    </div>
  );
}

export default Login;