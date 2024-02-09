import React from 'react'
import LogoWhiteIcon from '../../icons/LogoWhiteIcon'
import '../../styles/Footer.css'

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='flex gap-10px margin-120'><LogoWhiteIcon/></div>
        <div className='flex flex-column gap-8'>
            <div className='line'></div>
            <div className='footer-text-set'>
                <div><p className='footer-text'>Made with ❤️</p></div>
            </div>
        </div>
    </div>
  )
}

export default Footer