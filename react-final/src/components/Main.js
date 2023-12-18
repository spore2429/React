import React from 'react';
import img1 from '../image/darius.jpg';
import img2 from '../image/urgot.jpg';
import img3 from '../image/tryn1.webp';
import img4 from '../image/tryn2.jpg';
import img5 from '../image/tryn3.jpg';
import img6 from '../image/black.jpeg';

function Main(props) {
    return (
        <div>
            <img src={img3} style={{width:'300px',height:'175px'}}/>
            <img src={img4} style={{width:'300px',height:'175px'}}/>
            <img src={img5} style={{width:'300px',height:'175px'}}/>
            <img src={img1} style={{width:'300px',height:'175px'}}/>
            <img src={img6} style={{width:'300px',height:'175px'}}/>
            <img src={img2} style={{width:'300px',height:'175px'}}/>
        </div>
    );
}

export default Main;