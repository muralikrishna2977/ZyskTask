import React from 'react'
import './CardForAnalytics.scss'

function CardForAnalytics(props) {
    const {header, content, iconPath} = props
    return (
        <div className='card_for_analytics'>
            <img src={iconPath} alt="Our People" />
            <h3>{header}</h3>
            <p>{content}</p>
        </div>
    )
}

export default CardForAnalytics;


