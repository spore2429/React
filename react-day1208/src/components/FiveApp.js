import React from 'react';
import Alert from '@mui/material/Alert';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import img1 from '../image/bin.jpg';
import img2 from '../image/board.jpg';
import img3 from '../image/gta1.png';
import img4 from '../image/gta2.webp';
import img5 from '../image/gta3.webp';


function FiveApp(props) {

    //이미지를 배열변수에 넣기(src)
    const imgArrS=[img1,img2,img3,img4,img5];

    //public
    const imgArrP=['1','2','3','4','5'];

    return (
        <div>
            <h3 className='alert alert-info'>FiveApp입니다</h3>
            <Alert severity="success">배열연습_#5 <AccountBalanceIcon/></Alert>
            <h4>src 이미지를 배열로 넣어 반복하기</h4>
            {imgArrS.map((each)=>(<img src={each}/>))}

            <h4>public 이미지를 배열로 넣어 반복하기</h4>
            {
                //예전방식
                // imgArrP.map((each)=>(<img src={'../image2/'+each+'.jpg'} className='photo'/>))

                //리터럴방식
                imgArrP.map((each)=>(<img src={`../image2/${each}.jpg`} className='photo'/>))
            }
        </div>
    );
}

export default FiveApp;