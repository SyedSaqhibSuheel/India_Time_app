import React from "react";
import ClockHeading from "./ClockHeading";
import ClockSlogan from "./ClockSlogan";
import CurrentTime from "./CurrentTime";

function App(){
    return(
        <center className="container">
            <ClockHeading/>
            <ClockSlogan/>
            <CurrentTime/>
        </center>
    );
}
export default App;