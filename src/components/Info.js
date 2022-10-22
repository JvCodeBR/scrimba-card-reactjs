import React from 'react'

export default function Info () {
    return (
        <div className="info">
            <div className="info--img" ></div>
            <h2 className="info--name">João Santos</h2>
            <p className="info--ocupation">Frontend Developer</p>
            <small className="info--website">joaosantos.website</small>
            
            <div className="info--buttons">
                <button className="btn-email"><i className="fa-solid fa-envelope"></i>    Email</button>
                <button className="btn-linkedin"><i className="fa-brands fa-linkedin"></i> LinkedIn</button>
            </div>
        
        </div>
    )
}