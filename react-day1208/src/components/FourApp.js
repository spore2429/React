import React from 'react';
import Alert from '@mui/material/Alert';
import HailIcon from '@mui/icons-material/Hail';

function FourApp(props) {

    //배열변수선언1-1
    const names=['영환','성경','호석','민규','성신','형준'];

    //반복문을 변수에 저장후 출력해도 된다2-1
    const nameList=names.map((name)=>(<li style={{width:'32px',marginLeft:'455px'}}>{name}</li>))

    //색상을 5개 배열로 주시고... 결과물을 div로 출력하세요
    const colors=['red','blue','yellow','green','pink'];
    const colorList=colors.map((color)=>(<div className='box' style={{backgroundColor:color}}>{color}</div>))


    return (
        <div>
            <h3 className='alert alert-info'>FourApp입니다.</h3>
            <Alert severity="error">배열연습_#4 <HailIcon/></Alert>
            <div>
                <h3>map연습</h3>
                <ol>
                    {
                    //반복문을 직접 리턴해주기1-2
                    names.map((name,index)=>(<b style={{marginLeft:'10px'}}>{index}:{name}</b>))
                    }
                </ol>
                <ol>
                    {
                    //반복문을 직접 리턴해주기1-2
                    colors.map((color,index)=>(<div className='box' style={{backgroundColor:color}}>{index}:{color}</div>))
                    }
                </ol>
                <ol>{nameList}</ol>
                <ol>{colorList}</ol>
            </div>
        </div>
    );
}

export default FourApp;