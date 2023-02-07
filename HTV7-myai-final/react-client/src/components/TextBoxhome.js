import './texthome.css';
function TextBoxabout(props) {
  return (

    <div className="outside" style={{ paddingTop: props.pt }}>
      <div className="col-sm" style={{ alignContent: 'center', }}>
        <div className="text" style={{ color: props.textcolor, fontSize: props.fontsize, padding: "20px", maxWidth: "909px" }}>
          <h1 style={{textAlign:'center'}}> Mental Health Tips </h1>
          <p> My-Ai, chat to an Ai like a human by talking to it!
            <br></br><br></br>
            Get enough sleep: Most people need around eight hours of sleep per night. Consider going to bed and waking up at the same time each day to help regulate your body’s natural sleep rhythm.
            <br></br>  <br></br>
            Eat healthy: Eating nutritious foods helps your body to function at its best. Make sure to include plenty of fruits, vegetables, and whole grains in your diet.
            <br></br> <br></br>
            Exercise: Exercise releases endorphins, which have mood-boosting effects. A moderate amount of exercise is the key to maintaining your mental health.
            <br></br> <br></br>
            Take breaks: When you’re feeling overwhelmed or stressed, take a few minutes to yourself to relax and rejuvenate. Take a hot bath, read your favorite book, or take a walk outdoors.
            <br></br> <br></br>
            Connect with others: Spending time with loved ones and close friends can help reduce stress and promote positive emotions. </p>
          {/* <img src={glogo} className="App-logo" alt="logo" style={{ height: '500px', alignContent: 'center', padding: "10px", }} /> */}
        </div>
      </div>
    </div>
  );
}

export default TextBoxabout;
