import React from 'react';

function SixSubApp2({flower,price,linecolor}) {
    return (
        <div>
            <h3 className='alert alert-info'>SixApp의 두번째 자식입니다.</h3>
            <h3 className='line' style={{borderBlockColor:linecolor}}>{flower} 1묶음의 가격은 {price}원입니다.</h3>
        </div>
    );
}

export default SixSubApp2;