import React from 'react'
import "./../../App.css"
import { CgProfile } from "react-icons/cg";
import { FaCartPlus } from "react-icons/fa6";
import { CiBookmark } from "react-icons/ci";
import { MdOutlineHistory } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";

const ProfileCard = () => {
    return (
        <div className='profile-card'>
            <div className='card-cont'>
                <a><><CgProfile/></> My Account</a>
                <a><><FaCartPlus/></>My Cart</a>
                <a><><CiBookmark/></><>My BookMark</></a>
                <a><><MdOutlineHistory/></> order History</a>
                <hr></hr>
                <a><><IoIosLogOut/></> Log out.</a>
            </div>

        </div>
    )
}

export default ProfileCard