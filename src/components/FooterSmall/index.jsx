

import './index.css'
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

function FooterSmall() {
  return (
    <div className='footer-bg'>
        <div className='icon-value-row'>
            <MdEmail className='icon'/>
            <p className='icons-p'>vbsschool.info@gmail.com</p>

        </div>
        <div className='icon-value-row'>
          <FaLinkedin className='icon'/>
          <p className='icons-p'>https://www.linkedin.com/school/vishal-bharti-school/?originalSubdomain=in</p>
        </div>
        <div className='icon-value-row'>
          <FaPhone className='icon'/>
          <p className='icons-p'>9354937851/54</p>
            
        </div>
        <div className='icon-value-row'>
          <FaLocationDot className='icon'/>
          <p className='icons-p'>Vishal Bharti Senior Secondary School, Parwana Road, Pundrik Vihar, Pitam Pura, New Delhi, Delhi, India</p>
        </div>
        <p className='copy-right-para'>Copyright © 2024 Vishal Bharti Senior Secondary School - All Rights Reserved.</p>
    </div>
  )
}

export default FooterSmall