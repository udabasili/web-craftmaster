import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';

const slideImages = [
    'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80',
    'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80',
    'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80'
];

export default function Portfolio({
    selectItem
    }) {
    return (
        <section id="portfolio" className="portfolio-section">
            <div className="container">
                <div className="row w-100 text-white">
                    <div className="col-lg-4">
                        <h2 
                            className="showcase-title pt-25" 
                            onClick={e => selectItem(e.target, 'text')}>
                            Portfolio
                        </h2>
                    </div>
                    <div className="col-lg-8">
                        <div className="showcase-title pt-25">
                            <p onClick={e => selectItem(e.target, 'text')}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Aenean nec enim nec est aliquet pellentesque id id est.
                                Curabitur hendrerit quam sapien, quis luctus massa lacinia at.
                                Cras ut metus at ex varius pulvinar.
                                Morbi convallis, turpis in luctus laoreet, nisi quam mollis sapien, at tempor elit mauris at justo.
                                Phasellus tristique ultrices efficitur.Donec quis tincidunt nisl.
                                Donec sit amet turpis eget sapien elementum imperdiet.
                            </p>
                        </div>
                    </div>
                </div>
                <div >
                    <Slide easing="ease">
                        <div className="each-slide">
                            <div 
                                onClick={e => selectItem(e.target, 'image')} 
                                style={{'backgroundImage': `url(${slideImages[0]})`}}>
                            </div>
                        </div>
                        <div className="each-slide">
                            <div 
                                onClick={e => selectItem(e.target, 'image')} 
                                style={{'backgroundImage': `url(${slideImages[1]})`}}>
                            </div>
                        </div>
                        <div className="each-slide">
                            <div    
                                onClick={e => selectItem(e.target, 'image')} 
                                style={{'backgroundImage': `url(${slideImages[2]})`}}>
                            </div>
                        </div>
                    </Slide>
                </div>
            </div>
        </section>
    )
}
