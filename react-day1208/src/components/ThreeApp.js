import React, { useState } from 'react';
import img1 from '../image/bin.jpg';
import img2 from '../image/board.jpg';
import img3 from '../image/gta1.png';
import img4 from '../image/gta2.webp';
import img5 from '../image/gta3.webp';

function ThreeApp(props) {

    const [hp1,setHp1]=useState('02');
    const [hp2,setHp2]=useState('123');
    const [hp3,setHp3]=useState('4567');
    const [photo,setPhoto]=useState(1);
  
    const changHp1=(e)=>{

        setHp1(e.target.value);
    }

    const changHp2=(e)=>{
        
        setHp2(e.target.value);
    }

    const changHp3=(e)=>{
        
        setHp3(e.target.value);
    }

    const changePhoto=(e)=>{

        setPhoto(Number(e.target.value));
    }

    return (
        <div>
           <h3 className='alert alert-info'>ThreeApp입니다_문제1</h3>
           <div className='d-inline-flex'>
             <select style={{width:'50px'}} onChange={changHp1}>
                <option>02</option>
                <option>010</option>
                <option>031</option>
                <option>017</option>
                <option>052</option>
             </select>
             <b>-</b>
             <input type='text' maxLength='4' className='form-control' style={{width:'65px'}} defaultValue={hp2} onChange={changHp2}/>
             <b>-</b>
             <input type='text' maxLength='4' className='form-control' style={{width:'65px'}} defaultValue={hp3} onChange={changHp3}/>

             <b style={{marginLeft:'50px'}}>이미지 선택: </b>
             <select className='form-control' onChange={changePhoto} style={{width:'85px',marginLeft:'2.5px'}}>
                <option value='1' >이미지1</option>
                <option value='2'>이미지2</option>
                <option value='3'>이미지3</option>
                <option value='4'>이미지4</option>
                <option value='5'>이미지5</option>
             </select>

           </div> 
           <br/><br/>
           <h1>{hp1}-{hp2}-{hp3}</h1>
           <img src={photo===1?img1:photo===2?img2:photo===3?img3:photo===4?img4:img5} />
        </div>
    );
}

export default ThreeApp;