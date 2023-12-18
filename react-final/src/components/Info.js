import React from 'react';
import infoimg from '../image/dragonball.jpg'

function Info(props) {
    return (
        <div>
            <img src={infoimg} style={{width:'150px'}}/>
            <br/><br/>
            <div>손오공</div>
            <div>02-123-4567</div>
        </div>
    );
}

export default Info;