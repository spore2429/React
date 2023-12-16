import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import OneApp from './components/OneApp';
import TwoApp from './components/TwoApp';
import ThreeApp from './components/ThreeApp';
import FourApp from './components/FourApp';
import FiveApp from './components/FiveApp';
import SixApp from './components/SixApp';
import SevenApp from './components/SevenApp';

function App() {

  const[idx,setIdx]=useState(4);

  const selectComp=(e)=>{
    setIdx(Number(e.target.value));
  }

  return (
    <div className="App">
      <div style={{fontSize:'20px'}}>
        <label>
          <input type='radio' name='comp' defaultChecked
          defaultValue='1' onClick={selectComp}/>OneApp
        </label> &nbsp;
        <label>
          <input type='radio' name='comp'
          defaultValue='2' onClick={selectComp}/>TwoApp
        </label> &nbsp;
        <label>
          <input type='radio' name='comp'
          defaultValue='3' onClick={selectComp}/>ThreeApp
        </label> &nbsp;
        <label>
          <input type='radio' name='comp'
          defaultValue='4' onClick={selectComp}/>FourApp
        </label> &nbsp;
        <label>
          <input type='radio' name='comp'
          defaultValue='5' onClick={selectComp}/>FiveApp
        </label> &nbsp;
        <label>
          <input type='radio' name='comp'
          defaultValue='6' onClick={selectComp}/>SixApp
        </label> &nbsp;
        <label>
          <input type='radio' name='comp'
          defaultValue='7' onClick={selectComp}/>SevenApp
        </label> &nbsp;

        {idx===1?<OneApp/>:idx===2?<TwoApp/>:idx===3?<ThreeApp/>:idx===4?<FourApp/>:idx===5?<FiveApp/>:idx===6?<SixApp/>:<SevenApp/>}
      </div>
    </div>
  );
}

export default App;