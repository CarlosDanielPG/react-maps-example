import React, { useState } from 'react';
import { InfoWindow } from '@react-google-maps/api';

const DoctorInfo = ({ doctor }) => {
    const [closed, setClose] = useState(true)

    const titleStyle = {
        background: `white`
    }
    
    const infoStyle = {
        width: "345px",
        padding: "1px ​12px 12px 12px"
    }
    
    const blueStyle = {
        backgroundColor: '#00A5B8'
    }

    const blueBorder = {
        border: "1px solid #00A5B8"
    }
    
    const yellowStyle = {
        backgroundColor: '#FBB500'
    }

    const yellowBorder = {
        border: "1px solid #FBB500"
    }

    const onLoadInfoWindow = infoWindow => {
        console.log('infoWindow: ', infoWindow)
    }

    return (
        <InfoWindow
            onLoad={onLoadInfoWindow}
            position={{ lat: doctor.latitude, lng: doctor.longitude }}
            key={doctor.id}>
        <div
            className={ closed ? "card-info-closed" : "card-info-opened" }
            onClick={ () => setClose(!closed) }>
        {
            closed ? 
                <div style={titleStyle}>
                    <p className="title">{ doctor.title }</p>
                    <div className="dot-div">
                        { doctor.crystal_aligner ? <span className="dot" style={blueStyle}></span> : null }
                        { doctor.smile_system ? <span className="dot" style={yellowStyle}></span> : null }
                    </div>
                </div>
                :
                <div className="card-info-container">
                    <p className="title-2">{ doctor.full_name }</p>
                    <p className="subtitle">{ doctor.office_name }</p>
                    <div class="specialities">
                        { doctor.crystal_aligner ? <span className="pill" style={blueBorder}>Cryst Aligner</span> : null }
                        { doctor.smile_system ? <span className="pill" style={yellowBorder}>Smile System</span> : null }
                    </div>
                </div>
        } 
        </div>
        </InfoWindow>
    );
}

export default DoctorInfo