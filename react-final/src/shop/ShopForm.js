import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ShopForm(props) {

    //변수
    const [photo,setPhoto]=useState('');
    const [sangpum,setSangpum]=useState('');
    const [su,setSu]=useState('');
    const [dan,setDan]=useState('');

    const navi=useNavigate(); //인서트후 목록으로 이동

    //url등록
    let uploadUrl="http://localhost:9000/shop/upload"; //백엔드 매핑주소
    let photoUrl="http://localhost:9000/save/"; //가상경로주소
    let insertUrl="http://localhost:9000/shop/insert"; 

    //file change시 호출이벤트
    const uploadImage=(e)=>{

        const uploadFile=e.target.files[0];
        const imageFile=new FormData();
        imageFile.append("uploadFile",uploadFile);

        axios({
            method:'post',
            url:uploadUrl, //url 업로드주소
            data:imageFile, //data로 이미지파일
            headers:{'Content-Type':'multipart/form-data'}
        }).then(res=>{
            setPhoto(res.data); //백엔드에서 보낸 변경된 이미지명을 photo변수에 넣는다
        }).catch(err=>{
            alert(err);
        });
    }

    //추가하는 함수 이벤트..추가후 이동
    const onInsert=()=>{

        //키값이 일치해야함
        axios.post(insertUrl,{sangpum,su,dan})
        .then(res=>{
            //insert처리후 코드들....
            //목록으로 이동
            navi("/shop/list");
        })
    }

    return (
        <div style={{marginLeft:'100px'}}>
            <table className='table table-bordered' style={{width:'600px'}}>
                <caption align='top'><b>상품등록</b></caption>
                <tbody>
                    <tr>
                        <th>상품명</th>
                        <td>
                            <input type='text' className='form-control' style={{width:'250px'}}
                            onChange={(e)=>{
                                setSangpum(e.target.value);
                            }}/>
                        </td>
                        <th>{sangpum}</th>
                    </tr>
                    <tr>
                        <th>상품사진</th>
                        <td>
                            {/* 사진 나오게 하려면 spring에서 전송되야지만 나온다 */}
                            <input type='file' className='form-control' style={{width:'250px'}}
                            onChange={uploadImage}/>
                        </td>
                        <th></th>
                    </tr>
                    <tr>
                        <th>수량</th>
                        <td>
                            <input type='text' className='form-control' style={{width:'250px'}}
                            onChange={(e)=>{
                                setSu(e.target.value);
                            }}/>
                        </td>
                        <th>{su}</th>
                    </tr>
                    <tr>
                        <th>단가</th>
                        <td>
                            <input type='text' className='form-control' style={{width:'250px'}}
                            onChange={(e)=>{
                                setDan(e.target.value);
                            }}/>
                        </td>
                        <th>{dan}</th>
                    </tr>
                    <tr>
                        <td colSpan='2'>
                            <img src={photoUrl+photo} style={{width:'120px',marginLeft:'130px'}}/>
                        </td>
                        <td>
                            <button type='button' className='btn btn-info' 
                            style={{width:'100px',height:'100px',marginLeft:'30px',marginTop:'10px'}}
                            onClick={onInsert}>상품등록</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default ShopForm;