import React, {useState} from 'react'
import "./Card.css"
import DeckPage from './DeckPage.js'

function Card({ title, imgUrl, description }) {
    
    return (
        <div className="card-container">
            <div className="img">
                <img src={imgUrl } alt="no-photo"/>
            
            <div className="card-content">
                <div className="title">
                    <h1>{title}</h1>
                
                <div className="description">
                    {description}
                
            
            
            <div className="btn">
                <button >
                        <a>View more</a>
                    </button>
                
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>

    )
}

export default Card
