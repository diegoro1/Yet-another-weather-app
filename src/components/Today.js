import React from 'react';
import './Today.css'

export default function Today({city, country, temperature, highTemp, lowTemp, status}) {
    return (
        <div className="today">
            <div className="card">
                <div className="location">{city}, {country}</div>
                <div className="temperature">{Math.round(temperature)}º</div>
                <div className="status">{status}</div>
                <div className="sub-temp">
                    <div className="high">H {Math.round(highTemp)}º</div>
                    <div className="low">L {Math.round(lowTemp)}º</div>
                </div>
            </div>
        </div>
    )
}
