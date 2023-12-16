import React, { useState } from 'react';
import Alert from '@mui/material/Alert';
import BlindIcon from '@mui/icons-material/Blind';



//filter는 조건에 맞는 요소를 가진 새로운 배열을 만들어 반환하고, 
//slice는 배열의 일부분을 추출하여 새로운 배열을 반환하며, 
//splice는 배열의 내용을 직접 변경하고 제거한 요소들을 반환합니다.

function SixApp(props) {

    const [names,setNames]=useState(['a','b','c','d','e']);
    const [irum,setIrum]=useState('');

    //추가버튼
    const btnInsert=()=>{

        //이름이 공백일경우
        if(irum.trim()==='') {
            alert('이름을 입력하세요');
            setIrum('');
            return;
        }

        setNames(names.concat(irum));
        setIrum('');
        
    }

    //삭제버튼
    const dataRemove=(index)=>{

        console.log("remove: "+index);

        //방법1.. slice
        // setNames([
        //     ...names.slice(0,index),
        //     ...names.slice(index+1,names.length)  
        // ]);
        
        //방법2.. filter
        setNames(names.filter((item,i)=>i!==index));
    }

    //입력이 되도록... 이벤트
    const txtInput=(e)=>{
        setIrum(e.target.value);
    }

    //Enter이벤트
    const txtEnter=(e)=>{
        if(e.key==='Enter') {
            btnInsert();
        }
    }

    return (
        <div>
            <h3 className='alert alert-info'>SixApp입니다.</h3>
            <Alert severity="info">배열연습_#6 <BlindIcon/></Alert>
            <h4>value값을 주는순간 입력이안됌 onChange 이벤트를 이용해서 바꿔준다</h4>
            <input value={irum} onKeyUp={txtEnter} onChange={txtInput}  placeholder='이름입력' className='txt'/> 
            <button type='button' className='btn btn-info' style={{marginLeft:'10px'}} onClick={btnInsert}>추가</button>
            <br/>
            <h4>이름을 더블클릭하면 삭제됩니다</h4>

            {
                names.map((name,index)=>(<li className='data' 
                onDoubleClick={()=>dataRemove(index)}>{name}</li>))
            }
        </div>
    );
}

export default SixApp;