import glogo from '../svgs/logo.jpg';
import './Header.css';

function Header() {
    return (
        
    <div className="App-header" style={{paddingBottom: "1px"}}>
       
<img src={glogo} className="App-logo" alt="logo" style={{height: '1000px', padding: "10px",}} />

<p  className="HeaderText" style={{  fontSize:"50px"}}>
 My-Ai
</p>

    
    

</div>

 );

}

export default Header;