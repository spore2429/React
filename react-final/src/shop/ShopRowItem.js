import React from 'react';
import { useNavigate } from 'react-router-dom';

function ShopRowItem({idx,row}) {

    //url을 긁어와야 사진나옴
    let photoUrl="http://localhost:9000/save/"; //가상경로주소

    const navi=useNavigate();


    return (
        <tr>
            <td style={{textAlign:'center'}} valign='middle'>{idx+1}</td>
            <td ><img src={photoUrl+row.photo} className='small'/>
            <b>{row.sangpum}</b></td>
            <td style={{textAlign:'center'}}>
                <button type='button' className='btn btn-info' 
                onClick={()=>{
                    //navi("/shop/detail/"+row.num);
                    navi(`/shop/detail/${row.num}`);
                }}>상세보기</button>
            </td>
        </tr>
    );
}

export default ShopRowItem;