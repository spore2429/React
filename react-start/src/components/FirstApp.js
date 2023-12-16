import React from 'react';
import './MyStyle.css';
import img1 from '../image/wow.jpg';
import img2 from '../image/pro.jpg';

function FirstApp(props) {

    //스타일을 변수에 지정
    const styleImg1={
        width:'200px',
        border: '5px solid green',
        marginTop: '20px'
    }

    return (
        <div>
            <h2 className='line2'>FirstApp Component!!!</h2>
            <div style={{fontSize:'25px',marginLeft:'100px',
        backgroundColor:'lightgray'}}>
                안녕~~ 오늘은 목요일이야!!
            </div>

            {/* src의 이미지는 import */}
            <img src={img1} style={styleImg1}/>
            <img src={img2} style={{width:'200px',border:'3px dotted pink',
        marginLeft:'50px'}}/>

            {/* public image는 직접 호출가능 */}

            <h3>public image</h3>
            <img src='../image2/board.jpg' style={{width:'100px',border:'3px solid blue'}}/>
            <img src='../image2/horius.jpg' style={{width:'100px',border:'3px dotted gold',marginLeft:'50px'}}/>
        </div>
    );
}

export default FirstApp;