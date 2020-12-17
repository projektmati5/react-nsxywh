import React from "react";
import "./style.css";


function MojKomponent() {
  return (
    <div>
      <dialog open>
        <h1>Siema</h1>
        <p>czesc</p>
      <footer><a href="https://www.google.pl/">elo</a></footer></dialog>
    </div>
  );
}



//function MojKomponent()
//{return(<div>Siema!</div>)}


export default function Czesc3()
{return(MojKomponent())}

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}

export default MojKomponent;