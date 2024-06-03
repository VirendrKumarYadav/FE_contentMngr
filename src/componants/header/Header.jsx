import React from 'react'
import { useState } from "react";
import { GiRamProfile } from "react-icons/gi";
import { FaAngleDown } from "react-icons/fa";
import ProfileCard from "../header/ProfileCard";

const Header = () => {



const [profile, setProfile] = useState(false);
    return (

        <div class="header">
            <div className='log-text'>
                <p><b>Coinpr</b></p>
                <span>A <b>Todayq</b> product</span>
            </div>

            <div className='nav-items'>
                <a>360 Marketing</a>
                <a> MarketPlace </a>
                <a>Package</a>

            </div>
            <div className='profile-icon'>
                <div>
                    <GiRamProfile/>
                    <span>name</span>
                </div>
                <div onClick={(e)=>profile?setProfile(false):setProfile(true)}>
                    <FaAngleDown/>
                </div>
                
            </div>
         {
            profile?  <ProfileCard/>:""
         }
        </div>



    )
}

export default Header