import React from 'react'
import './style.css'
import bgimg_400 from './assests/400px/mobile stack design background (1).jpg'
import inimg_400 from './assests/400px/mobile stack design terminals (1).png'
import inimg_992 from './assests/992px/terminals new.svg'
const Display = () => {
    return (
        <div className='background-image'>
            <img src={bgimg_400} alt='background_image' className='background-image_img' />
            <img src={inimg_400} alt='inter-mobile_image' className='inter-image_img' />
           <img src={inimg_992}  alt='inter-escktop_image' className='inter-image-desktop_img' />
                <div className="btnup">
                    <div className="btn_container-up">
                    <button className='btn'>STRIKE</button>
                    <button className='btn'>UNSTRIKE</button>
                    </div>
                </div>
                <div className="btndown">
                    <div className="btn_container-down">
                    <button className='btn'>CLAIM</button>
                    </div>
                    
                </div>
           
        </div>
    )
}

export default Display