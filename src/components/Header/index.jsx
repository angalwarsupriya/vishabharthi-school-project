


import './index.css'
import {Link} from 'react-router-dom'

import React from 'react';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { RiMenuSearchLine } from "react-icons/ri";

function Header() {

  return (
    <header className='header-bg-con'>
     <nav className='nav-in-lg-device'>
        <ul className="nav-menu">
            <li className="nav-menu-item">
              <Link to="/" className='link-ele' >
                <button>
                  <p className='link-p'>Home</p>
                </button>
              </Link>

            </li>
            <li className="nav-menu-item">
              <Popup  position="bottom" trigger={
                <button>
                  <p className='link-p'>About Us</p>
                </button>
                }>
                <div style={{display:'flex', flexDirection:'column'}}>
                   <Link className='link-ele' to='https://vishalbhartischool.in/introduction'>Introduction</Link>
                   <Link className='link-ele' to='https://vishalbhartischool.in/our-mission-%26-vision'>Our Mission & Vision</Link>
                   <Link className='link-ele' to='https://vishalbhartischool.in/mandatory-disclosure-1'>Mandatory</Link>
                   <Link className='link-ele' to='https://vishalbhartischool.in/principals-desk'>Principals Desk</Link>
                </div>
              </Popup>
            </li>
            <li className="nav-menu-item">
            <Popup  position="bottom" trigger={
                <button>
                  <p className='link-p'>Infrastructure</p>
                </button>
                }>
                <div style={{display:'flex', flexDirection:'column'}}>
                 <Link className='link-ele' to='https://vishalbhartischool.in/our-mission-%26-vision'>Reception</Link>
                 <Link className='link-ele' to='https://vishalbhartischool.in/mathematics-laboratory'>Mathemetics Laboratory</Link>
                 <Link className='link-ele' to='https://vishalbhartischool.in/bio-%2C-chem-%2C-phy-lab'>Lab Room</Link>
                 <Link className='link-ele' to='https://vishalbhartischool.in/computer-lab'>Computer Lab</Link>
                 <Link className='link-ele' to='https://vishalbhartischool.in/play-zone'>Play Zone</Link>
                </div>
              </Popup>
            </li>
            <li className="nav-menu-item">
            <Popup  position="bottom" trigger={
                <button>
                  <p className='link-p'>Admission</p>
                </button>
                }>
                <div style={{display:'flex', flexDirection:'column'}}>
                  <Link className='link-ele' to='https://vishalbhartischool.in/procedure'>Procedure</Link>
                  <Link className='link-ele' to='https://vishalbhartischool.in/registration-form'>Registration Form</Link>
                  <Link className='link-ele' to='https://vishalbhartischool.in/admission%2Fwithdrawal-rule'>Rules</Link>
                </div>
              </Popup>
            </li>
            <li className="nav-menu-item">
            <Popup  position="bottom" trigger={
                <button>
                  <p className='link-p'>Academics</p>
                </button>
                }>
                <div style={{display:'flex', flexDirection:'column'}}>
                 <Link className='link-ele' to='https://vishalbhartischool.in/rules-%26-regulations'>Rules/Regulations</Link>
                 <Link className='link-ele'  to='https://vishalbhartischool.in/assessments'>Asseddments</Link>
                 <Link className='link-ele' to='https://vishalbhartischool.in/counselling'>Counselling</Link>
                </div>
              </Popup>
            </li>
            <li className="nav-menu-item">
              <Popup  position="bottom" 
           trigger={
                <button>
                  <p className='link-p'>Activities</p>
                </button>
                }>
                <div style={{display:'flex', flexDirection:'column'}}>
                  <Link className='link-ele' to='https://vishalbhartischool.in/glimpse-of-activities'>Glimpse</Link>
                  <Link className='link-ele' to='https://vishalbhartischool.in/planner-1'>Planner</Link>
                </div>
              </Popup>
            </li>
           
        </ul>
     </nav>
     <nav className='nav-in-sm'>
        <Popup modal trigger={
          <button> 
            <RiMenuSearchLine className='menu-icon'/>
          </button>
          } position="center">
          <div>
            <ul>
              <li>
                <button className='li-btn'>
                  Home
                </button>
              </li>

              <li>
                <button className='li-btn'>
                  Home
                </button>
              </li>

              <li>
                <button className='li-btn'>
                  Home
                </button>
              </li>

              <li>
                <button className='li-btn'>
                  Home
                </button>
              </li>

              <li>
                <button className='li-btn'>
                  Home
                </button>
              </li>

              <li>
                <button className='li-btn'>
                  Home
                </button>
              </li>
              
            </ul>
          </div>
        </Popup>
     </nav>
    </header>
  )
}

export default Header

/*
  <NavLink to="/" className='link-ele' >
                <button>
                  <p className='link-p'>Home</p>
                </button>
              </NavLink>*/

