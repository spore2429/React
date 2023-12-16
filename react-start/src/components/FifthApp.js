// import React, { useState } from 'react';

// function FifthApp(props) {

//     const [name,setName]=useState('');
//     const [java,setJava]=useState(0);
//     const [react,setReact]=useState(0);
//     const [total,setToal]=useState(0);
//     const [average,setAverage]=useState(0);


//     return (
//         <div>
//             <h3 className='alert alert-info'>FifthApp입니다</h3>
//             <div className='inp'>
//             이름: <input type='text' style={{width:'100px'}} onChange={(e)=>{
//                     setName(e.target.value);

//                 }}/>
//                 <span style={{marginLeft:'10px'}}>{name}</span><br/><br/>

//                 자바점수: <input type='text' style={{width:'100px'}} onChange={(e)=>{
//                     setJava(e.target.value);

//                 }}/>
//                 <span style={{marginLeft:'10px'}}>{java}</span><br/><br/>

//                 리액트점수: <input type='text' style={{width:'100px'}} onChange={(e)=>{
//                     setReact(e.target.value);

//                 }}/>
//                 <span style={{marginLeft:'10px'}}>{react}</span><br/><br/>
//                 <button type='button' className='btn btn-outline-info' onClick={(e)=>{
//                     setName(name);
//                     setToal(Number(java)+Number(react));
//                     setAverage((Number(java)+Number(react))/2);

//                 }}>결과보기</button>
//             </div>
//             <div className='result'>
//                 ***시험결과***<br/><br/>
//                 이름 : {name}<br/><br/>
//                 자바점수 :{java}<br/><br/>
//                 리액트점수 : {react}<br/><br/>
//                 총점수 : {total}<br/><br/>
//                 평군점수 : {average}<br/><br/>
//             </div>
//         </div>
        
//     );
// }

// export default FifthApp;

import React, { useState, useRef } from 'react';

function FifthApp(props) {
    const [name, setName] = useState('');
    const [java, setJava] = useState(0);
    const [react, setReact] = useState(0);
    const [total, setTotal] = useState(0);
    const [average, setAverage] = useState(0);
    const javaInputRef = useRef(null);
    const reactInputRef = useRef(null);
    const [showResult, setShowResult] = useState(false);

    const handleEnter = (e, nextInputRef) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (nextInputRef) {
                nextInputRef.current.focus();
            } else {
                // 마지막 입력 필드에 도달하면 결과 버튼에 포커스를 이동
                document.getElementById('resultButton').focus();
            }
        }
    };

    const handleResultButtonClick = () => {
        setTotal(java + react);
        setAverage((java + react) / 2);
        setShowResult(true);
    };

    return (
        <div>
            <h3 className='alert alert-info'>FifthApp입니다</h3>
            <div className='inp'>
                이름:
                <input
                    type='text'
                    style={{ width: '100px',marginLeft:'2.5px'}}
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                    onKeyDown={(e) => handleEnter(e, javaInputRef)}
                />
                <span style={{ marginLeft: '10px' }}>{name}</span>
                <br /><br />

                자바점수:
                <input
                    ref={javaInputRef}
                    type='text'
                    style={{ width: '100px',marginLeft:'2.5px' }}
                    onChange={(e) => {
                        setJava(Number(e.target.value));
                    }}
                    onKeyDown={(e) => handleEnter(e, reactInputRef)}
                />
                <span style={{ marginLeft: '10px' }}>{java}</span>
                <br /><br />

                리액트점수:
                <input
                    ref={reactInputRef}
                    type='text'
                    style={{ width: '100px',marginLeft:'2.5px' }}
                    onChange={(e) => {
                        setReact(Number(e.target.value));
                    }}
                    onKeyDown={(e) => handleEnter(e, null)}
                />
                <span style={{ marginLeft: '10px' }}>{react}</span>
                <br /><br />

                <button
                    id='resultButton'
                    type='button'
                    className='btn btn-outline-info'
                    onClick={handleResultButtonClick}
                >
                    결과보기
                </button>
            </div>
            {showResult && (
                <div className='result'>
                    ***시험결과***<br /><br />
                    {/* 이름 : {name}<br /><br />
                    자바점수 : {java}<br /><br />
                    리액트점수 : {react}<br /><br /> */}
                    총점수 : {total}<br /><br />
                    평균점수 : {average}<br /><br />
                </div>
            )}
        </div>
    );
}

export default FifthApp;
