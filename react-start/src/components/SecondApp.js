import React from 'react';
import img1 from '../image/minq.jpg';

function SecondApp(props) {

    const imgStyle={

        width:'100px',
        height:'100px',
        border: '5px inset red',
        borderRadius:'50px'
    }

    let helloEle=<h2 className='alert alert-info'>Hello~~</h2>

    return (
        <div>
            <h2 className='alert alert-danger'>SecondApp입니다</h2>
            <img src={img1} style={imgStyle}/>
            {helloEle}
            {helloEle}
            {helloEle}
        </div>
    );
}

export default SecondApp;