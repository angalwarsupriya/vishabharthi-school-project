
import './index.css'
import {Link} from 'react-router-dom'
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
function Footer() {
  return (

  <div className='footer-bg-con'>
    <div className='footer-details-con'>
      <div className='footer-row'>
         <MdEmail className='footer-icon'/>
         <p className='footer-p'>vbsschool.info@gmail.com</p>
      </div>
      <div className='footer-row'>
         <FaLinkedin className='footer-icon'/>
          <Link to='https://www.linkedin.com/school/vishal-bharti-school/?originalSubdomain=in'>
          <p className='footer-link-p'>
           https://www.linkedin.com/school/vishal-bharti-school/?originalSubdomain=in
           </p>.
          </Link>
      </div>
      <div className='footer-row'>
         <FaPhone className='footer-icon'/>
         <p className='footer-p'>9354937851/54</p>
      </div>
      <div className='footer-row'>
         <FaLocationDot className='footer-icon'/>
         <p className='footer-p'>Vishal Bharti Senior Secondary School, Parwana Road, Pundrik Vihar, Pitam Pura, New Delhi, Delhi, India</p>
      </div>
      <p className='copy-right-p'>Copyright © 2024 Vishal Bharti Senior Secondary School - All Rights Reserved.</p>
    </div>
    <div className='footer-links-con'>
      <div className='details-section'>
        <h5 className='deatils-title'>ABOUT US</h5>
        <div className='all-links-con'>
          <Link to='https://vishalbhartischool.in/introduction' className='link-ele'><p className='footer-p'>Introduction</p></Link>
          <Link to='https://vishalbhartischool.in/our-mission-%26-vision' className='link-ele'><p className='footer-p'>Our Mission & Vision</p></Link>
          <Link to='https://vishalbhartischool.in/mandatory-disclosure-1' className='link-ele'><p className='footer-p'>Mandatory Disclousure</p></Link>
          <Link to='https://vishalbhartischool.in/principals-desk' className='link-ele'><p className='footer-p'>Principal's Desk</p></Link>
        </div>
      </div>
      <div className='details-section'>
        <h5 className='deatils-title'>INFRASTRUCTURE</h5>
        <div className='all-links-con'>
          <Link to='https://vishalbhartischool.in/our-mission-%26-vision' className='link-ele'><p className='footer-p'>Reception</p></Link>
          <Link to='https://vishalbhartischool.in/mathematics-laboratory' className='link-ele'><p className='footer-p'>Mathemetics Laboratory</p></Link>
          <Link to='https://vishalbhartischool.in/bio-%2C-chem-%2C-phy-lab' className='link-ele'><p className='footer-p'>Lab Room</p></Link>
          <Link to='https://vishalbhartischool.in/computer-lab' className='link-ele'><p className='footer-p'>Computer Lab</p></Link>
          <Link to='https://vishalbhartischool.in/play-zone' className='link-ele'><p className='footer-p'>Play Zone</p></Link>

        </div>
      </div>
      <div className='details-section'>
        <h5 className='deatils-title'>ADMISSON</h5>
        <div className='all-links-con'>
          <Link to='https://vishalbhartischool.in/procedure' className='link-ele'><p className='footer-p'>Procedure</p></Link>
          <Link to='https://vishalbhartischool.in/registration-form' className='link-ele'><p className='footer-p'>Registration Form</p></Link>
          <Link to='https://vishalbhartischool.in/admission%2Fwithdrawal-rule' className='link-ele' ><p className='footer-p'>Rules</p></Link>
        </div>
      </div>
      <div className='details-section'>
        <h5 className='deatils-title'>ACADEMICS</h5>
        <div className='all-links-con'>
          <Link to='https://vishalbhartischool.in/rules-%26-regulations' className='link-ele'><p className='footer-p'>Rules/Regulations</p></Link>
          <Link to='https://vishalbhartischool.in/assessments' className='link-ele'><p className='footer-p'>Asseddments</p></Link>
          <Link to='https://vishalbhartischool.in/counselling' className='link-ele'><p className='footer-p'>Counselling</p></Link>

        </div>
      </div>
      <div className='details-section'>
        <h5 className='deatils-title'>ACTIVITIES</h5>
        <div className='all-links-con'>
          <Link to='https://vishalbhartischool.in/glimpse-of-activities' className='link-ele'><p className='footer-p'>Glimpse</p></Link>
          <Link to='https://vishalbhartischool.in/planner-1' className='link-ele'><p className='footer-p'>Planner</p></Link>
        </div>
      </div>
    
    </div>
  </div>
  
  )
}

export default Footer
