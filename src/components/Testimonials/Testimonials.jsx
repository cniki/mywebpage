import React, { useState } from 'react'
import './Testimonials.css';
import leftArrow from '../../assets/leftArrow.png'
import RightArrow from '../../assets/rightArrow.png'
import { testimonialsData } from '../../data/testimonialsData';
const Testimonials = () => {
    const [selected,setSelected] = useState(0);
    const tLenght= testimonialsData.length;

  return (
    <div className='Testimonials'>
        <div className="left-t">
            <span>Testimonials</span>
            <span className='stroke-text'>What They</span>
            <span>Say about us</span>
            <span>
                {testimonialsData[selected].review}
            </span>
            <span>
                <span style={{color: 'var(--orange)'}}>
                    {testimonialsData[selected].name}
                </span>{' '}
                - {testimonialsData[selected].status}
            </span>
        </div>
        <div className="right-t">
            <img src={testimonialsData[selected].image} alt='' />
            <div className="arrows">
                <img src={leftArrow} alt='' />
                <img src={RightArrow} alt='' />
            </div>
        </div>
    </div>
  )
}

export default Testimonials
