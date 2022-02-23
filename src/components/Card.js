import React from 'react'

export default function Card({
        image, 
        name, 
        link,
        details,
        mobile=null,
        selectItem

    }) {
        return (
            <div className={`card ${mobile}`}>
                <img 
                    src={image}  
                    onClick={e => selectItem(e.target, 'image')}
                    className="card__picture"
                    alt={name}
                />
                <h4 className="card__heading">
                    <span 
                        className="card__heading-span"
                        onClick={e => selectItem(e.target, 'text')}
                    >
                        {name}
                    </span>
                </h4>
                <div className='card__description'>
                <p 
                     onClick={e => selectItem(e.target, 'text')}
                    className='paragraph'>
                    {details}
                </p>
            </div>
        </div>
    );
}
