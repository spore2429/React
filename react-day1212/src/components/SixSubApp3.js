import React from 'react';

function SixSubApp3({incre,decre}) {
    return (
        <div>
           <h3 className='alert alert-info'>SixApp의 세번째 자식입니다.</h3> 
           <button type='button' className='btn btn-info' onClick={incre}>증가</button>
           <button type='button' className='btn btn-danger' onClick={decre} style={{marginLeft:'5px'}}>감소</button>
        </div>
    );
}

export default SixSubApp3;