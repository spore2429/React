import React, { useState } from 'react';

function ThreeApp(props) {

    const[boards,setBoards]=useState([

        {
            no:1,
            writer:'김영환',
            subject:'영환아 미안',
            photo:'1'
        },
        {
            no:2,
            writer:'윤호석',
            subject:'호석이형 미안',
            photo:'2'
        },
        {
            no:3,
            writer:'이민규',
            subject:'민규형 미안',
            photo:'3'
        },
        {
            no:4,
            writer:'김영준',
            subject:'영준이형 미안',
            photo:'4'
        },
        {
            no:5,
            writer:'위시온',
            subject:'시온이형 미안',
            photo:'5'
        }
    ]);

    return (
        <div style={{marginLeft:'100px'}}>
            <h3 className='alert alert-danger'>ThreeApp입니다_객체베열 컴포넌트 배열안에 출력</h3>
            <table className='table table-bordered' style={{width:'600px'}}>
                <caption align='top'><b>배열객체출력</b></caption>
                <thead>
                    <tr>
                        <th width='60'>번호</th>
                        <th width='100'>사진</th>
                        <th width='260'>제목</th>
                        <th width='100'>작성자</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        boards.map((row,index)=>(<tr>
                            <td>{row.no}</td>
                            <td><img src={`../image2/${row.photo}.png`} style={{width:'50px'}}/></td>
                            <td>{row.subject}</td>
                            <td>{row.writer}</td>
                        </tr>))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default ThreeApp;