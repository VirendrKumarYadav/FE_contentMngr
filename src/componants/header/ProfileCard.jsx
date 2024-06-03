import React from 'react'
import "./../../App.css"
import { CgProfile } from "react-icons/cg";
import { FaCartPlus } from "react-icons/fa6";
import { CiBookmark } from "react-icons/ci";
import { MdOutlineHistory } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const ProfileCard = () => {
const navigate= useNavigate();
    const navigateToMyCart=()=>{
        navigate("/cart")
    }
    return (
        <div className='profile-card'>
            <div className='card-cont'>
                <a><><CgProfile/></> My Account</a>
                <a onClick={navigateToMyCart}><><FaCartPlus/></>My Cart</a>
                <a><><CiBookmark/></><>My BookMark</></a>
                <a><><MdOutlineHistory/></> order History</a>
                <hr></hr>
                <a><><IoIosLogOut/></> Log out.</a>
            </div>

        </div>
    )
}

export default ProfileCard